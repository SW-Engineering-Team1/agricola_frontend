<!--  BasicAction9 갈대밭 행동칸 -->
<template>
  <div>
    <img
      src="@/assets/images/Action/9_ReedField.jpg"
      @click="handleClick(isMyTurn)"
      :class="{'w-full cursor-pointer transform transition duration-500 ease-in-out hover:scale-110': true, 'pointer-events-none': !isMyTurn}"
      alt="ReedField"
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
    const reedAccumulated = ref(computed(() => store.state.accumulatedResources.reedAccumulated));

    const useReedField = () => {
      socket.emit("useActionSpace", {
        actionName: "Use Accumulated Goods",
        userId: user.value,
        roomId: roomId.value,
        goods: [
          {
            name: "reedAccumulated",
            num: reedAccumulated.value,
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
        useReedField();
      }
    }

    return {
      handleClick,
    };
  },
};
</script>
