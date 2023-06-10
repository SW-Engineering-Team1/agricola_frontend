<template>
  <div>
    <button class="w-full" @click="useGrainSeed" >
      <img src="@/assets/images/Action/3_GrainSeed.jpg" alt="grainSeed" />
    </button>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { io } from "socket.io-client";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
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
            name: "grain",
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
