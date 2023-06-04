<template>
   <div class='modal'>
        <div class='overlay' @click="$emit('close-modal')"></div>
        <div class="relative max-w-7xl h-2/5 mx-auto mt-30 mb-30 bg-white opacity-100">
            <div class="grid grid-cols-7 gap-4 h-full my-8">
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
                {id: '0',title: 'Crushed soil'},
                {id: '1',title: 'Manger'},
                {id: '2',title: 'Bottle'},
                {id: '3',title: 'Kitchen room'},
                {id: '4',title: 'Field of beans'},
                {id: '5',title: 'Junkyard'},
                {id: '6',title: 'Thick forest'},
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