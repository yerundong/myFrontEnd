<template>
  <div>
    <h1>组合式API-computed</h1>
    <button @click="increment(1)">add count1: {{ countObj.count1 }}</button>
    <button @click="increment(2)">add count2: {{ countObj.count2 }}</button>
    <div>{{ msg }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const countObj = ref({
  count1: 1,
  count2: 2
})
const increment = (k) => {
  countObj.value[`count${k}`]++
}
const msg = computed(() => {
  return `the sum is ${countObj.value.count1 + countObj.value.count2}`
})
</script>
