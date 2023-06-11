<!-- Action10 낚시 행동칸 -->
<template>
  <div>
    <button class="w-full" @click="useFishing">
      <img src="../../assets/images/Action/10_Fishing.jpg" alt="fishing" />
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

    const useFishing = () => {
      socket.emit("useActionSpace", {
        actionName: "GetFood",
        userId: user.value,
        roomId: roomId.value,
        goods: [
          {
            name: "food",
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
      useFishing,
      roomId,
      user,
    };
  },
};
</script>
