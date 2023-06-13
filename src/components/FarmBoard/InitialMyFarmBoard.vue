<!-- 게임 시작 시 본인 농장판 -->
<template>
  <div class="flex justify-center">
    <div class="bg-green-700 grid grid-cols-5 gap-2 p-2">
      <div
        v-for="farm in MyFarm"
        :key="farm.id"
        class="image-container"
      >
        <img
          :src="farm.imgSrc"
          alt="myFarm"
          @click="farm.clickHandler"
          :class="[ 'w-16 h-16' ]"
        />
        <img
          v-if="farm.id === 5"
          src="@/assets/images/Etc/Player1.png"
          alt="additionalFarm"
          @click="farm.clickHandler"
          class="w-13 h-13 overlay-image"
          style="top: 1px; left: 2px;"
        />
        <img
          v-if="farm.id === 10"
          src="@/assets/images/Etc/Player1.png"
          alt="additionalFarm"
          @click="farm.clickHandler"
          class="w-13 h-13 overlay-image"
          style="top: 1px; left: 2px;"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// import { farmRef } from '@/constants';
export default {
  setup(props) {
    const myFarm = ref(props.MyFarm);
    // myFarm을 위한 함수들을 동적으로 생성
    const myFarmFunctions = {};
     for (let i = 1; i <= 15; i++) {
      const myFarmName = `openMyFarm${i}`;
      myFarmFunctions[myFarmName] = () => {
        console.log(myFarmName);
      };
      // 해당 myFarm의 clickHandler를 등록
      for (const farm of myFarm.value) {
        farm.clickHandler = myFarmFunctions[`openMyFarm${farm.id}`];
      }
    }
    return {
        myFarm 
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
        { id: 5, imgSrc: require('@/assets/images/Farm/WoodRoom.png') },
        { id: 6, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 7, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 8, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 9, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 10, imgSrc: require('@/assets/images/Farm/WoodRoom.png') },
        { id: 11, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 12, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 13, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 14, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 15, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
      ]
    }
  },
};
</script>
