<template>
  <div>
    <h3>《组件: comp5》</h3>
    <div
      :style="{
        background: '#eee',
        padding: '10px 20px'
      }"
    >
      <i>my child: </i>
      <Comp51 />
    </div>
  </div>
</template>
<script>
import Comp51 from './Comp51'

export default {
  components: {
    Comp51
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
