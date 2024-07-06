<template>
  <div>
    <h1>组合式API-模板引用</h1>
    <input ref="myinput" />
    <input :ref="func" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 1.访问模板引用
// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const myinput = ref()

// 注意，你只可以在组件挂载后才能访问模板引用。
onMounted(() => {
  myinput.value.focus()
})

// 2.函数模板引用
// 除了使用字符串值作名字，ref attribute 还可以绑定为一个函数，会在每次组件更新时都被调用。该函数会收到元素引用作为其第一个参数：
const func = (a) => {
  console.dir(a)
}
</script>
