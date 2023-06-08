<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg px-10 py-5 m-4 w-3/4 h-auto">
      <h2 class="text-2xl font-bold mb-5 text-center">사용하지 않은 {{ cardType }} 카드</h2>

      <div class="grid grid-cols-5 grid-rows-2 gap-2">
        <!--  TODO: 카드 사용 기능 추가  -->
        <div v-for="(item, index) in cards" :key="index" class="flex flex-col items-center">
          <img :src="item.image" :alt="item.name" class="w-full object-cover">
          <span class="mt-2 text-center">{{ item.name_kr }}</span>
        </div>
      </div>

      <button class="mt-4 px-3 py-2 bg-blue-500 text-white rounded float-right" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    cards: {
      type: Object,
      required: true
    },
    cardType: {
      type: String,
      required: true
    },
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  },
}
</script>