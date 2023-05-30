// 각 player당 1개 이므로 구분해서 하나 더 필요

<template>
    <div>
        <AssiFacModal v-if="isModalOpen" @close-modal="isModalOpen=false"></AssiFacModal>
        <button class="rounded" @click="isModalOpen=true">보조설비창</button>    
    </div>
</template>
<script>
   import AssiFacModal from '@/components/AssiFacModal.vue';

    export default {
    components: {
        AssiFacModal,
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


