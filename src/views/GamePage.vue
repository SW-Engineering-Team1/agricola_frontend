<template>
  <div>
    <!--  주요 설비 모달  -->
    <MajorFacModal v-if="isMajorFacModalOpen" @close-modal="closeMajorFacModal"/>
    <button
      class="rounded major-fac" @click="openMajorFacModal" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/MajorFacCardBack/MajorFacCardBack.png" width="80" />
    </button>
    <!--  플레이어 1 보조 설비 카드  -->
    <P1AssiFacModal v-if="isP1AssiFacModalOpen" @close-modal="closeP1AssiFacModal" />
    <button class="rounded p1-assi-fac" @click="openP1AssiFacModal" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/AssiFacCardBack/P1AssiFacCardBack.png" width="80" />
    </button>
    <!--  플레이어 1 직업 카드  -->
    <P1JobCardModal v-if="isP1JobCardModalOpen" @close-modal="closeP1JobCardModal" />
    <button class="rounded p1-job-card" @click="openP1JobCardModal" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/JobCardBack/P1JobCardBack.png" width="80" />
    </button>
    <!--  플레이어 2 보조 설비 카드  -->
    <P2AssiFacModal v-if="isP2AssiFacModalOpen" @close-modal="closeP2AssiFacModal" />
    <button class="rounded p2-assi-fac" @click="openP2AssiFacModal" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/AssiFacCardBack/P2AssiFacCardBack.png" width="80" />
    </button>
    <!--  플레이어 2 직업 카드  -->
    <P2JobCardModal v-if="isP2JobCardModalOpen" @close-modal="closeP2JobCardModal" />
    <button class="rounded p2-job-card" @click="openP2JobCardModal" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/JobCardBack/P2JobCardBack.png" width="80" />
    </button>

    <!--  MainGameBoard Action  -->
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

    <button class="rounded Round1" @click="openRound1" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/RoundCardBack/1Cycle1.png" width="112" />
    </button>
    <button class="rounded Round2" @click="openRound2" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/RoundCardBack/1Cycle2.png" width="112" />
    </button>
    <button class="rounded Round3" @click="openRound3" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/RoundCardBack/1Cycle3.png" width="112" />
    </button>
    <button class="rounded Round4" @click="openRound4" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/RoundCardBack/1Cycle4.png" width="112" />
    </button>
    <button class="rounded Round5" @click="openRound5" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/RoundCardBack/2Cycle1.png" width="112" />
    </button>
    <button class="rounded Round6" @click="openRound6" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/RoundCardBack/2Cycle2.png" width="112" />
    </button>
    <button class="rounded Round7" @click="openRound7" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/RoundCardBack/2Cycle3.png" width="112" />
    </button>
    <button class="rounded Round8" @click="openRound8" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/RoundCardBack/3Cycle1.png" width="112" />
    </button>
    <button class="rounded Round9" @click="openRound9" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/RoundCardBack/3Cycle2.png" width="112" />
    </button>
    <button class="rounded Round10" @click="openRound10" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/RoundCardBack/4Cycle1.png" width="112" />
    </button>
    <button class="rounded Round11" @click="openRound11" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/RoundCardBack/4Cycle2.png" width="112" />
    </button>
    <button class="rounded Round12" @click="openRound12" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/RoundCardBack/5Cycle1.png" width="112" />
    </button>
    <button class="rounded Round13" @click="openRound13" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/RoundCardBack/5Cycle2.png" width="112" />
    </button>
    <button class="rounded Round14" @click="openRound14" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/RoundCardBack/6Cycle.png" width="112" />
    </button>

    <!-- P1 FarmBoard -->
    <button class="P1Farm1" @click="openP1Farm1" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1Farm1.jpg" width="60" />
    </button>
    <button class="P1Farm2" @click="openP1Farm2" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1Farm2.jpg" width="60" />
    </button>
    <button class="P1Farm3" @click="openP1Farm3" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1Farm3.jpg" width="60" />
    </button>
    <button class="P1Farm4" @click="openP1Farm4" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1Farm4.jpg" width="60" />
    </button>
    <button class="P1Farm5" @click="openP1Farm5" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1Farm5.jpg" width="60" />
    </button>
    <button class="P1Farm6" @click="openP1Farm6" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1Farm6.jpg" width="60" />
    </button>
    <button class="P1Farm7" @click="openP1Farm7" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1Farm7.jpg" width="60" />
    </button>
    <button class="P1Farm8" @click="openP1Farm8" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1Farm8.jpg" width="60" />
    </button>
    <button class="P1Farm9" @click="openP1Farm9" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1Farm9.jpg" width="60" />
    </button>
    <button class="P1Farm10" @click="openP1Farm10" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1Farm10.jpg" width="60" />
    </button>
    <button class="P1Farm11" @click="openP1Farm11" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1Farm11.jpg" width="60" />
    </button>
    <button class="P1Farm12" @click="openP1Farm12" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1Farm12.jpg" width="60" />
    </button>
    <button class="P1Farm13" @click="openP1Farm13" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1Farm13.jpg" width="60" />
    </button>
    <button class="P1WoodRoom1" @click="openP1WoodRoom1" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1WoodRoom1.png" width="60" />
    </button>
    <button class="P1WoodRoom2" @click="openP1WoodRoom2" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P1FarmBoard/P1WoodRoom2.png" width="60" />
    </button>

    <!-- P2 FarmBoard -->
    <button class="P2Farm1" @click="openP1Farm1" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2Farm1.jpg" width="60" />
    </button>
    <button class="P2Farm2" @click="openP1Farm2" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2Farm2.jpg" width="60" />
    </button>
    <button class="P2Farm3" @click="openP1Farm3" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2Farm3.jpg" width="60" />
    </button>
    <button class="P2Farm4" @click="openP1Farm4" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2Farm4.jpg" width="60" />
    </button>
    <button class="P2Farm5" @click="openP1Farm5" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2Farm5.jpg" width="60" />
    </button>
    <button class="P2Farm6" @click="openP1Farm6" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2Farm6.jpg" width="60" />
    </button>
    <button class="P2Farm7" @click="openP1Farm7" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2Farm7.jpg" width="60" />
    </button>
    <button class="P2Farm8" @click="openP1Farm8" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2Farm8.jpg" width="60" />
    </button>
    <button class="P2Farm9" @click="openP1Farm9" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2Farm9.jpg" width="60" />
    </button>
    <button class="P2Farm10" @click="openP1Farm10" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2Farm10.jpg" width="60" />
    </button>
    <button class="P2Farm11" @click="openP1Farm11" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2Farm11.jpg" width="60" />
    </button>
    <button class="P2Farm12" @click="openP1Farm12" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2Farm12.jpg" width="60" />
    </button>
    <button class="P2Farm13" @click="openP1Farm13" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2Farm13.jpg" width="60" />
    </button>
    <button class="P2WoodRoom1" @click="openP1WoodRoom1" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2WoodRoom1.png" width="60" />
    </button>
    <button class="P2WoodRoom2" @click="openP1WoodRoom2" style="background: transparent; border: none; padding: 0">
      <img src="../assets/images/P2FarmBoard/P2WoodRoom2.png" width="60" />
    </button>
  
  <!--  P1 Resource Table  -->
  <div class="p1-table-container">
    <table class="custom-table">
      <tr><td class="custom-cell" colspan="2">Player1</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/1_Wood.png" width="50" /></td>
        <td class="custom-cell">나무</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/2_Soil.png" width="50" /></td>
        <td class="custom-cell">흙</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/3_Stone.png" width="50" /></td>
        <td class="custom-cell">돌</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/4_Reed.png" width="50" /></td>
        <td class="custom-cell">갈대</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/5_Grain.png" width="50" /></td>
        <td class="custom-cell">곡식</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/6_Vegetable.png" width="50" /></td>
        <td class="custom-cell">채소</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/7_Food.png" width="50" /></td>
        <td class="custom-cell">음식</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/8_Sheep.png" width="50" /></td>
        <td class="custom-cell">양</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/9_Pig.png" width="50" /></td>
        <td class="custom-cell">돼지</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/10_Cow.png" width="50" /></td>
        <td class="custom-cell">소</td></tr>
      <tr><td class="custom-cell">구걸토큰</td>
        <td class="custom-cell">마이너스</td></tr>
    </table>
  </div>

  <!--  P2 Resource Table  -->
  <div class="p2-table-container">
    <table class="custom-table">
      <tr><td class="custom-cell" colspan="2">Player2</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/1_Wood.png" width="50" /></td>
        <td class="custom-cell">나무</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/2_Soil.png" width="50" /></td>
        <td class="custom-cell">흙</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/3_Stone.png" width="50" /></td>
        <td class="custom-cell">돌</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/4_Reed.png" width="50" /></td>
        <td class="custom-cell">갈대</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/5_Grain.png" width="50" /></td>
        <td class="custom-cell">곡식</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/6_Vegetable.png" width="50" /></td>
        <td class="custom-cell">채소</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/7_Food.png" width="50" /></td>
        <td class="custom-cell">음식</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/8_Sheep.png" width="50" /></td>
        <td class="custom-cell">양</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/9_Pig.png" width="50" /></td>
        <td class="custom-cell">돼지</td></tr>
      <tr><td class="custom-cell"><img src="../assets/images/Resources/10_Cow.png" width="50" /></td>
        <td class="custom-cell">소</td></tr>
      <tr><td class="custom-cell">구걸토큰</td>
        <td class="custom-cell">마이너스</td></tr>
    </table>
  </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { io } from "socket.io-client";

