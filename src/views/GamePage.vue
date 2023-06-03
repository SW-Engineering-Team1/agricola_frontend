<template>
  <div>
    <MainFacModal v-if="isModalOpen" @close-modal="closeModal"></MainFacModal>
    <button class="rounded" @click="openModal">주요설비창</button>
  </div>
</template>
<script>
import MainFacModal from '@/components/MainFacModal.vue';
import { ref } from 'vue';

export default {
  components: {
    MainFacModal,
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
