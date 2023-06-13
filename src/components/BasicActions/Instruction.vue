<!-- Action5 교습 행동칸 -->
<template>
  <div class="relative">
    <img
      src="@/assets/images/Action/5_Instruction.jpg"
      @click="handleClick(isMyTurn)"
      :class="{'w-full cursor-pointer transform transition duration-500 ease-in-out hover:scale-110': true, 'pointer-events-none': !isMyTurn}"
      alt="instruction"
    />
    <img
      v-if="showImage"
      src="@/assets/images/Etc/Player1.png"
      alt="Player1 Image"
      class="overlay absolute inset-0 w-full h-full"
    />
  </div>
</template>
<script>
import {io} from 'socket.io-client'
import {onMounted, ref} from 'vue'

export default {
  props: {
    isMyTurn: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const socket = io("localhost:3000");
    const showImage = ref(false);

    const handleClick = (isMyTurn) => {
      if (isMyTurn) {
        console.log("교습");
        showImage.value = !showImage.value;
      }
    }

    onMounted(async () => {
      socket.on("endRound", () => {
        showImage.value = !showImage.value;
      });
    });

    return {
      handleClick,
      showImage
    };
  },
};
</script>

<style>
.pointer-events-none {
  pointer-events: none;
}
</style>