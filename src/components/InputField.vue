<template>
  <input
    :type="type"
    :value="modelValue"
    @input="updateValue($event.target.value)"
    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'InputField',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    }
  }
};
</script>