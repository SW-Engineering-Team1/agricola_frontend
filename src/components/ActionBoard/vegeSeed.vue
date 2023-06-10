<template>
  <div @click="getVegeSeed" class="bg-gray-100 p-4 w-1/4 h-1/4">채소종자요</div>
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

    const getVegeSeed = () => {
      socket.emit("useActionSpace", {
        actionName: "getVegeSeed",
        userId: user.value,
        roomId: 1,
        goods: [
          {
            name: "vegeOnStorage",
            num: 1,
            isAdd: true,
          },
        ],
      });
      console.log(user.value);
    };

    onMounted(async () => {
      roomId.value = route.params.room;
    });
    onUnmounted();
    return {
      getVegeSeed,
      roomId,
      user,
    };
  },
};
</script>
