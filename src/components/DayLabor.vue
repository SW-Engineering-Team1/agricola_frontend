<template>
  <div>
    <button
      class="rounded Action6" @click="useDayLabor" style="background: transparent; border: none; padding: 0">
        <img src="../assets/images/Action/6_DayLabor.jpg" width="108" />
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

    const useDayLabor = () => {
      socket.emit("useActionSpace", {
        actionName: "GetFood",
        userId: "vincent_test1",
        roomId: 1,
        goods: [
          {
            name: "food",
            num: 2,
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
      useDayLabor,
      roomId,
      user,
    };
  },
};
</script>
