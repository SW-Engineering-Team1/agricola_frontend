<!-- 8R 시작 시 본인 농장판 -->
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
            :alt="myFarm"
            @click="farm.clickHandler"
            :class="[
              'w-16 h-16',
              { 'border-red-700 border-t-8': farm.isRedBorderTop },
              { 'border-red-700 border-b-8': farm.isRedBorderBottom },
              { 'border-red-700 border-l-8': farm.isRedBorderLeft },
              { 'border-red-700 border-r-8': farm.isRedBorderRight }
            ]"
        />
        <img
            v-if="farm.id === 1"
            src="@/assets/images/Resources/5_Grain_P1.png"
            alt="additionalFarm"
            @click="farm.clickHandler"
            class="w-10 h-10 overlay-image"
            style="top: 13px; left: 13px;"
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
          v-if="farm.id === 6"
          src="@/assets/images/Resources/8_Sheep_P1.png"
          alt="additionalFarm"
          @click="farm.clickHandler"
          class="w-8 h-8 overlay-image"
          style="top: 16px; left: 8px; z-index: 2;"
        />
        <img
            v-if="farm.id === 6"
            src="@/assets/images/Resources/8_Sheep_P1.png"
            alt="additionalFarm"
            @click="farm.clickHandler"
            class="w-8 h-8 overlay-image"
            style="top: 16px; left: 32px; z-index: 2;"
        />
        <img
            v-if="farm.id === 7"
            src="@/assets/images/Resources/8_Sheep_P1.png"
            alt="additionalFarm"
            @click="farm.clickHandler"
            class="w-8 h-8 overlay-image"
            style="top: 16px; left: 15px;"
        />
         <img
            v-if="farm.id === 10"
            src="@/assets/images/Etc/Player1.png"
            alt="additionalFarm"
            @click="farm.clickHandler"
            class="w-13 h-13 overlay-image"
            style="top: 1px; left: 2px;"
        />
        <img
          v-if="farm.id === 11"
          src="@/assets/images/Resources/8_Sheep_P1.png"
          alt="additionalFarm"
          @click="farm.clickHandler"
          class="w-8 h-8 overlay-image"
          style="top: 16px; left: 8px; z-index: 2;"
        />
        <img
            v-if="farm.id === 11"
            src="@/assets/images/Resources/8_Sheep_P1.png"
            alt="additionalFarm"
            @click="farm.clickHandler"
            class="w-8 h-8 overlay-image"
            style="top: 16px; left: 32px; z-index: 2;"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// import { farmRef } from '@/constants';
import GrainUtilization from '../RoundCardActions/GrainUtilization.vue';

export default {
  setup(props) {
    const myFarm = ref(props.MyFarm);
    // myFarm을 위한 함수들을 동적으로 생성
    const myFarmFunctions = {};
    for (let i = 1; i <= 15; i++) {
      const myFarmName = `openMyFarm${i}`;
      if ( i === 15 ) {
        myFarmFunctions[myFarmName] = () => {
          return {
            template: '<GrainUtilization></GrainUtilization>',
            components: {
              GrainUtilization
            }
          };
        }
      }
      else {
        myFarmFunctions[myFarmName] = () => {
          console.log(myFarmName);
        };
      }
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
        { id: 1, imgSrc: require('@/assets/images/Farm/Field.png') },
        { id: 2, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 3, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 4, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 5, imgSrc: require('@/assets/images/Farm/WoodRoom.png') },
        { id: 6, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderTop: true, isRedBorderLeft: true },
        { id: 7, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderTop: true },
        { id: 8, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderTop: true },
        { id: 9, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderTop: true, isRedBorderRight: true },
        { id: 10, imgSrc: require('@/assets/images/Farm/WoodRoom.png') },
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

<style>
.image-container {
  position: relative;
}

.overlay-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.image-container img:first-child {
  z-index: 2;
}
</style>