<template>
  <component :is="render"></component>
</template>

<script setup lang="ts">
import Com61 from './Com-6-1.vue'
import { h, ref } from 'vue'

defineOptions({
  name: 'Com6'
})

const msg = ref('hello!')

const print = (): void => {
  msg.value += '!'
  console.log('msg: ', msg.value)
}

// h(tag, props?, children?)
// tag：字符串标签名或组件对象
// props：属性对象，如 class、style、事件绑定
// children：子节点，可以是字符串、VNode 或 VNode 数组
// const render = () => h('div', { class: 'hi', style: { color: 'red' } }, msg.value)
// const render = () => h('div', h('button', { style: { color: 'blue' }, onClick: print }, msg.value))
const render = () =>
  h(Com61, null, {
    default: () => 'default slot',
    header: () => h('div', 'header slot')
  })
</script>
