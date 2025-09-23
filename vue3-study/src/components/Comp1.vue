<template>
  <h3>《组件: comp1》</h3>
  <div>{{ title }}</div>
  <div>{{ num }}</div>
  <button @click="onclick">click</button>
  <button @click="oncheat">cheat</button>
</template>
<script setup>
// 声明props
const props = defineProps({
  title: String,
  num: Number
})
console.log(props.title)

// 声明emits
const emits = defineEmits(['change', 'cheat'])

const onclick = () => {
  // 触发事件change
  emits('change', 'i am change.')
}
const oncheat = () => {
  // 触发事件cheat
  emits('cheat', 'i am cheat.')
}
</script>
