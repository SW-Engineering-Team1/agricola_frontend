<template>
  <div @click="useGrainSeed" class="bg-gray-100 p-4 w-1/4 h-1/4">
    곡식종자요
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
        roomId: roomId.value, //1로 해야지 워크벤치에서 확인가능
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
