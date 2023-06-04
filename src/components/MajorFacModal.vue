<template>
   <div class='modal'>
        <div class='overlay' @click="$emit('close-modal')"></div>
        <div class="relative max-w-7xl h-5/6 mx-auto mt-30 mb-30 bg-white opacity-100">
            <div class="grid grid-cols-5 gap-4 h-full my-8">
                <CardView v-for="card, i in card" :key="i" v-bind:card="card"></CardView>
            </div>
        </div>
   </div>

</template>
<script>
import CardView from '@/components/CardView.vue';
import {io} from "socket.io-client"
// import { ref } from 'vue'
export default{
    data(){
        return {
            card:[
                {id: '0',title: 'Stove'},
                {id: '1',title: 'Stove'},
                {id: '2',title: 'Earthen klin'},
                {id: '3',title: 'Earthen klin'},
                {id: '4',title: 'Earthen klin'},
                {id: '5',title: 'Brazier'},
                {id: '6',title: 'Brazier'},
                {id: '7',title: 'Brazier'},
                {id: '8',title: 'Brazier'},
                {id: '9',title: 'Brazier'},
            ],
            isCardAvailalbe: true
        }
    },
    components: {
        CardView,
    },
    setup(){
        // const userID = ref('');
        const socket = io("localhost:3000");
        socket.on("useActionSpace",(data) => {
            console.log(data);
        })
    }
}
</script>
<style scoped>
.modal,
.overlay{
   width:100%;
   height:100%;
   position: fixed;
   left: 0;
   top: 0; 
}
.overlay{
    opacity: 0.5;
    background-color: black;
}
</style>