import MajorFacModal from "@/components/MajorFacModal.vue";
import P1AssiFacModal from "@/components/P1AssiFacModal.vue";
import P1JobCardModal from "@/components/P1JobCardModal.vue";
import P2AssiFacModal from "@/components/P2AssiFacModal.vue";
import P2JobCardModal from "@/components/P2JobCardModal.vue";
import FarmExpand from "@/components/FarmExpand.vue";
import MeetingPlace from "@/components/MeetingPlace.vue";
import GrainSeed from "@/components/GrainSeed.vue";
import Farmland from "@/components/Farmland.vue";
import Instruction from "@/components/Instruction.vue";
import DayLabor from "@/components/DayLabor.vue";
import Forest from "@/components/Forest.vue";
import SoilMining from "@/components/SoilMining.vue";
import ReedField from "@/components/ReedField.vue";
import Fishing from "@/components/Fishing.vue";

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
    };
  },
};
</script>

<style>
/* Card */
.major-fac { position: absolute; top: 50vh; right: 25vw; }
.p1-assi-fac { position: absolute; bottom: 3vh; left: 40vw; }
.p1-job-card { position: absolute; bottom: 3vh; left: 45vw; }
.p2-assi-fac { position: absolute; top: 3vh; right: 45vw; }
.p2-job-card { position: absolute; top: 3vh; right: 50vw; }

