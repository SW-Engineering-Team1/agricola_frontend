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
import { computed, onMounted, ref } from "vue";
import { io } from "socket.io-client";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  props: {
    isMyTurn: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const socket = io("localhost:3000");
    const store = useStore();
    const route = useRoute();

    const roomId = ref("");
    const user = computed(() => store.state.user);

    const useFarmExpand = () => {
      socket.emit("useActionSpace", {
          "actionName": "else", // TODO: 수정 필요
          "userId": user.value,
          "roomId": roomId.value,
          "goods" : [
            {
              "name": "wood",
              "num": 10,
              "isAdd": false
            },
            {
              "name": "reed",
              "num": 4,
              "isAdd": false
            },
            {
              "name": "woodHouse",
              "num": 2,
              "isAdd": true
            }
        ]
      });
    };

    const handleClick = (isMyTurn) => {
      if (isMyTurn) {
        useFarmExpand();
      }
    }

    onMounted(async () => {
      roomId.value = route.params.room;
    });

    return {
      handleClick,
    };
  },
};
</script>