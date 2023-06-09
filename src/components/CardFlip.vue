<template>
  <div
    class="flex justify-center items-center row-span-2 p-0 bg-transparent relative cursor-pointer"
    @click="flipCard"
    :class="{ 'flip': isFlipped }"
  >
    <img
      class="card-face back absolute w-full bg-cover bg-center"
      :src="backImage"
      alt="card-back"
    />
    <img
      class="card-face front absolute w-full bg-cover bg-center"
      :src="frontImage"
      alt="card-front"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    frontImage: String,
    backImage: String
  },
  setup() {
    const isFlipped = ref(false);

    const flipCard = () => {
      // 카드가 이미 뒤집혀 있다면 다시 뒤집지 않음
      if (isFlipped.value) return;

      isFlipped.value = !isFlipped.value;
    };

    return { isFlipped, flipCard };
  }
};
</script>

<style scoped>
.card-face {
  backface-visibility: hidden;
  transition: transform 0.6s;
}
.back {
  transform: rotateY(0deg);
}
.front {
  transform: rotateY(180deg);
}
.flip .back {
  transform: rotateY(-180deg);
}
.flip .front {
  transform: rotateY(0deg);
}
</style>
