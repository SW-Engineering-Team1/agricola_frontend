<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-200">
    <div class="text-3xl font-bold mb-10">
      <p>방 번호 : {{ roomId }}</p>
      <p>현재 로그인한 유저 : {{ user }}</p>
      <p>방 이름 : {{ roomName }}</p>
      <p>방장 : {{ hostId }}</p>
      <p>참여 인원 : {{participantNum}} / 제한 인원 : {{ limitNum }}</p>
    </div>
    <!--TODO: 현재 방에 들어와있는 유저 목록 및 정보 표시-->
    <div class="mb-10 w-1/2">
<!--      <div v-for="user in users" :key="user.id" class="flex items-center p-4 bg-white rounded shadow mb-2">-->
<!--        <p class="text-lg font-medium">{{ user.name }}</p>-->
<!--      </div>-->
    </div>
    <div>
      <button
        @click="exitRoom"
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
      >방 나가기
      </button>
      <button
        v-if="isHost"
        @click="startGame"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 ml-4"
      >게임 시작
      </button>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, computed, onUnmounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {io} from 'socket.io-client'
import axios from 'axios'

export default {
  name: 'ReadyRoomPage',

  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const socket = io("localhost:3000");

    const roomId = ref('');
    const user = computed(() => store.state.user);
    const rooms = ref([]);
    const roomName = ref('');
    const hostId = ref('');
    const limitNum = ref('');
    const participantNum = ref('');

    // 방장 구분
    const isHost = computed(() => {
      return hostId.value === user.value;
    });

    // 방 나가기
    const exitRoom = () => {
      socket.emit("exitRoom", {
        roomId: roomId.value,
        userId: user.value,
      });
      router.push('/lobby');
    };

    // 게임 시작
    const startGame = () => {
      console.log("게임 시작");
      // socket.emit("startGame", {
      //   roomId: roomId.value,
      // });
      // router.push('/game')
    };

    onMounted(async () => {
      roomId.value = route.params.room;

      try {
        const res = await axios.get('http://localhost:3000/room');
        rooms.value = res.data.result;
        rooms.value.forEach((room) => {
          if (room.room_id === Number(roomId.value)) {
            roomName.value = room.room_name;
            hostId.value = room.host_id;
            participantNum.value = room.participant_num;
            limitNum.value = room.limit_num;
          }
        });

        socket.on("patchRoomList", (data) => {
          rooms.value = data.result;
        });
      } catch (err) {
        console.log(err);
      }
    });

    onUnmounted(() => {
      socket.off("patchRoomList");
    });

    return {
      roomId,
      user,
      exitRoom,
      roomName,
      hostId,
      participantNum,
      limitNum,
      isHost,
      startGame,
    }
  }
}
</script>