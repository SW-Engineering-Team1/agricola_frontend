<template>
  <div @click="getWood" class="bg-gray-100 p-4 w-1/4 h-1/4">나무 + 3</div>
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
    const wood = ref("");
    const getWood = () => {
      socket.emit("useActionSpace", {
        actionName: "getWood",
        userId: user.value,
        roomId: 1,
        goods: [
          {
            name: "wood",
            num: 3,
            isAdd: true,
          },
        ],
      });
    };

    onMounted(async () => {
      roomId.value = route.params.room;
      socket.on();
    });
    onUnmounted();
    return {
      getWood,
      roomId,
      user,
    };
  },
};
</script>
