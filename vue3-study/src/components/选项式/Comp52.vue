<template>
  <div>
    <h3>《组件: comp5-2》</h3>
    <div
      :style="{
        background: '#eee',
        padding: '10px 20px'
      }"
    >
      <div>foo: {{ foo }}</div>
      <div>bar: {{ bar }}</div>
      <div>foo_comp: {{ foo_comp }}</div>
      <div>bar_comp: {{ bar_comp }}</div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['foo', 'bar', 'foo_comp', 'bar_comp'],
  data() {
    return {}
  },
  watch: {},
  created() {},
  methods: {}
}
</script>
