<template>
  <div id="app">
    <h1 class="text-4xl">로비</h1>
    <h2>로그인한 유저 : {{ user }}</h2>
    <div class="bg-red-300 p-5">
      <button @click="showModal = true" class="bg-blue-300 mx-80 p-2 my-5">
        방 만들기
      </button>

      <!-- 방 만들기 모달 창 -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="showModal = false">&times;</span>
          <div>
            <h1 class="text-4xl">방 만들기</h1>
            <div>
              <label for="roomName">방 이름</label>
              <input v-model="roomName" placeholder="방 이름을 작성해주세요.">
            </div>
            <div>
              <label for="playerCount">플레이어 수</label>
              <select v-model="limitNum">
                <option value="1">1명</option>
                <option value="2">2명</option>
                <option value="3">3명</option>
                <option value="4">4명</option>
              </select>
            </div>
          </div>
          <!-- 확인 및 취소 버튼 -->
          <div class="flex justify-center">
            <button @click="createRoom" class="bg-blue-300 mx-2 p-2">확인</button>
            <button @click="showModal = false" class="bg-blue-300 mx-2 p-2">취소</button>
          </div>
        </div>
      </div>

      <!-- 방 목록 -->
      <!-- 방 고유 아이디, 방 이름, 현재 인원 수, 제한 인원, 게임 상태, 방장의 닉네임 -->
      <div class="flex flex-wrap justify-center">
        <div
          v-for="room in rooms"
          :key="room.room_id"
          class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <router-link
            :to="'/room/' + room.room_id"
            class="block text-center">
            {{ room.room_name }} ({{ room.participant_num }} / {{ room.limit_num }})
            <br>
            게임 상태 : {{ room.status }}
            <br>
            방장 : {{ room.host_id }}
          </router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useStore } from 'vuex'
// import { useRouter } from 'vue-router'
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
    // const router = useRouter();
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
        // TODO: 방 생성 시 본인의 아이디를 hostId로 넣어주기
        // hostId: hostId.value,
        hostId: "ohgnues",
        limitNum: limitNum.value,
      });
      roomName.value = '';
      hostId.value = '';
      limitNum.value = '';
    };

    onMounted(() => {
      // /room 방문 시 자동으로 GET 요청 후 방 목록 불러오기
      axios.get('http://localhost:3000/room')
        .then((res) => {
          rooms.value = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        }
      );

      socket.on("patchRoomList", (data) => {
        rooms.value = data.result;

        // TODO: 방 생성 확인 시 본인이 만든 방으로 자동으로 이동하는 기능 구현 (hostId와 본인의 아이디가 일치할 경우)
        // router.push('/room/' + hostId);
      });
    });

    onUnmounted(() => {
      socket.off("patchRoomList");
    });

    const resetRooms = () => {
      localStorage.setItem('rooms', JSON.stringify(rooms.value));
      rooms.value = [];
    }
    
    return {
      roomName,
      hostId,
      limitNum,
      rooms,
      resetRooms,
      createRoom,
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

<style>
.modal {
  display: block; 
  position: fixed; 
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>