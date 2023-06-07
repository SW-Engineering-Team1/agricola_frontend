<template>
  <div>
    <!--  자원 표시  -->
    <div class="flex justify-between w-full bg-white rounded-lg">
      <div>
        <div class="grid grid-rows-12">
          <div class="flex">
            <div class="p-3 border border-black w-full">{{ opponent }}</div>
          </div>
          <div class="flex" v-for="(item, index) in oppoGameResources" :key="index">
            <div class="p-3 border border-black w-1/2 flex justify-center">
              <img :src="item.image" :alt="item.name" class="w-10 h-10"/>
            </div>
            <div class="p-3 border border-black w-1/2 flex justify-center">
              <p class="flex items-center text-2xl">{{ item.value }}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="grid grid-rows-12">
          <div class="flex">
            <div class="p-3 border border-black w-full">{{ user }} (나)</div>
          </div>
          <div class="flex" v-for="(item, index) in myGameResources" :key="index">
            <div class="p-3 border border-black w-1/2 flex justify-center">
              <p class="flex items-center text-2xl">{{ item.value }}</p>
            </div>
            <div class="p-3 border border-black w-1/2 flex justify-center">
              <img :src="item.image" :alt="item.name" class="w-10 h-10"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  주요 설비 모달  -->
    <MajorFacModal v-if="isMajorFacModalOpen" @close-modal="closeMajorFacModal"/>
    <button
      class="rounded major-fac"
      @click="openMajorFacModal"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/MajorFacCardBack/MajorFacCardBack.png" width="80" />
    </button>
    <!--  플레이어 1 보조 설비 카드  -->
    <P1AssiFacModal v-if="isP1AssiFacModalOpen" @close-modal="closeP1AssiFacModal" />
    <button
      class="rounded p1-assi-fac"
      @click="openP1AssiFacModal"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/AssiFacCardBack/P1AssiFacCardBack.png" width="80" />
    </button>
    <!--  플레이어 1 직업 카드  -->
    <P1JobCardModal v-if="isP1JobCardModalOpen" @close-modal="closeP1JobCardModal" />
    <button
      class="rounded p1-job-card"
      @click="openP1JobCardModal"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/JobCardBack/P1JobCardBack.png" width="80" />
    </button>
    <!--  플레이어 2 보조 설비 카드  -->
    <P2AssiFacModal v-if="isP2AssiFacModalOpen" @close-modal="closeP2AssiFacModal" />
    <button
      class="rounded p2-assi-fac"
      @click="openP2AssiFacModal"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/AssiFacCardBack/P2AssiFacCardBack.png" width="80" />
    </button>
    <!--  플레이어 2 직업 카드  -->
    <P2JobCardModal v-if="isP2JobCardModalOpen" @close-modal="closeP2JobCardModal" />
    <button
      class="rounded p2-job-card"
      @click="openP2JobCardModal"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/JobCardBack/P2JobCardBack.png" width="80" />
    </button>

    <!--  MainGameBoard  -->
    <!--  Action(행동)  -->
    <!-- MainGameBoard -->
    <FarmExpand></FarmExpand>
    <MeetingPlace></MeetingPlace>
    <GrainSeed></GrainSeed>
    <Farmland></Farmland>
    <Instruction></Instruction>
    <DayLabor></DayLabor>
    <Forest></Forest>
    <SoilMining></SoilMining>
    <ReedField></ReedField>
    <Fishing></Fishing>

    <button
      class="rounded Round1"
      @click="openRound1"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/RoundCardBack/1Cycle1.png" width="112" />
    </button>
    <button
      class="rounded Round2"
      @click="openRound2"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/RoundCardBack/1Cycle2.png" width="112" />
    </button>
    <button
      class="rounded Round3"
      @click="openRound3"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/RoundCardBack/1Cycle3.png" width="112" />
    </button>
    <button
      class="rounded Round4"
      @click="openRound4"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/RoundCardBack/1Cycle4.png" width="112" />
    </button>
    <button
      class="rounded Round5"
      @click="openRound5"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/RoundCardBack/2Cycle1.png" width="112" />
    </button>
    <button
      class="rounded Round6"
      @click="openRound6"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/RoundCardBack/2Cycle2.png" width="112" />
    </button>
    <button
      class="rounded Round7"
      @click="openRound7"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/RoundCardBack/2Cycle3.png" width="112" />
    </button>
    <button
      class="rounded Round8"
      @click="openRound8"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/RoundCardBack/3Cycle1.png" width="112" />
    </button>
    <button
      class="rounded Round9"
      @click="openRound9"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/RoundCardBack/3Cycle2.png" width="112" />
    </button>
    <button
      class="rounded Round10"
      @click="openRound10"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/RoundCardBack/4Cycle1.png" width="112" />
    </button>
    <button
      class="rounded Round11"
      @click="openRound11"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/RoundCardBack/4Cycle2.png" width="112" />
    </button>
    <button
      v-for="action in actions"
      :key="action.id"
      class="rounded"
      :class="action.class"
      @click="action.clickHandler"
      style="background: transparent; border: none; padding: 0"
    >
      <img :src="action.imgSrc" width="108" />
    </button>
    <!--  Round(라운드)  -->
    <button
      v-for="round in rounds"
      :key="round.id"
      class="rounded"
      :class="round.class"
      @click="round.clickHandler"
      style="background: transparent; border: none; padding: 0"
    >
      <img :src="round.imgSrc" width="112" />
    </button>

    <!--  P1 FarmBoard  -->
    <!--  P1 Farms  -->
    <button
      v-for="p1Farm in p1Farms"
      :key="p1Farm.id"
      class="rounded"
      :class="p1Farm.class"
      @click="p1Farm.clickHandler"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/Farm.jpg" width="60" />
    </button>
    <!--  P1 WoodRooms  -->
    <button
        v-for="p1WoodRoom in p1WoodRooms"
        :key="p1WoodRoom.id"
        class="rounded"
        :class="p1WoodRoom.class"
        @click="p1WoodRoom.clickHandler"
        style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/Room/WoodRoom.png" width="60" />
    </button>

    <!-- P2 FarmBoard -->
    <!--  P2 Farms  -->
    <button
        v-for="p2Farm in p2Farms"
        :key="p2Farm.id"
        class="rounded"
        :class="p2Farm.class"
        @click="p2Farm.clickHandler"
        style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/Farm.jpg" width="60" />
    </button>
    <!--  P2 WoodRooms  -->
    <button
        v-for="p2WoodRoom in p2WoodRooms"
        :key="p2WoodRoom.id"
        class="rounded"
        :class="p2WoodRoom.class"
        @click="p2WoodRoom.clickHandler"
        style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/Room/WoodRoom.png" width="60" />
    </button>
  </div>
