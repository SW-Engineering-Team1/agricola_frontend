<template>
  <div class="relative">
    <img
      src="@/assets/images/Action/1_FarmExpand.jpg"
      @click="handleClick(isMyTurn)"
      :class="{'w-full cursor-pointer transform transition duration-500 ease-in-out hover:scale-110': true, 'pointer-events-none': !isMyTurn}"
      alt="farmExpand"
    />
    <img
      v-if="showImage"
      src="@/assets/images/Etc/Player1.png"
      alt="Player1 Image"
      class="overlay absolute inset-0 w-full h-full"
    />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { io } from "socket.io-client";
import { useStore } from "vuex";

export default {
  props: {
    isMyTurn: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      showImage: false,
    };
  },
  methods: {
    handleClick(isMyTurn) {
      if (isMyTurn) {
        this.showImage = !this.showImage;
        this.useFarmExpand();
      }
    },
    useFarmExpand() {
      const socket = io("localhost:3000");
      const store = useStore();

      const roomId = ref("");
      const user = computed(() => store.state.user);
      console.log(user);

      socket.emit("useActionSpace", {
        actionName: "else", // TODO: 수정 필요
        userId: user.value,
        roomId: roomId.value,
        goods: [
          {
            name: "wood",
            num: 10,
            isAdd: false,
          },
          {
            name: "reed",
            num: 4,
            isAdd: false,
          },
          {
            name: "woodHouse",
            num: 2,
            isAdd: true,
          },
        ],
      });
    },
  },
};
</script>
