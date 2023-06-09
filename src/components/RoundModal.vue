<template>
  <div
      class="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg flex items-center justify-center animate-fadeInAndOut"
      style="width: 300px; height: 300px;"
      v-show="show"
  >
    <p class="text-2xl font-bold">{{ round }} 라운드</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    round: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const show = ref(true);

    setTimeout(() => {
      show.value = false;
    }, 2000);

    return {
      show,
    };
  },
};
</script>

<style>
@keyframes fadeInAndOut {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

.animate-fadeInAndOut {
  animation: fadeInAndOut 2s ease-in-out;
}
</style>
