<template>
  <transition>
    <div v-if="show" class="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg flex items-center justify-center"
      style="width: 300px; height: 100px;">
      <div class="relative">
        <h4 class="top-0">빵을 구우시겠습니까?</h4>
        <button class="absolute left-0 h-8 w-16 bg-blue-500 text-white rounded float-right" @click="bakeBread">예</button>
        <button class="absolute right-0 h-8 w-16 bg-blue-500 text-white rounded float-right" @click="closeModal">아니오</button>
      </div>
    </div>
  </transition>
</template>
<script>
import { computed, onMounted, ref } from "vue";
import { io } from "socket.io-client";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  // methods: {
  //   closeModal() {
  //     this.$emit('close');
  //   },
  // },
  setup(props, context){
    const socket = io("localhost:3000");
    const store = useStore();
    const route = useRoute();

    const roomId = ref("");
    const user = computed(() => store.state.user);

    const bakeBread = () => {
      socket.emit("useActionSpace",{
        "actionName":"Bake Bread",
        "userId": user.value,
        "roomId": roomId.value,
        "goods":[
          {
            "name":"grain",
            "num":1,
            "isAdd":false
          }
        ]
      });
      closeModal()
    }
    const closeModal = () => {
      context.emit("close");
    }
    onMounted(async () => {
      roomId.value = route.params.room;
    });
    return{
      roomId,
      user,
      bakeBread,
      closeModal
    }
  }
}
</script>
<style scoped>
img {
  max-width: 80vw;
  max-height: 80vh;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>