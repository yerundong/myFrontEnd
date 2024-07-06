<template>
  <!-- 默认透传会把属性继承给第一个元素（原生标签或组件标签都支持） -->
  <div class="com-5" style="font-weight: bold">
    <h3>《组件: com-5》</h3>
    <div
      :style="{
        background: '#eee',
        padding: '10px 20px'
      }"
    >
      <i>my child: </i>
      <!-- 还可以通过$attrs来手动继承 -->
      <Com1 v-bind="$attrs" />
    </div>
  </div>
</template>
<script setup>
import Com1 from '../../选项式API/components/Com-1.vue'
import { useAttrs } from 'vue'

// 禁用 Attributes 继承
// defineOptions({
//   inheritAttrs: false
// })
const $attrs = useAttrs()
console.log('$attrs', $attrs)
</script>
