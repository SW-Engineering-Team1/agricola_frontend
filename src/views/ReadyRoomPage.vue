<template>
  <div>
    <h1>roomId : {{ roomId }}</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'RoomPage',

  setup() {
    const route = useRoute()
    const roomId = ref('')

    onMounted(() => {
      roomId.value = route.params.room
    })

    return {
      roomId
    }
  }
}
</script>