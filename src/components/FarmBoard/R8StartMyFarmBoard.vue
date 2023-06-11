<!-- 8R 시작 시 본인 농장판 -->
<template>
  <div class="flex justify-center">
    <div class="bg-green-700 grid grid-cols-5 gap-2 p-2">
      <img
        v-for="farm in MyFarm"
        :key="farm.id"
        @click="farm.clickHandler"
        :src="farm.imgSrc"
        alt="myFarm"
        :class="[
          'w-16 h-16',
          { 'border-red-700 border-t-8': farm.isRedBorderTop },
          { 'border-red-700 border-b-8': farm.isRedBorderBottom },
          { 'border-red-700 border-l-8': farm.isRedBorderLeft },
          { 'border-red-700 border-r-8': farm.isRedBorderRight }
        ]"
      />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { io } from "socket.io-client";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { farmRef } from '@/constants';
export default {
  setup() {
    const socket = io("localhost:3000");
    const store = useStore();
    const route = useRoute();

    const roomId = ref("");
    const user = computed(() => store.state.user);
    const myFarm = ref(farmRef);
    // myFarm을 위한 함수들을 동적으로 생성
    const myFarmFunctions = {};
    for (let i = 1; i <= 15; i++) {
      const myFarmName = `openMyFarm${i}`;
      if(i === 15) {
        myFarmFunctions[myFarmName] = () => {
          socket.emit("useActionSpace",{
            "actionName":"Grain Utilization",
            "userId": user.value,
            "roomId": roomId.value,
            "goods":[
              {
                "name":"vege",
                "num":1,
                "isAdd":false
              },
              {
                "id":15,
                "kind":"vege"
              }
            ]
          })
        };
      } else {
        myFarmFunctions[myFarmName] = () => {
          console.log(myFarmName);
        };
      }
      // 해당 myFarm의 clickHandler를 등록
      for (const farm of myFarm.value) {
        farm.clickHandler = myFarmFunctions[`openMyFarm${farm.id}`];
      }
    }
    onMounted(async () => {
      roomId.value = route.params.room;
    });

    onUnmounted(() => {
      socket.off("useActionSpace");
    });
    return {
        myFarm,
        roomId,
        user
    };
  },
  
  name: "MyFarm",
  props: {
    MyFarm: {
      type: Array,
      required: true,
      default: () => [
        { id: 1, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 2, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 3, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 4, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 5, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 6, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderTop: true, isRedBorderLeft: true },
        { id: 7, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderTop: true },
        { id: 8, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderTop: true },
        { id: 9, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderTop: true, isRedBorderRight: true },
        { id: 10, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 11, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderBottom: true, isRedBorderLeft: true },
        { id: 12, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderBottom: true },
        { id: 13, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderBottom: true },
        { id: 14, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderBottom: true, isRedBorderRight: true },
        { id: 15, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
      ]
    }
  },
};
</script>
