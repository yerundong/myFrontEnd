<template>
  <div>
    <button @click="increment">Count is: {{ count }}</button>
    <button @click="setObj1">obj1.a is: {{ obj1.a }}</button>
    <button @click="setObj2">obj2.a is: {{ obj2.a }}</button>
    <button @click="setObj3">obj3.a is: {{ obj3.a }}</button>
    <button @click="setObj4">obj4.a is: {{ obj4.a }}</button>
  </div>
</template>

<script setup>
import { ref, reactive, onUpdated, onMounted } from 'vue'
console.log(ref)
console.log(onMounted)

// 响应式状态
// 简单类型
const count = ref(0)
// 对象类型数据1
const obj1 = ref({
  a: 0
})
console.log('obj1: ', obj1)

// 对象类型数据2
const obj2 = reactive({
  a: 0
})
console.log('obj2: ', obj2)

const obj3 = { a: ref(1) }

const obj4 = { a: count }

// 用来修改状态、触发更新的函数
const increment = () => {
  count.value++
}

const setObj1 = () => {
  obj1.value.a++
}
const setObj2 = () => {
  obj2.a++
}

const setObj3 = () => {
  obj3.a.value++
}

const setObj4 = () => {
  obj4.a.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
onUpdated(() => {
  console.log(`onUpdated`)
})
</script>
