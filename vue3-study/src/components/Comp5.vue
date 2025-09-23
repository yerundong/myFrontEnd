<template>
  <!-- 默认透传会把属性继承给第一个元素（原生标签或组件标签都支持） -->
  <div class="comp5" style="font-weight: bold">
    <h3>《组件: comp5》</h3>
    <div
      :style="{
        background: '#eee',
        padding: '10px 20px'
      }"
    >
      <i>my child: </i>
      <!-- 还可以通过$attrs来手动继承 -->
      <Comp1 v-bind="$attrs" />
    </div>
  </div>
</template>
<script setup>
import Comp1 from './选项式/Comp1'
import { useAttrs } from 'vue'

// 禁用 Attributes 继承
// defineOptions({
//   inheritAttrs: false
// })
const $attrs = useAttrs()
console.log('$attrs', $attrs)
</script>
