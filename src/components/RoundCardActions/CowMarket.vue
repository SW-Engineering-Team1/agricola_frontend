<!--  RoundCardAction10 소 시장  -->
<template>
  <div @click="useCowMarket" class="flex justify-center items-center row-span-2 p-0 bg-transparent relative cursor-pointer" :class="{ 'flip': isFlipped }">
    <img class="card-face back absolute w-full bg-cover bg-center" :src="backImage" alt="card-back"/>
    <img class="card-face front absolute w-full bg-cover bg-center" :src="frontImage" alt="card-front"/>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import {useStore} from 'vuex'
import { io } from "socket.io-client";

export default {
  props: {
    frontImage: String,
    backImage: String,
    round: Number
  },
  setup(props) {
    const isFlipped = ref(false);
    const store = useStore();
    const socket = io("localhost:3000");

    const user = ref(computed(() => store.state.user));
    const gameStatus = ref(computed(() => store.state.gameStatus));
    const roomId = gameStatus.value[0].roomId;

    if (store.state.currentRound >= props.round) {
      isFlipped.value = true;
    }

    watch(() => store.state.currentRound, (newRound) => {
      if (newRound >= props.round) {
        isFlipped.value = true;
      }
    });

    const useCowMarket = () => {
      if (props.round === 10) {
        socket.emit("useActionSpace",{
          "actionName": "else",
          "userId": user.value,
          "roomId": roomId,
          "goods" : [
            { 
              "name": "cow",
              "num": 1,
              "isAdd": true
            }
          ] 
        });
      }
    }
    return { isFlipped, useCowMarket };
  }
};
</script>

<style scoped>
.card-face { backface-visibility: hidden; transition: transform 0.6s }
.back { transform: rotateY(0deg); }
.front { transform: rotateY(180deg); }
.flip .back { transform: rotateY(-180deg); }
.flip .front { transform: rotateY(0deg); }
</style>
