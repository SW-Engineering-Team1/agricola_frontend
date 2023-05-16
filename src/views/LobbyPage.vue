<template>
    <div>
      <h1 class="text-4xl">로비</h1>
      <div class="bg-red-300 p-5">
        <button @click="goToMakeRoom" class="bg-blue-300 mx-80 p-2 my-5">
          방 만들기
        </button>
        <div class="grid grid-cols-2 gap-3 bg-yellow-300 h-80 p-5">
          <div class="bg-purple-300 mx-10 h-20 grid place-items-center">
            <p>001</p>
            <p>드루와 드루와</p>
          </div>
          <div class="bg-purple-300 mx-10 h-20 grid place-items-center">
            <p>002</p>
            <p>재밌게 한판~</p>
          </div>
          <div class="bg-purple-300 mx-10 h-20 grid place-items-center">
            <p>003</p>
            <p>드루와 드루와</p>
          </div>
          <div class="bg-purple-300 mx-10 h-20 grid place-items-center">
            <p>004</p>
            <p>나 홀로 연습중</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LobbyPage',
  methods: {
    goToMakeRoom() {
      this.$router.push('/make-room')
    }
  }
}
</script>