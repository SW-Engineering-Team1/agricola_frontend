<template>
  <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
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
                <input id="roomName" v-model="roomName" placeholder="방 이름을 작성해주세요." class="mt-1 p-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500">
              </div>
              <div class="mt-2">
                <label for="playerCount">플레이어 수</label>
                <select id="playterCount" v-model="limitNum" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
          <button @click="closeModal" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CreateRoomModal',
  props: ['showModal'],
  emits: ['closeModal', 'createRoom'],
  setup(props, { emit }) {
    const roomName = ref('');
    const limitNum = ref('1');

    const createRoom = () => {
      const room = {
        roomName: roomName.value,
        limitNum: limitNum.value,
      };
      emit('createRoom', room);
      roomName.value = '';
      limitNum.value = '';
    }

    const closeModal = () => {
      emit('closeModal');
    }

    return {
      roomName,
      limitNum,
      createRoom,
      closeModal
    };
  }
}
</script>