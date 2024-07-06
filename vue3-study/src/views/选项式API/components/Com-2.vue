<template>
  <h3>《组件: com-1》</h3>
  <div>modelValue: {{ modelValue }}</div>
  <div>modelValue2: {{ modelValue2 }}</div>
  <button @click="onclick">add</button>
</template>
<script>
export default {
  // 声明props
  props: {
    modelValue: String,
    modelValue2: String
  },
  // 声明emits
  emits: ['update:modelValue', 'update:modelValue2'],
  data() {
    return {}
  },
  created() {},
  methods: {
    onclick() {
      // 触发事件change
      this.$emit('update:modelValue', this.modelValue + 1)
      this.$emit('update:modelValue2', this.modelValue2 + ' rose!')
    }
  }
}
</script>
