<template>
    <div>
        <JobCardModal v-if="isModalOpen" @close-modal="isModalOpen=false"></JobCardModal>
        <button class="rounded" @click="isModalOpen=true">보조설비창</button>    
    </div>
</template>
<script>
   import JobCardModal from '@/components/JobCardModal.vue';

    export default {
    components: {
        JobCardModal,
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


