<template>
  <div>
    <h3>《组件: comp5-1》</h3>
    <div
      :style="{
        background: '#eee',
        padding: '10px 20px'
      }"
    >
      <i>my child: </i>
      <Comp52 />
    </div>
  </div>
</template>
<script>
import Comp52 from './Comp52'

export default {
  components: {
    Comp52
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
