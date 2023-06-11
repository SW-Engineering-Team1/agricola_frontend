<!-- 게임 시작 시 상대 농장판 -->
<template>
  <div class="flex justify-center">
    <div class="bg-green-700 grid grid-cols-5 gap-2 p-2 rotate-180">
      <img
        v-for="farm in oppoFarm"
        :key="farm.id"
        :src="farm.imgSrc"
        alt="oppoFarm"
        class="w-16 h-16"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "OppoFarm",
  //*  상대 농장판 데이터를 받아오는 prop */
  props: {
    oppoFarm: Array,
  },
};
</script>