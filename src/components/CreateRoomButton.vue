<template>
  <button @click="handleClick" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    방 만들기
  </button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('openModal');
    }
  }
}
</script>
