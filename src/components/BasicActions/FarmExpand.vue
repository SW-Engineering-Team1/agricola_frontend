<template>
  <div class="relative">
    <img
      src="@/assets/images/Action/1_FarmExpand.jpg"
      @click="handleClick(isMyTurn)"
      :class="{'w-full cursor-pointer transform transition duration-500 ease-in-out hover:scale-110': true, 'pointer-events-none': !isMyTurn}"
      alt="farmExpand"
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
import {computed, onMounted, ref} from "vue";
import { io } from "socket.io-client";
import { useStore } from "vuex";
import {useRoute} from 'vue-router'

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
    const showImage = ref(false),

    useFarmExpand = () => {
      socket.emit("useActionSpace", {
        actionName: "else", // TODO: 수정 필요
        userId: user.value,
        roomId: roomId.value,
        goods: [
          {
            name: "wood",
            num: 10,
            isAdd: false,
          },
          {
            name: "reed",
            num: 4,
            isAdd: false,
          },
          {
            name: "woodHouse",
            num: 2,
            isAdd: true,
          },
        ],
      });
    };

    const handleClick = (isMyTurn) => {
      if (isMyTurn) {
        useFarmExpand();
      }
    };

    onMounted(async () => {
      showImage.value = !showImage.value;
      roomId.value = route.params.room;

      socket.on("endRound", () => {
        showImage.value = !showImage.value;
      });
    });

    return {
      handleClick,
      showImage
    }
  },
};
</script>

<style>
.pointer-events-none {
  pointer-events: none;
}
</style>