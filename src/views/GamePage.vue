<template>
  <div>
    <MajorFacModal v-if="isMajorFacModalOpen" @close-modal="closeMajorFacModal"></MajorFacModal>
    <button class="rounded major-fac" @click="openMajorFacModal">주요설비</button>

    <P1AssiFacModal v-if="isP1AssiFacModalOpen" @close-modal="closeP1AssiFacModal"></P1AssiFacModal>
    <button class="rounded p1-assi-fac" @click="openP1AssiFacModal">P1보조설비</button>

    <P1JobCardModal v-if="isP1JobCardModalOpen" @close-modal="closeP1JobCardModal"></P1JobCardModal>
    <button class="rounded p1-job-card" @click="openP1JobCardModal">P1직업카드</button>

    <P2AssiFacModal v-if="isP2AssiFacModalOpen" @close-modal="closeP2AssiFacModal"></P2AssiFacModal>
    <button class="rounded p2-assi-fac" @click="openP2AssiFacModal">P2보조설비</button>

    <P2JobCardModal v-if="isJobCardModalOpen" @close-modal="closeP2JobCardModal"></P2JobCardModal>
    <button class="rounded p2-job-card" @click="openP2JobCardModal">P2직업카드</button>
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
      isP1AssiFacModalOpen.value = true;
    };
    const closeP2AssiFacModal = () => {
      isP1AssiFacModalOpen.value = false;
    };
    const openP2JobCardModal = () => {
      isP1JobCardModalOpen.value = true;
    };
    const closeP2JobCardModal = () => {
      isP1JobCardModalOpen.value = false;
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
.button-container {
  /* 필요한 경우 스타일을 수정하세요 */
}

.major-fac {
  position: absolute;
  top: 50%;
  right: 40%;
}

.p1-assi-fac {
  position: absolute;
  bottom: 5%;
  right: 15%;
}

.p1-job-card {
  position: absolute;
  bottom: 5%;
  right: 5%;
}
.p2-assi-fac {
  position: absolute;
  top: 5%;
  right: 15%;
}

.p2-job-card {
  position: absolute;
  top: 5%;
  right: 5%;
}
</style>