<!-- Action1 농장확장 행동칸 -->
<!-- 농장 확장 행동칸에서 외양간 기능은 없습니다 -->
<template>
  <div>
    <img
      src="@/assets/images/Action/1_FarmExpand.jpg"
      @click="handleClick(isMyTurn)"
      :class="{'w-full cursor-pointer transform transition duration-500 ease-in-out hover:scale-110': true, 'pointer-events-none': !isMyTurn}"
      alt="farmExpand"
    />
  </div>
</template>
<script>
export default {
  props: {
    isMyTurn: {
      type: Boolean,
      required: true,
    },
  },
  setup() {

    const handleClick = (isMyTurn) => {
      if (isMyTurn) {
        // 아무것도 하지 않음
        console.log("농장 확장");
      }
    }

    return {
      handleClick,
    };
  },
};
</script>