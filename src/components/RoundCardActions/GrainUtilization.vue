<!-- RoundCardAction2 곡식 활용 -->
<template>
  <div
    @click="handleClick(isMyTurn)"
    class="flex justify-center items-center row-span-2 p-0 bg-transparent relative cursor-pointer"
    :class="{ 'flip': isFlipped, 'w-full cursor-pointer transform transition duration-500 ease-in-out hover:scale-110': true, 'pointer-events-none': !isMyTurn }"
  >
    <img class="card-face back absolute w-full bg-cover bg-center" :src="backImage" alt="card-back"/>
    <img class="card-face front absolute w-full bg-cover bg-center" :src="frontImage" alt="card-front"/>
    <img
      v-if="showImage"
      src="@/assets/images/Etc/Player1.png"
      alt="Player1 Image"
      class="overlay absolute inset-0 w-full h-full"
    />
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
    const myFarm = ref(props.MyFarm);
    const showImage = ref(false);
    const myFarmFunctions = {};

    if (store.state.currentRound >= props.round) {
      isFlipped.value = true;
    }

    watch(() => store.state.currentRound, (newRound) => {
      if (newRound >= props.round) {
        isFlipped.value = true;
      }
    });

    const useGrainUtilization = () => {
      for (let i = 1; i <= 15; i++) {
        const myFarmName = `openMyFarm${i}`;
        if (i === 15) {
          myFarmFunctions[myFarmName] = () => {
            socket.emit("useActionSpace",{
              actionName: "Grain Utilization",
              userId: user.value,
              roomId: roomId.value,
              goods:[
                {
                  name: "vege",
                  num: 1,
                  isAdd: false
                },
                {
                  id: 15,
                  kind: "vege"
                }
              ]
            })
          };
        }
        else {
          myFarmFunctions[myFarmName] = () => {
            console.log(myFarmName);
          };
        }
        // 해당 myFarm의 clickHandler를 등록
        for (const farm of myFarm.value) {
          farm.clickHandler = myFarmFunctions[`openMyFarm${farm.id}`];
        }
      }
    }

    const handleClick = (isMyTurn) => {
      if (isMyTurn) {
        useGrainUtilization();
        showImage.value = !showImage.value;
      }
    }

    onMounted(async () => {
      roomId.value = route.params.room;
      socket.on("endRound", () => {
        showImage.value = !showImage.value;
      });
    });

    return { isFlipped, handleClick, showImage };
  },
}
</script>

<style scoped>
.card-face { backface-visibility: hidden; transition: transform 0.6s }
.back { transform: rotateY(0deg); }
.front { transform: rotateY(180deg); }
.flip .back { transform: rotateY(-180deg); }
.flip .front { transform: rotateY(0deg); }
.pointer-events-none {
  pointer-events: none;
}
</style>