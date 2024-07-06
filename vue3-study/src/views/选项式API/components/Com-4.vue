<template>
  <!-- 默认透传会把属性继承给第一个元素（原生标签或组件标签都支持） -->
  <div class="com-4" style="font-weight: bold">
    <h3>《组件: com-4》</h3>
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
<script>
import Com1 from './Com-1.vue'
export default {
  components: {
    Com1
  },
  // 禁用 Attributes 继承
  // inheritAttrs: false,
  props: {},
  data() {
    return {}
  },
  watch: {},
  created() {
    console.log('$attrs', this.$attrs)
  },
  methods: {}
}
</script>
