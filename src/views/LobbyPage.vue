<template>
  <div id="app" class="font-sans antialiased text-gray-900">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl text-center my-5">로비</h1>
      <h2 class="text-lg text-center mb-5">로그인한 유저 : {{ user }}</h2>

      <div class="bg-gray-300 p-5 rounded-lg shadow-lg">
        <div class="flex justify-center">
          <button @click="showModal = true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            방 만들기
          </button>
        </div>

        <!-- 방 만들기 모달 창 -->
        <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <!-- Modal content -->
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-4xl leading-6 font-medium text-gray-900" id="modal-title">
                      방 만들기
                    </h3>
                    <div class="mt-2">
                      <label for="roomName">방 이름</label>
                      <input v-model="roomName" placeholder="방 이름을 작성해주세요." class="mt-1 p-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500">
                    </div>
                    <div class="mt-2">
                      <label for="playerCount">플레이어 수</label>
                      <select v-model="limitNum" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option value="1">1명</option>
                        <option value="2">2명</option>
                        <option value="3">3명</option>
                        <option value="4">4명</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button @click="createRoom" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  확인
                </button>
                <button @click="showModal = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 방 목록 -->
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
              v-for="room in rooms"
              :key="room.room_id"
              class="flex flex-col bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md">
            <button
                @click="joinRoom(room.room_id)"
                class="text-center">
              {{ room.room_name }} ({{ room.participant_num }} / {{ room.limit_num }})
              <br>
              게임 상태 : {{ room.status }}
              <br>
              방장 : {{ room.host_id }}
            </button>
          </div>
        </div>
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

export default {
  name: 'LobbyPage',
  methods: {
    goToMakeRoom() {
      this.$router.push('/make-room')
    }
  },

  setup() {
    const router = useRouter();
    const socket = io("localhost:3000");
    const roomName = ref(''); // 방 이름
    const hostId = ref(''); // 방장 아이디
    const limitNum = ref(''); // 제한인원
    const rooms = ref([]);

    const store = useStore();
    const user = computed(() => store.state.user);

    const createRoom = () => {
      socket.emit("createRoom", {
        roomName: roomName.value,
        hostId: user.value,
        limitNum: limitNum.value,
      });
      roomName.value = '';
      hostId.value = '';
      limitNum.value = '';

      socket.once("updatedRooms", (data) => {
        joinRoom(data.result[data.result.length - 1].room_id);
      });
    };

    const joinRoom = (roomId) => {
      socket.emit("joinRoom", {
        roomId: roomId,
        userId: user.value,
      });
      router.push(`/room/${roomId}`);
    };

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
      roomName,
      hostId,
      limitNum,
      rooms,
      createRoom,
      joinRoom,
      user
    }
  },

  data() {
    return {
      showModal: false,
    }
  }
}
</script>