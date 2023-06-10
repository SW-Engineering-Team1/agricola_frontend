<template>
  <transition>
    <div v-if="show" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="shadow-lg relative rounded-md">
        <img class="max-w-full h-auto" src="@/assets/images/ScoreTable.png" alt="Score Table" />
        <button class="absolute bottom-3 right-3 mt-4 px-3 py-2 bg-blue-500 text-white rounded float-right" @click="closeModal">닫기</button>
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
};
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
