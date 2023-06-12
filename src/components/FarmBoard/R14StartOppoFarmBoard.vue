<!-- 14R 시작 시 상대 농장판 -->
<template>
  <div class="flex justify-center">
    <div class="bg-green-700 grid grid-cols-5 gap-2 p-2">
      <div
        v-for="farm in OppoFarm"
        :key="farm.id"
        class="image-container"
      >
        <img
            :src="farm.imgSrc"
            :alt="oppoFarm"
            :class="[
              'w-16 h-16',
              { 'border-blue-500 border-t-8': farm.isBlueBorderTop },
              { 'border-blue-500 border-b-8': farm.isBlueBorderBottom },
              { 'border-blue-500 border-l-8': farm.isBlueBorderLeft },
              { 'border-blue-500 border-r-8': farm.isBlueBorderRight }
            ]"
        />
        <img
            v-if="farm.id === 3"
            src="@/assets/images/Resources/10_Cow_P2.png"
            alt="additionalFarm"
            class="w-8 h-8 overlay-image"
            style="top: 16px; left: 20px;"
        />
        <img
            v-if="farm.id === 4"
            src="@/assets/images/Resources/10_Cow_P2.png"
            alt="additionalFarm"
            class="w-8 h-8 overlay-image"
            style="top: 16px; left: 4px; z-index: 2;"
        />
        <img
          v-if="farm.id === 4"
          src="@/assets/images/Resources/10_Cow_P2.png"
          alt="additionalFarm"
          class="w-8 h-8 overlay-image"
          style="top: 16px; left: 25px; z-index: 2;"
        />
        <img
          v-if="farm.id === 5"
          src="@/assets/images/Resources/8_Sheep_P2.png"
          alt="additionalFarm"
          class="w-8 h-8 overlay-image"
          style="top: 16px; left: 4px; z-index: 2;"
        />
        <img
            v-if="farm.id === 5"
            src="@/assets/images/Resources/8_Sheep_P2.png"
            alt="additionalFarm"
            class="w-8 h-8 overlay-image"
            style="top: 16px; left: 25px; z-index: 2;"
        />
        <img
            v-if="farm.id === 6"
            src="@/assets/images/Etc/Player2.png"
            alt="additionalFarm"
            class="w-13 h-13 overlay-image"
            style="top: 5px; left: 0px;"
        />
        <img
            v-if="farm.id === 10"
            src="@/assets/images/Resources/8_Sheep_P2.png"
            alt="additionalFarm"
            class="w-8 h-8 overlay-image"
            style="top: 16px; left: 15px;"
        />
        <img
            v-if="farm.id === 6"
            src="@/assets/images/Etc/Player2.png"
            alt="additionalFarm"
            class="w-13 h-13 overlay-image"
            style="top: 32px; left: -20px;"
        />
        <img
            v-if="farm.id === 11"
            src="@/assets/images/Etc/Player2.png"
            alt="additionalFarm"
            class="w-13 h-13 overlay-image"
            style="top: 5px; left: 0px;"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { farmRef } from '@/constants';
import FieldFarming from '../RoundCardActions/FieldFarming.vue';

export default {
  setup() {
    const oppoFarm = ref(farmRef);
    // oppoFarm을 위한 함수들을 동적으로 생성
    const oppoFarmFunctions = {};
    for (let i = 1; i <= 15; i++) {
      const oppoFarmName = `openOppoFarm${i}`;
      if ( i === 4 ) {
        oppoFarmFunctions[oppoFarmName] = () => {
          return {
            template: '<FieldFarming></FieldFarming>',
            components: {
              FieldFarming
            }
          };
        }
      }
      else {
        oppoFarmFunctions[oppoFarmName] = () => {
          console.log(oppoFarmName);
        };
      }
      // 해당 oppoFarm의 clickHandler를 등록
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
        { id: 1, imgSrc: require('@/assets/images/Farm/Field.png') },
        { id: 2, imgSrc: require('@/assets/images/Farm/Field.png') },
        { id: 3, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isBlueBorderTop: true, isBlueBorderLeft: true },
        { id: 4, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isBlueBorderTop: true, isBlueBorderRight: true },
        { id: 5, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isBlueBorderTop: true, isBlueBorderRight: true },
        { id: 6, imgSrc: require('@/assets/images/Farm/StoneRoom.png') },
        { id: 7, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 8, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isBlueBorderLeft: true },
        { id: 9, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isBlueBorderRight: true },
        { id: 10, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isBlueBorderRight: true },
        { id: 11, imgSrc: require('@/assets/images/Farm/StoneRoom.png') },
        { id: 12, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 13, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isBlueBorderBottom: true, isBlueBorderLeft: true },
        { id: 14, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isBlueBorderBottom: true, isBlueBorderRight: true },
        { id: 15, imgSrc: require('@/assets/images/Farm/Farm.jpg'), isBlueBorderBottom: true, isBlueBorderRight: true },
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