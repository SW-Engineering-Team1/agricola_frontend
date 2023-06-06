<template>
  <div>
    <MajorFacModal v-if="isMajorFacModalOpen" @close-modal="closeMajorFacModal"></MajorFacModal>
    <button class="rounded major-fac" @click="openMajorFacModal" style="background: transparent; border: none; padding: 0;">
      <img src="../assets/images/MajorFacCardBack/MajorFacCardBack.png" width="90">
    </button>

    <P1AssiFacModal v-if="isP1AssiFacModalOpen" @close-modal="closeP1AssiFacModal"></P1AssiFacModal>
    <button class="rounded p1-assi-fac" @click="openP1AssiFacModal" style="background: transparent; border: none; padding: 0;">
      <img src="../assets/images/AssiFacCardBack/P1AssiFacCardBack.png" width="90">
    </button>

    <P1JobCardModal v-if="isP1JobCardModalOpen" @close-modal="closeP1JobCardModal"></P1JobCardModal>
    <button class="rounded p1-job-card" @click="openP1JobCardModal" style="background: transparent; border: none; padding: 0;">
      <img src="../assets/images/JobCardBack/P1JobCardBack.png" width="90">
    </button>

    <P2AssiFacModal v-if="isP2AssiFacModalOpen" @close-modal="closeP2AssiFacModal"></P2AssiFacModal>
    <button class="rounded p2-assi-fac" @click="openP2AssiFacModal" style="background: transparent; border: none; padding: 0;">
      <img src="../assets/images/AssiFacCardBack/P2AssiFacCardBack.png" width="90">
    </button>

    <P2JobCardModal v-if="isP2JobCardModalOpen" @close-modal="closeP2JobCardModal"></P2JobCardModal>
    <button class="rounded p2-job-card" @click="openP2JobCardModal" style="background: transparent; border: none; padding: 0;">
      <img src="../assets/images/JobCardBack/P2JobCardBack.png" width="90">
    </button>
    
    <div class="MainGameBoard"><img src="../assets/images/MainGameBoard/MainGameBoard.png" width="800"></div>
    <div class="P1FarmBoard"><img src="../assets/images/FarmBoard/P1FarmBoard.png" width="350"></div>
    <div class="P2FarmBoard"><img src="../assets/images/FarmBoard/P2FarmBoard.png" width="350"></div>
  </div>
</template>

<script>
import MajorFacModal from '@/components/MajorFacModal.vue';
import P1AssiFacModal from '@/components/P1AssiFacModal.vue';
import P1JobCardModal from '@/components/P1JobCardModal.vue';
import P2AssiFacModal from '@/components/P2AssiFacModal.vue';
import P2JobCardModal from '@/components/P2JobCardModal.vue';
import { ref } from 'vue';

export default {
  components: {
    MajorFacModal,
    P1AssiFacModal,
    P1JobCardModal,
    P2AssiFacModal,
    P2JobCardModal,
  },
  setup() {
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
  top: 35%;
  right: 20%;
}
.p1-assi-fac {
  position: absolute;
  bottom: 5%;
  right: 30%;
}
.p1-job-card {
  position: absolute;
  bottom: 5%;
  right: 25%;
}
.p2-assi-fac {
  position: absolute;
  top: 5%;
  right: 30%;
}
.p2-job-card {
  position: absolute;
  top: 5%;
  right: 25%;
}
.MainGameBoard {
  position: absolute;
  top: 28%;
  right: 27%;
}
.P1FarmBoard {
  position: absolute;
  bottom: 0%;
  right: 40%;
}
.P2FarmBoard {
  position: absolute;
  top: 0%;
  right: 40%;
}
</style>