</template>

<script>
import MajorFacModal from "@/components/MajorFacModal.vue";
import P1AssiFacModal from "@/components/P1AssiFacModal.vue";
import P1JobCardModal from "@/components/P1JobCardModal.vue";
import P2AssiFacModal from "@/components/P2AssiFacModal.vue";
import P2JobCardModal from "@/components/P2JobCardModal.vue";
import FarmExpand from "@/components/FarmExpand.vue";
import MeetingPlace from "@/components/MeetingPlace.vue";
import GrainSeed from "@/components/GrainSeed.vue";
import {computed, onMounted, ref} from "vue";
import Farmland from "@/components/Farmland.vue";
import Instruction from "@/components/Instruction.vue";
import DayLabor from "@/components/DayLabor.vue";
import Forest from "@/components/Forest.vue";
import SoilMining from "@/components/SoilMining.vue";
import ReedField from "@/components/ReedField.vue";
import Fishing from "@/components/Fishing.vue";
import { io } from "socket.io-client";
import {useStore} from 'vuex';
import { resourceMap } from '@/constants';

export default {
  components: {
    MajorFacModal,
    P1AssiFacModal,
    P1JobCardModal,
    P2AssiFacModal,
    P2JobCardModal,
    FarmExpand,
    MeetingPlace,
    GrainSeed,
    Farmland,
    Instruction,
    DayLabor,
    Forest,
    SoilMining,
    ReedField,
    Fishing
  },
  setup() {
    const socket = io("localhost:3000");
    const store = useStore();
    const playersInRoom = ref(computed(() => store.state.playersInRoom));
    const gameStatus = ref(computed(() => store.state.gameStatus));

    // user 정보
    const user = computed(() => store.state.user);
    const myGameStatus = computed(() => {
      return gameStatus.value.find(status => status.UserId === user.value)
    });
    const myGameResources = computed(() => {
      return Object.entries(resourceMap).map(([key, { name, image }]) => ({
        name,
        image,
        value: myGameStatus.value[key],
      }));
    });

    // opponent(상대방) 정보
    const opponent = computed(() => {
      return playersInRoom.value.find(player => player !== user.value)
    });
    const oppoGameStatus = computed(() => {
      return gameStatus.value.find(status => status.UserId !== user.value)
    });
    const oppoGameResources = computed(() => {
      return Object.entries(resourceMap).map(([key, { name, image }]) => ({
        name,
        image,
        value: oppoGameStatus.value[key],
      }));
    });

    console.log(myGameStatus.value);
    console.log(gameStatus.value);

    const isMajorFacModalOpen = ref(false);
    const isP1AssiFacModalOpen = ref(false);
    const isP1JobCardModalOpen = ref(false);
    const isP2AssiFacModalOpen = ref(false);
    const isP2JobCardModalOpen = ref(false);

    const openMajorFacModal = () => isMajorFacModalOpen.value = true;
    const closeMajorFacModal = () => isMajorFacModalOpen.value = false;
    const openP1AssiFacModal = () => isP1AssiFacModalOpen.value = true;
    const closeP1AssiFacModal = () => isP1AssiFacModalOpen.value = false;
    const openP1JobCardModal = () => isP1JobCardModalOpen.value = true;
    const closeP1JobCardModal = () => isP1JobCardModalOpen.value = false;
    const openP2AssiFacModal = () => isP2AssiFacModalOpen.value = true;
    const closeP2AssiFacModal = () => isP2AssiFacModalOpen.value = false;
    const openP2JobCardModal = () => isP2JobCardModalOpen.value = true;
    const closeP2JobCardModal = () => isP2JobCardModalOpen.value = false;


    const actions = ref([
      {
        id: 1,
        class: "Action1",
        imgSrc: require("../assets/images/Action/1_FarmExpand.jpg")
      },
      {
        id: 2,
        class: "Action2",
        imgSrc: require("../assets/images/Action/2_MeetingPlace.jpg")
      },
      {
        id: 3,
        class: "Action3",
        imgSrc: require("../assets/images/Action/3_GrainSeed.jpg")
      },
      {
        id: 4,
        class: "Action4",
        imgSrc: require("../assets/images/Action/4_Farmland.jpg")
      },
      {
        id: 5,
        class: "Action5",
        imgSrc: require("../assets/images/Action/5_Instruction.jpg")
      },
      {
        id: 6,
        class: "Action6",
        imgSrc: require("../assets/images/Action/6_DayLabor.jpg")
      },
      {
        id: 7,
        class: "Action7",
        imgSrc: require("../assets/images/Action/7_Forest.jpg")
      },
      {
        id: 8,
        class: "Action8",
        imgSrc: require("../assets/images/Action/8_SoilMining.jpg")
      },
      {
        id: 9,
        class: "Action9",
        imgSrc: require("../assets/images/Action/9_ReedField.jpg")
      },
      {
        id: 10,
        class: "Action10",
        imgSrc: require("../assets/images/Action/10_Fishing.jpg")
      },
    ]);
    // action을 위한 함수들을 동적으로 생성
    const actionFunctions = {};
    for (let i = 1; i <= 10; i++) {
      const actionName = `openAction${i}`;
      actionFunctions[actionName] = () => {
        console.log(actionName);
      };

      // 해당 action의 clickHandler를 등록
      for (const action of actions.value) {
        action.clickHandler = actionFunctions[`openAction${action.id}`];
      }
    }

    const rounds = ref([
      {
        id: 1,
        class: "Round1",
        imgSrc: require("../assets/images/RoundCardBack/1Cycle1.png")
      },
      {
        id: 2,
        class: "Round2",
        imgSrc: require("../assets/images/RoundCardBack/1Cycle2.png")
      },
      {
        id: 3,
        class: "Round3",
        imgSrc: require("../assets/images/RoundCardBack/1Cycle3.png")
      },
      {
        id: 4,
        class: "Round4",
        imgSrc: require("../assets/images/RoundCardBack/1Cycle4.png")
      },
      {
        id: 5,
        class: "Round5",
        imgSrc: require("../assets/images/RoundCardBack/2Cycle1.png")
      },
      {
        id: 6,
        class: "Round6",
        imgSrc: require("../assets/images/RoundCardBack/2Cycle2.png")
      },
      {
        id: 7,
        class: "Round7",
        imgSrc: require("../assets/images/RoundCardBack/2Cycle3.png")
      },
      {
        id: 8,
        class: "Round8",
        imgSrc: require("../assets/images/RoundCardBack/3Cycle1.png")
      },
      {
        id: 9,
        class: "Round9",
        imgSrc: require("../assets/images/RoundCardBack/3Cycle2.png")
      },
      {
        id: 10,
        class: "Round10",
        imgSrc: require("../assets/images/RoundCardBack/4Cycle1.png")
      },
      {
        id: 11,
        class: "Round11",
        imgSrc: require("../assets/images/RoundCardBack/4Cycle2.png")
      },
      {
        id: 12,
        class: "Round12",
        imgSrc: require("../assets/images/RoundCardBack/5Cycle1.png")
      },
      {
        id: 13,
        class: "Round13",
        imgSrc: require("../assets/images/RoundCardBack/5Cycle2.png")
      },
      {
        id: 14,
        class: "Round14",
        imgSrc: require("../assets/images/RoundCardBack/6Cycle.png")
      },
    ]);
    // round를 위한 함수들을 동적으로 생성
    const roundFunctions = {};
    for (let i = 1; i <= 14; i++) {
      const roundName = `openRound${i}`;
      roundFunctions[roundName] = () => {
        console.log(roundName);
      };

      // 해당 round의 clickHandler를 등록
      for (const round of rounds.value) {
        round.clickHandler = roundFunctions[`openRound${round.id}`];
      }
    }

    const p1Farms = ref([
      {
        id: 1,
        class: "P1Farm1",
      },
      {
        id: 2,
        class: "P1Farm2",
      },
      {
        id: 3,
        class: "P1Farm3",
      },
      {
        id: 4,
        class: "P1Farm4",
      },
      {
        id: 5,
        class: "P1Farm5",
      },
      {
        id: 6,
        class: "P1Farm6",
      },
      {
        id: 7,
        class: "P1Farm7",
      },
      {
        id: 8,
        class: "P1Farm8",
      },
      {
        id: 9,
        class: "P1Farm9",
      },
      {
        id: 10,
        class: "P1Farm10",
      },
      {
        id: 11,
        class: "P1Farm11",
      },
      {
        id: 12,
        class: "P1Farm12",
      },
      {
        id: 13,
        class: "P1Farm13",
      }
    ]);
    // p1Farms을 위한 함수들을 동적으로 생성
    const p1FarmFunctions = {};
    for (let i = 1; i <= 13; i++) {
      const p1FarmName = `openP1Farm${i}`;
      p1FarmFunctions[p1FarmName] = () => {
        console.log(p1FarmName);
      };
      // 해당 p1Farm의 clickHandler를 등록
      for (const p1Farm of p1Farms.value) {
        p1Farm.clickHandler = p1FarmFunctions[`openP1Farm${p1Farm.id}`];
      }
    }
    const p1WoodRooms = ref([
      {
        id: 1,
        class: "P1WoodRoom1",
      },
      {
        id: 2,
        class: "P1WoodRoom2",
      }
    ]);
    // p1WoodRooms을 위한 함수들을 동적으로 생성
    const p1WoodRoomFunctions = {};
    for (let i = 1; i <= 2; i++) {
      const p1WoodRoomName = `openP1WoodRoom${i}`;
      p1WoodRoomFunctions[p1WoodRoomName] = () => {
        console.log(p1WoodRoomName);
      };
      // 해당 p1WoodRoom의 clickHandler를 등록
      for (const p1WoodRoom of p1WoodRooms.value) {
        p1WoodRoom.clickHandler = p1WoodRoomFunctions[`openP1WoodRoom${p1WoodRoom.id}`];
      }
    }

    const p2Farms = ref([
      {
        id: 1,
        class: "P2Farm1",
      },
      {
        id: 2,
        class: "P2Farm2",
      },
      {
        id: 3,
        class: "P2Farm3",
      },
      {
        id: 4,
        class: "P2Farm4",
      },
      {
        id: 5,
        class: "P2Farm5",
      },
      {
        id: 6,
        class: "P2Farm6",
      },
      {
        id: 7,
        class: "P2Farm7",
      },
      {
        id: 8,
        class: "P2Farm8",
      },
      {
        id: 9,
        class: "P2Farm9",
      },
      {
        id: 10,
        class: "P2Farm10",
      },
      {
        id: 11,
        class: "P2Farm11",
      },
      {
        id: 12,
        class: "P2Farm12",
      },
      {
        id: 13,
        class: "P2Farm13",
      }
    ]);
    // p2Farms을 위한 함수들을 동적으로 생성
    const p2FarmFunctions = {};
    for (let i = 1; i <= 13; i++) {
      const p2FarmName = `openP2Farm${i}`;
      p2FarmFunctions[p2FarmName] = () => {
        console.log(p2FarmName);
      };
      // 해당 p2Farm의 clickHandler를 등록
      for (const p2Farm of p2Farms.value) {
        p2Farm.clickHandler = p2FarmFunctions[`openP2Farm${p2Farm.id}`];
      }
    }
    const p2WoodRooms = ref([
      {
        id: 1,
        class: "P2WoodRoom1",
      },
      {
        id: 2,
        class: "P2WoodRoom2",
      }
    ]);
    // p2WoodRooms을 위한 함수들을 동적으로 생성
    const p2WoodRoomFunctions = {};
    for (let i = 1; i <= 2; i++) {
      const p2WoodRoomName = `openP2WoodRoom${i}`;
      p2WoodRoomFunctions[p2WoodRoomName] = () => {
        console.log(p2WoodRoomName);
      };
      // 해당 p2WoodRoom의 clickHandler를 등록
      for (const p2WoodRoom of p2WoodRooms.value) {
        p2WoodRoom.clickHandler = p2WoodRoomFunctions[`openP2WoodRoom${p2WoodRoom.id}`];
      }
    }

    onMounted(() => {
      socket.on("startGame", (gameStatus) => {
        console.log(gameStatus);
      });
    });

    return {
      isMajorFacModalOpen,
      isP1AssiFacModalOpen,
      isP1JobCardModalOpen,
      isP2AssiFacModalOpen,
      isP2JobCardModalOpen,
      openMajorFacModal,
      closeMajorFacModal,
      openP1AssiFacModal,
      closeP1AssiFacModal,
      openP1JobCardModal,
      closeP1JobCardModal,
      openP2AssiFacModal,
      closeP2AssiFacModal,
      openP2JobCardModal,
      closeP2JobCardModal,
      actions,
      ...actionFunctions,
      rounds,
      ...roundFunctions,
      p1Farms,
      ...p1FarmFunctions,
      p1WoodRooms,
      ...p1WoodRoomFunctions,
      p2Farms,
      ...p2FarmFunctions,
      p2WoodRooms,
      ...p2WoodRoomFunctions,
      gameStatus,
      user,
      myGameStatus,
      myGameResources,
      opponent,
      oppoGameStatus,
      oppoGameResources,
    };
  },
};
</script>

