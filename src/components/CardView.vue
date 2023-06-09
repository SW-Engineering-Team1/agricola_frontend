<template>
    <div class="bg-gray-100" v-if="!isUsed">
        <div @click="chooseCard" class="p-4 h-full">{{card.title}}</div>
    </div>
    <div class="bg-gray-100" v-else></div>
</template>
<script>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import {io} from "socket.io-client"
import { useStore } from 'vuex'
import {useRoute} from 'vue-router'


export default {
    name: "card",
    props:{
        card:Object
    },
    setup(props){
        const isUsed = ref(false);

        const socket = io("localhost:3000");
        const store = useStore();
        const route = useRoute();

        const goodsName = ref(props.card.title);
        const roomId = ref('');
        const user = computed(() => store.state.user);
        // const remainFacility = ref([]);

        const chooseCard = () => {
            socket.emit("useActionSpace",{
                actionName: "Major Improvement",
                userId: user.value,
                roomId: roomId.value,
                goods:[
                    {
                        name: goodsName.value,
                        num:1,
                        isAdd: true
                    }
                ]
            },);
            isUsed.value = true;
            console.log(goodsName.value,roomId.value,user.value);
            // console.log('Emitted useActionSpace event:', cardName);
        }

        onMounted(async() => {
            roomId.value = route.params.room;
           
            socket.on("useActionSpace",(data) => {
                // remainFacility.value = data.result;
                console.log("Farm Num",data.result);
            })
            
        })
        onUnmounted(() => {
            socket.off("useActionSpace");
        })
        return{
            chooseCard,
            goodsName,
            user,
            isUsed,
        }
    },
}
</script>