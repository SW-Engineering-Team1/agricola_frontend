<template>
  <div>
    <GrainSeed></GrainSeed>
    <MajorFacModal
      v-if="isMajorFacModalOpen"
      @close-modal="closeMajorFacModal"
    ></MajorFacModal>
    <button
      class="rounded major-fac"
      @click="openMajorFacModal"
      style="background: transparent; border: none; padding: 0"
    >
      <img
        src="../assets/images/MajorFacCardBack/MajorFacCardBack.png"
        width="80"
      />
    </button>
    <P1AssiFacModal
      v-if="isP1AssiFacModalOpen"
      @close-modal="closeP1AssiFacModal"
    ></P1AssiFacModal>
    <button
      class="rounded p1-assi-fac"
      @click="openP1AssiFacModal"
      style="background: transparent; border: none; padding: 0"
    >
      <img
        src="../assets/images/AssiFacCardBack/P1AssiFacCardBack.png"
        width="80"
      />
    </button>
    <P1JobCardModal
      v-if="isP1JobCardModalOpen"
      @close-modal="closeP1JobCardModal"
    ></P1JobCardModal>
    <button
      class="rounded p1-job-card"
      @click="openP1JobCardModal"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/JobCardBack/P1JobCardBack.png" width="80" />
    </button>
    <P2AssiFacModal
      v-if="isP2AssiFacModalOpen"
      @close-modal="closeP2AssiFacModal"
    ></P2AssiFacModal>
    <button
      class="rounded p2-assi-fac"
      @click="openP2AssiFacModal"
      style="background: transparent; border: none; padding: 0"
    >
      <img
        src="../assets/images/AssiFacCardBack/P2AssiFacCardBack.png"
        width="80"
      />
    </button>
    <P2JobCardModal
      v-if="isP2JobCardModalOpen"
      @close-modal="closeP2JobCardModal"
    ></P2JobCardModal>
    <button
      class="rounded p2-job-card"
      @click="openP2JobCardModal"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/JobCardBack/P2JobCardBack.png" width="80" />
    </button>

    <!-- MainGameBoard -->
    <button
      class="rounded Action1"
      @click="openAction1"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/Action/1_FarmExpand.jpg" width="108" />
    </button>
    <button
      class="rounded Action2"
      @click="openAction2"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/Action/2_MeetingPlace.jpg" width="108" />
    </button>
    <button
      class="rounded Action3"
      @click="openAction3"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/Action/3_SeedGrain.jpg" width="108" />
    </button>
    <button
      class="rounded Action4"
      @click="openAction4"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/Action/4_Farmland.jpg" width="108" />
    </button>
    <button
      class="rounded Action5"
      @click="openAction5"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/Action/5_Instruction.jpg" width="108" />
    </button>
    <button
      class="rounded Action6"
      @click="openAction6"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/Action/6_DayLabor.jpg" width="108" />
    </button>
    <button
      class="rounded Action7"
      @click="openAction7"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/Action/7_Forest.jpg" width="108" />
    </button>
    <button
      class="rounded Action8"
      @click="openAction8"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/Action/8_SoilMining.jpg" width="108" />
    </button>
    <button
      class="rounded Action9"
      @click="openAction9"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/Action/9_ReedField.jpg" width="108" />
    </button>
    <button
      class="rounded Action10"
      @click="openAction10"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/Action/10_Fishing.jpg" width="108" />
    </button>
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
      class="rounded Round12"
      @click="openRound12"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/RoundCardBack/5Cycle1.png" width="112" />
    </button>
    <button
      class="rounded Round13"
      @click="openRound13"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/RoundCardBack/5Cycle2.png" width="112" />
    </button>
    <button
      class="rounded Round14"
      @click="openRound14"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/RoundCardBack/6Cycle.png" width="112" />
    </button>

    <!-- P1 FarmBoard -->
    <button
      class="P1Farm1"
      @click="openP1Farm1"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1Farm1.jpg" width="60" />
    </button>
    <button
      class="P1Farm2"
      @click="openP1Farm2"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1Farm2.jpg" width="60" />
    </button>
    <button
      class="P1Farm3"
      @click="openP1Farm3"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1Farm3.jpg" width="60" />
    </button>
    <button
      class="P1Farm4"
      @click="openP1Farm4"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1Farm4.jpg" width="60" />
    </button>
    <button
      class="P1Farm5"
      @click="openP1Farm5"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1Farm5.jpg" width="60" />
    </button>
    <button
      class="P1Farm6"
      @click="openP1Farm6"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1Farm6.jpg" width="60" />
    </button>
    <button
      class="P1Farm7"
      @click="openP1Farm7"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1Farm7.jpg" width="60" />
    </button>
    <button
      class="P1Farm8"
      @click="openP1Farm8"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1Farm8.jpg" width="60" />
    </button>
    <button
      class="P1Farm9"
      @click="openP1Farm9"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1Farm9.jpg" width="60" />
    </button>
    <button
      class="P1Farm10"
      @click="openP1Farm10"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1Farm10.jpg" width="60" />
    </button>
    <button
      class="P1Farm11"
      @click="openP1Farm11"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1Farm11.jpg" width="60" />
    </button>
    <button
      class="P1Farm12"
      @click="openP1Farm12"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1Farm12.jpg" width="60" />
    </button>
    <button
      class="P1Farm13"
      @click="openP1Farm13"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1Farm13.jpg" width="60" />
    </button>
    <button
      class="P1WoodRoom1"
      @click="openP1WoodRoom1"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1WoodRoom1.png" width="60" />
    </button>
    <button
      class="P1WoodRoom2"
      @click="openP1WoodRoom2"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P1FarmBoard/P1WoodRoom2.png" width="60" />
    </button>

    <!-- P2 FarmBoard -->
    <button
      class="P2Farm1"
      @click="openP2Farm1"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2Farm1.jpg" width="60" />
    </button>
    <button
      class="P2Farm2"
      @click="openP2Farm2"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2Farm2.jpg" width="60" />
    </button>
    <button
      class="P2Farm3"
      @click="openP2Farm3"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2Farm3.jpg" width="60" />
    </button>
    <button
      class="P2Farm4"
      @click="openP2Farm4"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2Farm4.jpg" width="60" />
    </button>
    <button
      class="P2Farm5"
      @click="openP2Farm5"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2Farm5.jpg" width="60" />
    </button>
    <button
      class="P2Farm6"
      @click="openP2Farm6"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2Farm6.jpg" width="60" />
    </button>
    <button
      class="P2Farm7"
      @click="openP2Farm7"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2Farm7.jpg" width="60" />
    </button>
    <button
      class="P2Farm8"
      @click="openP2Farm8"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2Farm8.jpg" width="60" />
    </button>
    <button
      class="P2Farm9"
      @click="openP2Farm9"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2Farm9.jpg" width="60" />
    </button>
    <button
      class="P2Farm10"
      @click="openP2Farm10"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2Farm10.jpg" width="60" />
    </button>
    <button
      class="P2Farm11"
      @click="openP2Farm11"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2Farm11.jpg" width="60" />
    </button>
    <button
      class="P2Farm12"
      @click="openP2Farm12"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2Farm12.jpg" width="60" />
    </button>
    <button
      class="P2Farm13"
      @click="openP2Farm13"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2Farm13.jpg" width="60" />
    </button>
    <button
      class="P2WoodRoom1"
      @click="openP2WoodRoom1"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2WoodRoom1.png" width="60" />
    </button>
    <button
      class="P2WoodRoom2"
      @click="P2WoodRoom2"
      style="background: transparent; border: none; padding: 0"
    >
      <img src="../assets/images/P2FarmBoard/P2WoodRoom2.png" width="60" />
    </button>
  </div>
