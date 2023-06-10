<!-- Action7 숲 행동칸 -->
<template>
  <div>
    <button @click="useForest">
      <img
        src="../assets/images/Action/7_Forest.jpg"
        class="w-full"
        alt="forest"
      />
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
    const woodAccumulated = ref("");

    const useForest = () => {
      //if(turn 종료 후 )
      socket.emit("useActionSpace", {
        actionName: "Use Accumulated Goods",
        userId: user.value,
        roomId: roomId.value,
        goods: [
          {
            name: "woodAccumulated",
            num: woodAccumulated.value,
            isAdd: true,
          },
        ],
      });
      store.commit("setIsWoodFunctionExecuted", true);
      console.log(store.getters.isWoodFunctionExecuted);
      console.log(user.value);
    };

    onMounted(async () => {
      roomId.value = route.params.room;
      socket.on("accumulateGoods", (data) => {
        woodAccumulated.value = data.result.woodAccumulated;
      });
    });

    onUnmounted(() => {
      store.commit("setIsWoodFunctionExecuted", false);
      socket.off("useActionSpace");
    });

    return {
      useForest,
      roomId,
      user,
      woodAccumulated,
    };
    //   const socket = io("localhost:3000");
    //   const store = useStore();
    //   const route = useRoute();

    //   const roomId = ref("");
    //   const user = computed(() => store.state.user);
    //   const woodAccumulated = ref("");
    //   const isWoodFunctionExcuted = ref(false);

    //   const useForest = () => {
    //     //if(turn 종료 후 )
    //     socket.emit("useActionSpace", {
    //       actionName: "getWood",
    //       userId: user.value,
    //       roomId: roomId.value,
    //       goods: [
    //         {
    //           name: "wood",
    //           num: woodAccumulated.value,
    //           isAdd: true,
    //         },
    //       ],
    //     });
    //     isWoodFunctionExcuted.value = true;
    //     console.log(isWoodFunctionExcuted.value);
    //   };

    //   onMounted(async () => {
    //     roomId.value = route.params.room;
    //     socket.on("accumulateGoods", (data) => {
    //       woodAccumulated.value = data.result.woodAccumulated;
    //     });
    //   });
    //   onUnmounted();
    //   return {
    //     useForest,
    //     roomId,
    //     user,
    //     woodAccumulated,
    //     isWoodFunctionExcuted,
    //   };
  },
};
</script>
