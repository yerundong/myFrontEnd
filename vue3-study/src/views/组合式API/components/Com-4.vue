<template>
  <h3>《组件: com-4》</h3>
  <div>modelValue: {{ modelValue }}</div>
  <div>modelValue2: {{ modelValue2 }}</div>
  <button @click="onclick">add</button>
</template>
<script setup>
// 声明props
const modelValue = defineModel()
const modelValue2 = defineModel('modelValue2', { required: true, default: 2 })

const onclick = () => {
  // 触发事件change
  modelValue.value += 1
  modelValue2.value += ' rose!'
}
</script>
