<template>
  <div id="app" class="font-sans antialiased text-gray-900">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl text-center my-5">로비</h1>
      <h2 class="text-lg text-center mb-5">로그인한 유저 : {{ user }}</h2>

      <div class="bg-gray-300 p-5 rounded-lg shadow-lg">
        <div class="flex justify-center">
          <CreateRoomButton @openModal="showModal = true" />
        </div>
        <!-- 방 만들기 모달 창 -->
        <CreateRoomModal
          :showModal="showModal"
          :user="user"
          @closeModal="showModal = false"
          @createRoom="handleCreateRoom"
        />
        <!-- 방 목록 -->
        <RoomList
          :rooms="rooms"
          @joinRoom="handleJoinRoom"
        />
      </div>
    </div>
    <router-view/>
  </div>
</template>


<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { io } from "socket.io-client";
import axios from 'axios'
import CreateRoomButton from '@/components/CreateRoomButton.vue'
import CreateRoomModal from '@/components/CreateRoomModal.vue'
import RoomList from '@/components/RoomList.vue'

export default {
  name: 'LobbyPage',
  components: {RoomList, CreateRoomModal, CreateRoomButton},

  setup() {
    const router = useRouter();
    const socket = io("localhost:3000");
    const rooms = ref([]);

    const store = useStore();
    const user = computed(() => store.state.user);
    const showModal = ref(false);

    const createRoom = (room) => {
      socket.emit("createRoom", room);
      socket.once("updatedRooms", (data) => {
        router.push(`/room/${data.result[data.result.length - 1].room_id}`);
      });
    };

    const joinRoom = (roomId) => {
      socket.emit("joinRoom", {
        roomId: roomId,
        userId: user.value,
      });
      router.push(`/room/${roomId}`);
    };

    const handleCreateRoom = (room) => {
      room.hostId = user.value;
      createRoom(room);
      showModal.value = false;
    }

    const handleJoinRoom = (roomId) => {
      joinRoom(roomId);
    }

    onMounted(() => {
      // 로비 방문 시 자동으로 GET 요청 후 방 목록 불러오기
      axios.get('http://localhost:3000/room')
        .then((res) => {
          rooms.value = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        }
      );

      socket.on("updatedRooms", (data) => {
        rooms.value = data.result;
      });
    });

    onUnmounted(() => {
      socket.off("updatedRooms");
    });
    
    return {
      rooms,
      handleCreateRoom,
      handleJoinRoom,
      user,
      showModal
    }
  }
}
</script>