/* MainGameBoard */
.Action1 { position: absolute; top: 26vh; right: 70vw; }
.Action2 { position: absolute; top: 41vh; right: 70vw; }
.Action3 { position: absolute; top: 49vh; right: 70vw; }
.Action4 { position: absolute; top: 56vh; right: 70vw; }
.Action5 { position: absolute; top: 64.5vh; right: 70vw; }
.Action6 { position: absolute; top: 74vh; right: 70vw; }
.Action7 { position: absolute; top: 46vh; right: 64vw; }
.Action8 { position: absolute; top: 55vh; right: 64vw; }
.Action9 { position: absolute; top: 64vh; right: 64vw; }
.Action10 { position: absolute; top: 73vh; right: 64vw; }
.Round1 { position: absolute; top: 26vh; right: 64vw; }
.Round2 { position: absolute; top: 26vh; right: 58vw; }
.Round3 { position: absolute; top: 44.5vh; right: 58vw; }
.Round4 { position: absolute; top: 63vh; right: 58vw; }
.Round5 { position: absolute; top: 26vh; right: 52vw; }
.Round6 { position: absolute; top: 44.5vh; right: 52vw; }
.Round7 { position: absolute; top: 63vh; right: 52vw; }
.Round8 { position: absolute; top: 26vh; right: 46vw; }
.Round9 { position: absolute; top: 44.5vh; right: 46vw; }
.Round10 { position: absolute; top: 26vh; right: 40vw; }
.Round11 { position: absolute; top: 44.5vh; right: 40vw; }
.Round12 { position: absolute; top: 26vh; right: 34vw; }
.Round13 { position: absolute; top: 44.5vh; right: 34vw; }
.Round14 { position: absolute; top: 26vh; right: 28vw; }

