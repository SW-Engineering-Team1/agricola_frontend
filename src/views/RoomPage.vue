<template>
    <div>
        <h1>{{ roomName }}</h1>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'RoomPage',

  setup() {
    const route = useRoute()
    const roomName = ref('')

    onMounted(() => {
      roomName.value = route.params.room
    })

    return {
      roomName
    }
  }
}
</script>