<style>
.major-fac {
  position: absolute;
  top: 50vh;
  right: 25vw;
}

.p1-assi-fac {
  position: absolute;
  bottom: 3vh;
  left: 40vw;
}

.p1-job-card {
  position: absolute;
  bottom: 3vh;
  left: 45vw;
}

.p2-assi-fac {
  position: absolute;
  top: 3vh;
  right: 45vw;
}

.p2-job-card {
  position: absolute;
  top: 3vh;
  right: 50vw;
}

/* MainGameBoard */
.Action1 {
  position: absolute;
  top: 26vh;
  right: 70vw;
}
.Action2 {
  position: absolute;
  top: 41vh;
  right: 70vw;
}
.Action3 {
  position: absolute;
  top: 49vh;
  right: 70vw;
}
.Action4 {
  position: absolute;
  top: 56vh;
  right: 70vw;
}
.Action5 {
  position: absolute;
  top: 64.5vh;
  right: 70vw;
}
.Action6 {
  position: absolute;
  top: 74vh;
  right: 70vw;
}
.Action7 {
  position: absolute;
  top: 46vh;
  right: 64vw;
}
.Action8 {
  position: absolute;
  top: 55vh;
  right: 64vw;
}
.Action9 {
  position: absolute;
  top: 64vh;
  right: 64vw;
}
.Action10 {
  position: absolute;
  top: 73vh;
  right: 64vw;
}
.Round1 {
  position: absolute;
  top: 26vh;
  right: 64vw;
}
.Round2 {
  position: absolute;
  top: 26vh;
  right: 58vw;
}
.Round3 {
  position: absolute;
  top: 44.5vh;
  right: 58vw;
}
.Round4 {
  position: absolute;
  top: 63vh;
  right: 58vw;
}
.Round5 {
  position: absolute;
  top: 26vh;
  right: 52vw;
}
.Round6 {
  position: absolute;
  top: 44.5vh;
  right: 52vw;
}
.Round7 {
  position: absolute;
  top: 63vh;
  right: 52vw;
}
.Round8 {
  position: absolute;
  top: 26vh;
  right: 46vw;
}
.Round9 {
  position: absolute;
  top: 44.5vh;
  right: 46vw;
}
.Round10 {
  position: absolute;
  top: 26vh;
  right: 40vw;
}
.Round11 {
  position: absolute;
  top: 44.5vh;
  right: 40vw;
}
.Round12 {
  position: absolute;
  top: 26vh;
  right: 34vw;
}
.Round13 {
  position: absolute;
  top: 44.5vh;
  right: 34vw;
}
.Round14 {
  position: absolute;
  top: 26vh;
  right: 28vw;
}

