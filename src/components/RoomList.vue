<template>
  <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div
      v-for="room in rooms"
      :key="room.room_id"
      class="flex flex-col bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
    >
      <button
        @click="joinRoom(room.room_id)"
        class="text-center"
      >
        {{ room.room_name }} ({{ room.participant_num }} / {{ room.limit_num }})
        <br>
        게임 상태 : {{ room.status }}
        <br>
        방장 : {{ room.host_id }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomList',
  props: {
    rooms: {
      type: Array,
      required: true
    }
  },
  methods: {
    joinRoom(roomId) {
      this.$emit('joinRoom', roomId)
    }
  }
}
</script>