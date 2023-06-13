<!-- 게임 시작 시 상대 농장판 -->
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
          alt="oppoFarm"
          @click="farm.clickHandler"
          :class="[ 'w-16 h-16' ]"
        />
        <img
          v-if="farm.id === 6"
          src="@/assets/images/Etc/Player2.png"
          alt="additionalFarm"
          @click="farm.clickHandler"
          class="w-13 h-13 overlay-image"
          style="top: 1px; left: 2px;"
        />
        <img
          v-if="farm.id === 11"
          src="@/assets/images/Etc/Player2.png"
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
import { farmRef } from '@/constants';
export default {
  setup() {
    const oppoFarm = ref(farmRef);
    // oppoFarm을 위한 함수들을 동적으로 생성
    const oppoFarmFunctions = {};
    for (let i = 1; i <= 15; i++) {
      const oppoFarmName = `openOppoFarm${i}`;
      oppoFarmFunctions[oppoFarmName] = () => {
        console.log(oppoFarmName);
      };
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
        { id: 1, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 2, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 3, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 4, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 5, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 6, imgSrc: require('@/assets/images/Farm/WoodRoom.png') },
        { id: 7, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 8, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 9, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 10, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 11, imgSrc: require('@/assets/images/Farm/WoodRoom.png') },
        { id: 12, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 13, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 14, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
        { id: 15, imgSrc: require('@/assets/images/Farm/Farm.jpg') },
      ]
    }
  },
};
</script>
