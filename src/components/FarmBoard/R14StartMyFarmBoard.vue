<!-- 14R 시작 시 본인 농장판 -->
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
            class="w-10 h-10 overlay-image"
            style="top: 14px; left: 3px; z-index: 2;"
        />
        <img
            v-if="farm.id === 1"
            src="@/assets/images/Resources/5_Grain_P1.png"
            alt="additionalFarm"
            class="w-10 h-10 overlay-image"
            style="top: 14px; left: 25px; z-index: 2;"
        />
        <img
            v-if="farm.id === 2"
            src="@/assets/images/Resources/6_Vegetable_P1.png"
            alt="additionalFarm"
            class="w-10 h-10 overlay-image"
            style="top: 13px; left: 13px;"
        />
        <img
          v-if="farm.id === 6"
          src="@/assets/images/Resources/8_Sheep_P1.png"
          alt="additionalFarm"
          class="w-8 h-8 overlay-image"
          style="top: 18px; left: 8px; z-index: 2;"
        />
        <img
            v-if="farm.id === 6"
            src="@/assets/images/Resources/8_Sheep_P1.png"
            alt="additionalFarm"
            class="w-8 h-8 overlay-image"
            style="top: 18px; left: 32px; z-index: 2;"
        />
        <img
          v-if="farm.id === 7"
          src="@/assets/images/Resources/8_Sheep_P1.png"
          alt="additionalFarm"
          class="w-8 h-8 overlay-image"
          style="top: 18px; left: 3px; z-index: 2;"
        />
        <img
            v-if="farm.id === 7"
            src="@/assets/images/Resources/8_Sheep_P1.png"
            alt="additionalFarm"
            class="w-8 h-8 overlay-image"
            style="top: 18px; left: 25px; z-index: 2;"
        />
        <img
          v-if="farm.id === 8"
          src="@/assets/images/Resources/9_Pig_P1.png"
          alt="additionalFarm"
          class="w-8 h-8 overlay-image"
          style="top: 18px; left: 4px; z-index: 2;"
        />
        <img
            v-if="farm.id === 8"
            src="@/assets/images/Resources/9_Pig_P1.png"
            alt="additionalFarm"
            class="w-8 h-8 overlay-image"
            style="top: 18px; left: 29px; z-index: 2;"
        />
        <img
          v-if="farm.id === 9"
          src="@/assets/images/Resources/9_Pig_P1.png"
          alt="additionalFarm"
          class="w-8 h-8 overlay-image"
          style="top: 18px; left: 4px; z-index: 2;"
        />
        <img
            v-if="farm.id === 9"
            src="@/assets/images/Resources/9_Pig_P1.png"
            alt="additionalFarm"
            class="w-8 h-8 overlay-image"
            style="top: 18px; left: 29px; z-index: 2;"
        />
        <img
          v-if="farm.id === 11"
          src="@/assets/images/Resources/8_Sheep_P1.png"
          alt="additionalFarm"
          class="w-8 h-8 overlay-image"
          style="top: 18px; left: 8px; z-index: 2;"
        />
        <img
            v-if="farm.id === 11"
            src="@/assets/images/Resources/8_Sheep_P1.png"
            alt="additionalFarm"
            class="w-8 h-8 overlay-image"
            style="top: 18px; left: 32px; z-index: 2;"
        />
        <img
          v-if="farm.id === 12"
          src="@/assets/images/Resources/8_Sheep_P1.png"
          alt="additionalFarm"
          class="w-8 h-8 overlay-image"
          style="top: 18px; left: 3px; z-index: 2;"
        />
        <img
            v-if="farm.id === 12"
            src="@/assets/images/Resources/8_Sheep_P1.png"
            alt="additionalFarm"
            class="w-8 h-8 overlay-image"
            style="top: 18px; left: 25px; z-index: 2;"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { farmRef } from '@/constants';
export default {
  setup() {
    const myFarm = ref(farmRef);
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
        { id: 1, imgSrc: require('@/assets/images/Farm/Field.png') },
        { id: 2, imgSrc: require('@/assets/images/Farm/Field.png') },
        { id: 3, imgSrc: require('@/assets/images/Farm/Field.png') },
        { id: 4, imgSrc: require('@/assets/images/Farm/WoodRoom.png') },
        { id: 5, imgSrc: require('@/assets/images/Farm/WoodRoom.png') },
        { id: 6, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderTop: true, isRedBorderLeft: true },
        { id: 7, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderTop: true, isRedBorderRight: true },
        { id: 8, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderTop: true },
        { id: 9, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderTop: true, isRedBorderRight: true },
        { id: 10, imgSrc: require('@/assets/images/Farm/WoodRoom.png') },
        { id: 11, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderBottom: true, isRedBorderLeft: true },
        { id: 12, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderBottom: true, isRedBorderRight: true },
        { id: 13, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderBottom: true },
        { id: 14, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isRedBorderBottom: true, isRedBorderRight: true },
        { id: 15, imgSrc: require('@/assets/images/Farm/WoodRoom.png') },
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