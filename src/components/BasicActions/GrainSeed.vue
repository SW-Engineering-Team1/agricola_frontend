<!--  BasicAction3 곡식종자 행동칸  -->
<template>
  <div>
    <img
        src="@/assets/images/Action/3_GrainSeed.jpg"
        @click="isMyTurn ? useGrainSeed : null"
        :class="{'w-full cursor-pointer transform transition duration-500 ease-in-out hover:scale-110': true, 'pointer-events-none': !isMyTurn}"
        alt="grainSeed"
    />
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from "vue";
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

    const useGrainSeed = () => {
      socket.emit("useActionSpace", {
        actionName: "addGrainSeed",
        userId: user.value,
        roomId: roomId.value,
        goods: [
          {
            name: "grainOnStorage",
            num: 1,
            isAdd: true,
          },
        ],
      });
    };

    onMounted(async () => {
      roomId.value = route.params.room;
    });
    onUnmounted();
    return {
      useGrainSeed,
      roomId,
      user,
    };
  },
};
</script>

<style>
.pointer-events-none {
  pointer-events: none;
}
</style>