<!-- 8R 시작 시 상대 농장판 -->
<template>
  <div class="flex justify-center">
    <div class="bg-green-700 grid grid-cols-5 gap-2 p-2">
      <img
        v-for="farm in OppoFarm"
        :key="farm.id"
        :src="farm.imgSrc"
        alt="oppoFarm"
        :class="[
          'w-16 h-16',
          { 'border-blue-600 border-t-8': farm.isBlueBorderTop },
          { 'border-blue-600 border-b-8': farm.isBlueBorderBottom },
          { 'border-blue-600 border-l-8': farm.isBlueBorderLeft },
          { 'border-blue-600 border-r-8': farm.isBlueBorderRight }
        ]"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { farmRef } from '@/constants';
export default {
  setup() {
    const oppoFarm = ref(farmRef);
    // myFarm을 위한 함수들을 동적으로 생성
    const oppoFarmFunctions = {};
    for (let i = 1; i <= 15; i++) {
      const oppoFarmName = `openMyFarm${i}`;
      oppoFarmFunctions[oppoFarmName] = () => {
        console.log(oppoFarmName);
      };
      // 해당 myFarm의 clickHandler를 등록
      for (const farm of oppoFarm.value) {
        farm.clickHandler = oppoFarmFunctions[`openOppoFarm${farm.id}`];
      }
    }
    return {
        oppoFarm
    };
  },
  
  name: "OppoFarm",
  props: {
    OppoFarm: {
      type: Array,
      required: true,
      default: () => [
        { id: 1, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isBlueBorderLeft: true, isBlueBorderRight: true, isBlueBorderTop: true },
        { id: 2, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 3, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 4, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 5, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 6, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isBlueBorderLeft: true, isBlueBorderRight: true },
        { id: 7, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 8, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 9, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 10, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 11, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isBlueBorderLeft: true, isBlueBorderRight: true, isBlueBorderBottom: true },
        { id: 12, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 13, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 14, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 15, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
      ]
    }
  },
};
</script>
