<!-- Action7 숲 행동칸 -->
<template>
  <div>
    <img
      src="@/assets/images/Action/7_Forest.jpg"
      @click="handleClick(isMyTurn)"
      :class="{'w-full cursor-pointer transform transition duration-500 ease-in-out hover:scale-110': true, 'pointer-events-none': !isMyTurn}"
      alt="forest"
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
    const woodAccumulated = ref(computed(() => store.state.accumulatedResources.woodAccumulated));

    const useForest = () => {
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
    };

    onMounted(async () => {
      roomId.value = route.params.room;
    });

    const handleClick = (isMyTurn) => {
      if (isMyTurn) {
        useForest();
      }
    }

    return {
      handleClick,
    };
  },
};
</script>