</template>

<script>
import MajorFacModal from "@/components/MajorFacModal.vue";
import P1AssiFacModal from "@/components/P1AssiFacModal.vue";
import P1JobCardModal from "@/components/P1JobCardModal.vue";
import P2AssiFacModal from "@/components/P2AssiFacModal.vue";
import P2JobCardModal from "@/components/P2JobCardModal.vue";
import GrainSeed from "@/components/GrainSeed.vue";
import { onMounted, ref } from "vue";
import { io } from "socket.io-client";

export default {
  components: {
    MajorFacModal,
    P1AssiFacModal,
    P1JobCardModal,
    P2AssiFacModal,
    P2JobCardModal,
    GrainSeed,
  },
  setup() {
    const socket = io("localhost:3000");

    const isMajorFacModalOpen = ref(false);
    const isP1AssiFacModalOpen = ref(false);
    const isP1JobCardModalOpen = ref(false);
    const isP2AssiFacModalOpen = ref(false);
    const isP2JobCardModalOpen = ref(false);

    const openMajorFacModal = () => {
      isMajorFacModalOpen.value = true;
    };
    const closeMajorFacModal = () => {
      isMajorFacModalOpen.value = false;
    };
    const openP1AssiFacModal = () => {
      isP1AssiFacModalOpen.value = true;
    };
    const closeP1AssiFacModal = () => {
      isP1AssiFacModalOpen.value = false;
    };
    const openP1JobCardModal = () => {
      isP1JobCardModalOpen.value = true;
    };
    const closeP1JobCardModal = () => {
      isP1JobCardModalOpen.value = false;
    };
    const openP2AssiFacModal = () => {
      isP2AssiFacModalOpen.value = true;
    };
    const closeP2AssiFacModal = () => {
      isP2AssiFacModalOpen.value = false;
    };
    const openP2JobCardModal = () => {
      isP2JobCardModalOpen.value = true;
    };
    const closeP2JobCardModal = () => {
      isP2JobCardModalOpen.value = false;
    };

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
.major-fac {
  position: absolute;
  top: 50%;
  right: 25%;
}
.p1-assi-fac {
  position: absolute;
  bottom: 3%;
  left: 40%;
}
.p1-job-card {
  position: absolute;
  bottom: 3%;
  left: 45%;
}
.p2-assi-fac {
  position: absolute;
  top: 3%;
  right: 45%;
}
.p2-job-card {
  position: absolute;
  top: 3%;
  right: 50%;
}

/* MainGameBoard */
.Action1 {
  position: absolute;
  top: 26%;
  right: 70%;
}
.Action2 {
  position: absolute;
  top: 41%;
  right: 70%;
}
.Action3 {
  position: absolute;
  top: 49%;
  right: 70%;
}
.Action4 {
  position: absolute;
  top: 56%;
  right: 70%;
}
.Action5 {
  position: absolute;
  top: 64.5%;
  right: 70%;
}
.Action6 {
  position: absolute;
  top: 74%;
  right: 70%;
}
.Action7 {
  position: absolute;
  top: 46%;
  right: 64%;
}
.Action8 {
  position: absolute;
  top: 55%;
  right: 64%;
}
.Action9 {
  position: absolute;
  top: 64%;
  right: 64%;
}
.Action10 {
  position: absolute;
  top: 73%;
  right: 64%;
}
.Round1 {
  position: absolute;
  top: 26%;
  right: 64%;
}
.Round2 {
  position: absolute;
  top: 26%;
  right: 58%;
}
.Round3 {
  position: absolute;
  top: 44.5%;
  right: 58%;
}
.Round4 {
  position: absolute;
  top: 63%;
  right: 58%;
}
.Round5 {
  position: absolute;
  top: 26%;
  right: 52%;
}
.Round6 {
  position: absolute;
  top: 44.5%;
  right: 52%;
}
.Round7 {
  position: absolute;
  top: 63%;
  right: 52%;
}
.Round8 {
  position: absolute;
  top: 26%;
  right: 46%;
}
.Round9 {
  position: absolute;
  top: 44.5%;
  right: 46%;
}
.Round10 {
  position: absolute;
  top: 26%;
  right: 40%;
}
.Round11 {
  position: absolute;
  top: 44.5%;
  right: 40%;
}
.Round12 {
  position: absolute;
  top: 26%;
  right: 34%;
}
.Round13 {
  position: absolute;
  top: 44.5%;
  right: 34%;
}
.Round14 {
  position: absolute;
  top: 26%;
  right: 28%;
}

/* P1 FarmBoard */
.P1Farm1 {
  position: absolute;
  bottom: 18%;
  right: 46%;
}
.P1Farm2 {
  position: absolute;
  bottom: 18%;
  right: 42%;
}
.P1Farm3 {
  position: absolute;
  bottom: 18%;
  right: 38%;
}
.P1Farm4 {
  position: absolute;
  bottom: 18%;
  right: 34%;
}
.P1Farm5 {
  position: absolute;
  bottom: 10%;
  right: 46%;
}
.P1Farm6 {
  position: absolute;
  bottom: 10%;
  right: 42%;
}
.P1Farm7 {
  position: absolute;
  bottom: 10%;
  right: 38%;
}
.P1Farm8 {
  position: absolute;
  bottom: 10%;
  right: 34%;
}
.P1Farm9 {
  position: absolute;
  bottom: 2%;
  right: 46%;
}
.P1Farm10 {
  position: absolute;
  bottom: 2%;
  right: 42%;
}
.P1Farm11 {
  position: absolute;
  bottom: 2%;
  right: 38%;
}
.P1Farm12 {
  position: absolute;
  bottom: 2%;
  right: 34%;
}
.P1Farm13 {
  position: absolute;
  bottom: 2%;
  right: 30%;
}
.P1WoodRoom1 {
  position: absolute;
  bottom: 18%;
  right: 30%;
}
.P1WoodRoom2 {
  position: absolute;
  bottom: 10%;
  right: 30%;
}

/* P2 FarmBoard */
.P2Farm1 {
  position: absolute;
  top: 2%;
  right: 72%;
}
.P2Farm2 {
  position: absolute;
  top: 2%;
  right: 68%;
}
.P2Farm3 {
  position: absolute;
  top: 2%;
  right: 64%;
}
.P2Farm4 {
  position: absolute;
  top: 2%;
  right: 60%;
}
.P2Farm5 {
  position: absolute;
  top: 2%;
  right: 56%;
}
.P2Farm6 {
  position: absolute;
  top: 10%;
  right: 68%;
}
.P2Farm7 {
  position: absolute;
  top: 10%;
  right: 64%;
}
.P2Farm8 {
  position: absolute;
  top: 10%;
  right: 60%;
}
.P2Farm9 {
  position: absolute;
  top: 10%;
  right: 56%;
}
.P2Farm10 {
  position: absolute;
  top: 18%;
  right: 68%;
}
.P2Farm11 {
  position: absolute;
  top: 18%;
  right: 64%;
}
.P2Farm12 {
  position: absolute;
  top: 18%;
  right: 60%;
}
.P2Farm13 {
  position: absolute;
  top: 18%;
  right: 56%;
}
.P2WoodRoom1 {
  position: absolute;
  top: 10%;
  right: 72%;
}
.P2WoodRoom2 {
  position: absolute;
  top: 18%;
  right: 72%;
}
</style>
