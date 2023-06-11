<!-- Action1 농장확장 행동칸 -->
<!-- 농장 확장 행동칸에서 외양간 기능은 없습니다 -->
<template>
  <div>
    <button @click="useFarmExpand" >
      <img src="../../assets/images/Action/1_FarmExpand.jpg" class="w-full" alt="farmExpand"/>
    </button>
  </div>
</template>
<script>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { io } from "socket.io-client";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  setup() {
    const socket = io("localhost:3000");
    const store = useStore();
    const route = useRoute();

    const roomId = ref("");
    const user = computed(() => store.state.user);

    const useFarmExpand = () => {
      //if(turn 종료 후 )
      socket.emit("useActionSpace", {
          "actionName": "else", 
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

    onMounted(async () => {
      roomId.value = route.params.room;
    });

    onUnmounted(() => {
      socket.off("useActionSpace");
    });

    return {
      useFarmExpand,
      roomId,
      user,
    };
  },
};
</script>