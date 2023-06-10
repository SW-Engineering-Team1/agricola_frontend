<template>
  <div @click="addRoom" class="bg-gray-100 p-4 w-1/4 h-1/4">
    농장확장
    <div class="mt-2">
      <label for="playerCount">방 갯수</label>
      <select
        id="playterCount"
        v-model="limitNum"
        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="1">1개</option>
        <option value="2">2개</option>
        <option value="3">3개</option>
      </select>
    </div>
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

    const addRoom = () => {
      socket.emit("useActionSpace", {
        actionName: "addRoom",
        userId: "p1",
        roomId: 1,
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
      console.log(user.value);
    };

    onMounted(async () => {
      roomId.value = route.params.room;
    });
    onUnmounted();
    return {
      addRoom,
      roomId,
      user,
    };
  },
};
</script>
