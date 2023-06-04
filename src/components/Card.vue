<template>
  <div class="card">
    <h3>{{ cardTitle }}</h3>
    <p>{{ cardDescription }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardTitle: {
      type: String,
      required: true
    },
    cardDescription: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
}
</style>