<template>
  <transition>
    <div v-if="show" class="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg flex items-center justify-center"
      style="width: 300px; height: 100px;">
      <div class="relative">
        <h4 class="top-0">어떤 작물을 심으시겠습니까?</h4>
        <button class="absolute left-0 h-8 w-16 bg-blue-500 text-white rounded float-right" @click="closeModal">채소</button>
        <button class="absolute right-0 h-8 w-16 bg-blue-500 text-white rounded float-right" @click="closeModal">곡식</button>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
}
</script>
<style scoped>
img {
  max-width: 80vw;
  max-height: 80vh;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>