/* P1 FarmBoard */
.P1Farm1 { position: absolute; bottom: 18vh; right: 46vw; }
.P1Farm2 { position: absolute; bottom: 18vh; right: 42vw; }
.P1Farm3 { position: absolute; bottom: 18vh; right: 38vw; }
.P1Farm4 { position: absolute; bottom: 18vh; right: 34vw; }
.P1Farm5 { position: absolute; bottom: 10vh; right: 46vw; }
.P1Farm6 { position: absolute; bottom: 10vh; right: 42vw; }
.P1Farm7 { position: absolute; bottom: 10vh; right: 38vw; }
.P1Farm8 { position: absolute; bottom: 10vh; right: 34vw; }
.P1Farm9 { position: absolute; bottom: 2vh; right: 46vw; }
.P1Farm10 { position: absolute; bottom: 2vh; right: 42vw; }
.P1Farm11 { position: absolute; bottom: 2vh; right: 38vw; }
.P1Farm12 { position: absolute; bottom: 2vh; right: 34vw; }
.P1Farm13 { position: absolute; bottom: 2vh; right: 30vw; }
.P1WoodRoom1 { position: absolute; bottom: 18vh; right: 30vw; }
.P1WoodRoom2 { position: absolute; bottom: 10vh; right: 30vw; }

/* P2 FarmBoard */
.P2Farm1 { position: absolute; top: 2vh; right: 72vw; }
.P2Farm2 { position: absolute; top: 2vh; right: 68vw; }
.P2Farm3 { position: absolute; top: 2vh; right: 64vw; }
.P2Farm4 { position: absolute; top: 2vh; right: 60vw; }
.P2Farm5 { position: absolute; top: 2vh; right: 56vw; }
.P2Farm6 { position: absolute; top: 10vh; right: 68vw; }
.P2Farm7 { position: absolute; top: 10vh; right: 64vw; }
.P2Farm8 { position: absolute; top: 10vh; right: 60vw; }
.P2Farm9 { position: absolute; top: 10vh; right: 56vw; }
.P2Farm10 { position: absolute; top: 18vh; right: 68vw; }
.P2Farm11 { position: absolute; top: 18vh; right: 64vw; }
.P2Farm12 { position: absolute; top: 18vh; right: 60vw; }
.P2Farm13 { position: absolute; top: 18vh; right: 56vw; }
.P2WoodRoom1 { position: absolute; top: 10vh; right: 72vw; }
.P2WoodRoom2 { position: absolute; top: 18vh; right: 72vw; }

/* Resource Table */
.p1-table-container { position: absolute; top: 10vh; right: 3vw; }
.p2-table-container { position: absolute; top: 10vh; left: 3vw; }
.custom-table { width: 150px; height: 300px; border-collapse: collapse; }
.custom-cell { border: 1px solid black; padding: 8px; width: 30vh; height: 60px; }
</style>