<template>
    <div id="app">
      <h1 class="text-4xl">로비</h1>
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
                <input v-model="newRoomName" placeholder="방 이름을 작성해주세요.">
              </div>
              <div>
                <label for="playerCount">플레이어 수</label>
                <select v-model="newRoomPlayerCount">
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
        <!-- 방 고유 아이디, 방 이름, 최대 인원 수, 현재 인원 수, 게임 상태, 방장의 닉네임 -->
        <ul>
          <li v-for="(room, index) in rooms" :key="index">
            <router-link :to="'/room/' + room.id">{{ room.name }} ({{ room.currentPlayers }} / {{ room.playerCount }})</router-link>
          </li>
        </ul>
      </div>
      
      <!-- 방 목록 초기화 -->
      <button @click="resetRooms" class="border-2">방 목록 초기화</button>
      <router-view/>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'LobbyPage',
  methods: {
    goToMakeRoom() {
      this.$router.push('/make-room')
    }
  },

  setup() {
    const router = useRouter();
    const newRoomName = ref('');
    const newRoomPlayerCount = ref('1');
    const rooms = ref([]);

    onMounted(() => {
      const savedRooms = localStorage.getItem('rooms');
      if (savedRooms) {
        rooms.value = JSON.parse(savedRooms);
      }
    })

    const createRoom = () => {
      if (newRoomName.value !== '' && newRoomPlayerCount.value !== '') {
        let newRoomId = Math.random().toString(36).substr(2, 9);
        rooms.value.push({
          id: newRoomId,
          name: newRoomName.value,
          playerCount: Number(newRoomPlayerCount.value),
          currentPlayers: 1,
          state: 'waiting', // waiting, playing
          // host: 'host'
        });
        // 방 목록 저장
        localStorage.setItem('rooms', JSON.stringify(rooms.value));
        // 방 생성 확인 시 해당 방으로 자동 이동
        router.push('/room/' + newRoomId);
        newRoomName.value = '';
        newRoomPlayerCount.value = '1';
      }
    }

    const resetRooms = () => {
      localStorage.setItem('rooms', JSON.stringify(rooms.value));
      rooms.value = [];
    }
    
    return {
      newRoomName,
      newRoomPlayerCount,
      rooms,
      resetRooms,
      createRoom
    }
  },

  data() {
    return {
      showModal: false
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