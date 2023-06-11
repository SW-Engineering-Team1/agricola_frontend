<!-- Action4 농지 행동칸 -->
<template>
  <div>
    <img
      src="@/assets/images/Action/4_Farmland.jpg"
      @click="handleClick(isMyTurn)"
      :class="{'w-full cursor-pointer transform transition duration-500 ease-in-out hover:scale-110': true, 'pointer-events-none': !isMyTurn}"
      alt="farmLand"
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
        console.log("농지");
      }
    }

    return {
      handleClick,
    };
  },
};
</script>