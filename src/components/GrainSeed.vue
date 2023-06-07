<template>
  <div>
    <button class="rounded Action3" @click="useGrainSeed" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/Action/3_GrainSeed.jpg" width="108" />
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
        userId: "vincent_test1",
        roomId: 1,
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
