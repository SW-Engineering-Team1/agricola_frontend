<template>
  <div>
    <MajorFacModal v-if="isMajorFacModalOpen" @close-modal="closeMajorFacModal"></MajorFacModal>
    <button class="rounded" @click="openMajorFacModal">주요설비창</button>

    <AssiFacModal v-if="isAssiFacModalOpen" @close-modal="closeAssiFacModal"></AssiFacModal>
    <button class="rounded" @click="openAssiFacModal">보조설비창</button>

    <JobCardModal v-if="isJobCardModalOpen" @close-modal="closeJobCardModal"></JobCardModal>
    <button class="rounded" @click="openJobCardModal">직업카드창</button>
  </div>
</template>

<script>
import MajorFacModal from '@/components/MajorFacModal.vue';
import AssiFacModal from '@/components/AssiFacModal.vue';
import JobCardModal from '@/components/JobCardModal.vue';
import { ref } from 'vue';

export default {
  components: {
    MajorFacModal,
    AssiFacModal,
    JobCardModal,
  },
  setup() {
    const isMajorFacModalOpen = ref(false);
    const isAssiFacModalOpen = ref(false);
    const isJobCardModalOpen = ref(false);

    const openMajorFacModal = () => {
      isMajorFacModalOpen.value = true;
    };

    const closeMajorFacModal = () => {
      isMajorFacModalOpen.value = false;
    };

    const openAssiFacModal = () => {
      isAssiFacModalOpen.value = true;
    };

    const closeAssiFacModal = () => {
      isAssiFacModalOpen.value = false;
    };

    const openJobCardModal = () => {
      isJobCardModalOpen.value = true;
    };

    const closeJobCardModal = () => {
      isJobCardModalOpen.value = false;
    };

    return {
      isMajorFacModalOpen,
      isAssiFacModalOpen,
      isJobCardModalOpen,
      openMajorFacModal,
      closeMajorFacModal,
      openAssiFacModal,
      closeAssiFacModal,
      openJobCardModal,
      closeJobCardModal,
    };
  },
};
</script>
