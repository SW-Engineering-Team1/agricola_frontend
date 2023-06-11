<!-- 게임 시작 시 본인 농장판 -->
<template>
  <div class="flex justify-center">
    <div class="bg-green-700 grid grid-cols-5 gap-2 p-2">
      <img
        v-for="farm in myFarm"
        :key="farm.id"
        :src="farm.imgSrc"
        alt="myFarm"
        class="w-16 h-16"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFarm",
  //*  본인 농장판 데이터를 받아오는 prop  */
  props: {
    myFarm: Array,
  },
};
</script>