/* P1 FarmBoard */
.P1Farm1 {
  position: absolute;
  bottom: 18vh;
  right: 46vw;
}
.P1Farm2 {
  position: absolute;
  bottom: 18vh;
  right: 42vw;
}
.P1Farm3 {
  position: absolute;
  bottom: 18vh;
  right: 38vw;
}
.P1Farm4 {
  position: absolute;
  bottom: 18vh;
  right: 34vw;
}
.P1Farm5 {
  position: absolute;
  bottom: 10vh;
  right: 46vw;
}
.P1Farm6 {
  position: absolute;
  bottom: 10vh;
  right: 42vw;
}
.P1Farm7 {
  position: absolute;
  bottom: 10vh;
  right: 38vw;
}
.P1Farm8 {
  position: absolute;
  bottom: 10vh;
  right: 34vw;
}
.P1Farm9 {
  position: absolute;
  bottom: 2vh;
  right: 46vw;
}
.P1Farm10 {
  position: absolute;
  bottom: 2vh;
  right: 42vw;
}
.P1Farm11 {
  position: absolute;
  bottom: 2vh;
  right: 38vw;
}
.P1Farm12 {
  position: absolute;
  bottom: 2vh;
  right: 34vw;
}
.P1Farm13 {
  position: absolute;
  bottom: 2vh;
  right: 30vw;
}
.P1WoodRoom1 {
  position: absolute;
  bottom: 18vh;
  right: 30vw;
}
.P1WoodRoom2 {
  position: absolute;
  bottom: 10vh;
  right: 30vw;
}

