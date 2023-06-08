<template>
  <P1JobCardModalVue></P1JobCardModalVue>
  <P2JobCardModalVue></P2JobCardModalVue>
</template>
<script>
import P1JobCardModalVue from "../P1JobCardModal.vue";
import P2JobCardModalVue from "../P2JobCardModal.vue";

import { computed, onMounted, onUnmounted, ref } from "vue";
import { io } from "socket.io-client";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  components: {
    P1JobCardModalVue,
    P2JobCardModalVue,
  },

  setup() {
    const socket = io("localhost:3000");
    const store = useStore();
    const route = useRoute();

    const roomId = ref("");
    const user = computed(() => store.state.user);
  },
};
</script>
