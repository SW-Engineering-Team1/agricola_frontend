<template>
  <div @click="clickCard" class="flex justify-center items-center row-span-2 p-0 bg-transparent relative cursor-pointer" :class="{ 'flip': isFlipped }">
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
    const showIsGrainUtilModal = ref(false);

    // currentRound 값까지 카드를 모두 뒤집는다.
    if (store.state.currentRound >= props.round) {
      isFlipped.value = true;
    }

    // store의 currentRound 값이 변경될 때마다 실행되는 watcher
    watch(() => store.state.currentRound, (newRound) => {
      // 현재 라운드까지 카드를 모두 뒤집는다.
      if (newRound >= props.round) {
        isFlipped.value = true;
      }
    });
    // p2 1턴 채소종자 클릭 이벤트
    const clickCard = () => {
      if(props.round === 8){
        socket.emit("useActionSpace",{
          "actionName": "else",
          "userId": user.value,
          "roomId": roomId,
          "goods" : [
          { 
            "name": "vegeOnStorage",
            "num": 1,
            "isAdd": true
          }
          ] 
        });
      }
    }

    return { isFlipped,clickCard,showIsGrainUtilModal};
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