/* P2 FarmBoard */
.P2Farm1 {
  position: absolute;
  top: 2vh;
  right: 72vw;
}
.P2Farm2 {
  position: absolute;
  top: 2vh;
  right: 68vw;
}
.P2Farm3 {
  position: absolute;
  top: 2vh;
  right: 64vw;
}
.P2Farm4 {
  position: absolute;
  top: 2vh;
  right: 60vw;
}
.P2Farm5 {
  position: absolute;
  top: 2vh;
  right: 56vw;
}
.P2Farm6 {
  position: absolute;
  top: 10vh;
  right: 68vw;
}
.P2Farm7 {
  position: absolute;
  top: 10vh;
  right: 64vw;
}
.P2Farm8 {
  position: absolute;
  top: 10vh;
  right: 60vw;
}
.P2Farm9 {
  position: absolute;
  top: 10vh;
  right: 56vw;
}
.P2Farm10 {
  position: absolute;
  top: 18vh;
  right: 68vw;
}
.P2Farm11 {
  position: absolute;
  top: 18vh;
  right: 64vw;
}
.P2Farm12 {
  position: absolute;
  top: 18vh;
  right: 60vw;
}
.P2Farm13 {
  position: absolute;
  top: 18vh;
  right: 56vw;
}
.P2WoodRoom1 {
  position: absolute;
  top: 10vh;
  right: 72vw;
}
.P2WoodRoom2 {
  position: absolute;
  top: 18vh;
  right: 72vw;
}
</style>
