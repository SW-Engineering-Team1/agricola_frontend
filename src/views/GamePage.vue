<template>
  <div>
    <MajorFacModal v-if="isModalOpen" @close-modal="closeModal"></MajorFacModal>
    <button class="rounded" @click="openModal">주요설비창</button>
  </div>
</template>
<script>
import MajorFacModal from '@/components/MajorFacModal.vue';
import { ref } from 'vue';

export default {
  components: {
    MajorFacModal,
  },
  setup() {
    const isModalOpen = ref(false);

    const openModal = () => {
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };

    return { isModalOpen, openModal, closeModal };
  },
};
</script>
