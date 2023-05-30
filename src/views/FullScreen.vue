<template>
    <div>
        <FacilityModal v-if="isModalOpen" @close-modal="isModalOpen=false"></FacilityModal>
        <button class="rounded" @click="isModalOpen=true">주요설비창</button>    
    </div>
</template>
<script>
   import FacilityModal from '@/components/FacilityModal.vue';

    export default {
    components: {
        FacilityModal,
    },
    data() {
        return {
        isModalOpen: false,
        };
    },
    methods: {
        openModal() {
        this.isModalOpen = true;
        },
        closeModal() {
        this.isModalOpen = false;
        },
    },
    }; 
</script>


