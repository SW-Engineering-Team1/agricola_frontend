<!--  RoundCardAction9 돼지 시장  -->
<template>
  <div
    @click="handleClick(isMyTurn)"
    class="flex justify-center items-center row-span-2 p-0 bg-transparent relative cursor-pointer"
    :class="{ 'flip': isFlipped, 'w-full cursor-pointer transform transition duration-500 ease-in-out hover:scale-110': true, 'pointer-events-none': !isMyTurn }"
  >
    <img class="card-face back absolute w-full bg-cover bg-center" :src="backImage" alt="card-back"/>
    <img class="card-face front absolute w-full bg-cover bg-center" :src="frontImage" alt="card-front"/>
  </div>
</template>

<script>
import {computed, onMounted, ref, watch} from "vue";
import {useStore} from 'vuex'
import { io } from "socket.io-client";
import {useRoute} from 'vue-router'

export default {
  props: {
    frontImage: String,
    backImage: String,
    round: Number,
    isMyTurn: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const isFlipped = ref(false);
    const store = useStore();
    const socket = io("localhost:3000");
    const route = useRoute();
    const roomId = ref("");

    const user = ref(computed(() => store.state.user));
    const pigAccumulated = ref(computed(() => store.state.accumulatedResources.pigAccumulated));

    if (store.state.currentRound >= props.round) {
      isFlipped.value = true;
    }

    watch(() => store.state.currentRound, (newRound) => {
      if (newRound >= props.round) {
        isFlipped.value = true;
      }
    });

    const usePigMarket = () => {
      if (props.round === 9) {
        socket.emit("useActionSpace", {
          actionName: "Use Accumulated Goods",
          userId: user.value,
          roomId: roomId.value,
          goods : [
            { 
              name: "pigAccumulated",
              num: pigAccumulated.value,
              isAdd: true
            }
          ] 
        });
      }
    }

    const handleClick = (isMyTurn) => {
      if (isMyTurn) {
        usePigMarket();
      }
    }

    onMounted(async () => {
      roomId.value = route.params.room;
    });

    return { isFlipped, handleClick };
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
