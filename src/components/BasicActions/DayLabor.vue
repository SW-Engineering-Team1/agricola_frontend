<!--   BasicAction6 날품팔이 행동칸  -->
<template>
  <div class="relative">
    <img
      src="@/assets/images/Action/6_DayLabor.jpg"
      @click="handleClick(isMyTurn)"
      :class="{'w-full cursor-pointer transform transition duration-500 ease-in-out hover:scale-110': true, 'pointer-events-none': !isMyTurn}"
      alt="dayLabor"
    />
    <img
      v-if="showImage"
      src="@/assets/images/Etc/Player1.png"
      alt="Player1 Image"
      class="overlay absolute inset-0 w-full h-full"
    />
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { io } from "socket.io-client";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  props: {
    isMyTurn: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const socket = io("localhost:3000");
    const store = useStore();
    const route = useRoute();

    const roomId = ref("");
    const user = computed(() => store.state.user);
    const showImage = ref(false);

    const useDayLabor = () => {
      socket.emit("useActionSpace", {
        actionName: "GetFood",
        userId: user.value,
        roomId: roomId.value,
        goods: [
          {
            name: "food",
            num: 2,
            isAdd: true,
          },
        ],
      });
    };

    const handleClick = (isMyTurn) => {
      if (isMyTurn) {
        useDayLabor();
        showImage.value = !showImage.value;
      }
    }

    onMounted(async () => {
      roomId.value = route.params.room;
      socket.on("endRound", () => {
        showImage.value = !showImage.value;
      });
    });

    return {
      handleClick,
      showImage
    };
  },
};
</script>

<style>
.pointer-events-none {
  pointer-events: none;
}
</style>
