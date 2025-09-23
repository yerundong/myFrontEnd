<template>
  <h3>《组件: comp2》</h3>
  <div>modelValue: {{ modelValue }}</div>
  <div>modelValue2: {{ modelValue2 }}</div>
  <button @click="onclick">add</button>
</template>
<script setup>
// 声明props
const props = defineProps({
  modelValue: String,
  modelValue2: String
})
// 声明emits
const emits = defineEmits(['update:modelValue', 'update:modelValue2'])

const onclick = () => {
  // 触发事件change
  emits('update:modelValue', props.modelValue + 1)
  emits('update:modelValue2', props.modelValue2 + ' rose!')
}
</script>
