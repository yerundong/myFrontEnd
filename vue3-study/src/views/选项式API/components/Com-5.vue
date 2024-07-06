<template>
  <div>
    <h3>《组件: com-5》</h3>
    <div
      :style="{
        background: '#eee',
        padding: '10px 20px'
      }"
    >
      <i>my child: </i>
      <Com51 />
    </div>
  </div>
</template>
<script>
import Com51 from './Com-5-1.vue'

export default {
  components: {
    Com51
  },
  props: {},
  data() {
    return {}
  },
  watch: {},
  created() {
    // console.log('$attrs', this.$attrs)
  },
  methods: {}
}
</script>
