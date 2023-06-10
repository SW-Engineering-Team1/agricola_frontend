<!--   BasicAction6 날품팔이 행동칸  -->
<template>
  <div>
    <button class="w-full" @click="useDayLabor">
      <img src="../../assets/images/Action/6_DayLabor.jpg" alt="dayLabor" />
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
