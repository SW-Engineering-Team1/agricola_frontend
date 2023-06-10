<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-200">
    <h1 class="text-4xl text-center my-5">게임 대기방 ({{ roomName }})</h1>
    <p>참여 인원 : {{ participantNum }} / 제한 인원 : {{ limitNum }}</p>
    <div class="flex justify-center flex-wrap mb-10">
      <div
        v-for="player in playersInRoom"
        :key="player"
        class="m-1 flex-auto min-w-0 rounded shadow p-4 text-center mb-2"
        :class="{
          'bg-yellow-500 text-white': isHost(player),
          'bg-white': !isHost(player)
        }"
      >
        <p class="text-lg font-medium">{{ player === user ? player + ' (나)' : player }}</p>
      </div>
    </div>
    <div>
      <button
        @click="exitRoom"
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
      >방 나가기
      </button>
      <button
        v-if="isHost(user)"
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
    const rooms = ref([]);
    const roomName = ref('');
    const hostId = ref('');
    const limitNum = ref('');
    const participantNum = ref('');
    const user = computed(() => store.state.user);
    const playersInRoom = ref(computed(() => store.state.playersInRoom));

    // 방장 구분
    const isHost = (player) => {
      return hostId.value === player;
    };

    // 방에 접속한 유저 목록 업데이트
    const updatePlayersInRoom = (playerInRoom) => {
      store.commit('setPlayersInRoom', playerInRoom);
    }

    // 방 나가기
    const exitRoom = () => {
      socket.emit("exitRoom", {
        roomId: roomId.value,
        userId: user.value,
      });
      router.push('/lobby');

      // 방장이 방 나가면 store 초기화
      if (isHost(user.value)) store.commit('resetPlayersInRoom');
    };

    // 게임 시작
    const startGame = () => {
      const roomUsers = computed(() => playersInRoom.value.map(player => ({
        roomId: roomId.value,
        userId: player,
      })));
      socket.emit("startGame", roomUsers.value);
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
        store.commit('setHost', hostId.value);

        socket.on("updatedRooms", (data) => {
          rooms.value = data.result;
        });

        socket.on("joinRoom", (playerInRoom) => {
          updatePlayersInRoom(playerInRoom);
        });

        socket.on("exitRoom", (playerInRoom) => {
          updatePlayersInRoom(playerInRoom);
        });

        socket.on("startGame", (gameStatus) => {
          store.commit('setGameStatus', gameStatus.result.gameStatusList);
          store.commit('setMajorFac', gameStatus.result.mainFacilityList);
          router.push(`/room/${roomId.value}/game`);
        });

      } catch (err) {
        console.log(err);
      }
    });

    onUnmounted(() => {
      socket.off("updatedRooms");
      socket.off("joinRoom");
      socket.off("exitRoom");
    });

    return {
      user,
      exitRoom,
      roomName,
      hostId,
      participantNum,
      limitNum,
      isHost,
      startGame,
      playersInRoom,
    }
  }
}
</script>