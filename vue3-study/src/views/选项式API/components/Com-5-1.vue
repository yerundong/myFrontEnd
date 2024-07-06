<template>
  <div>
    <h3>《组件: com-5-1》</h3>
    <div
      :style="{
        background: '#eee',
        padding: '10px 20px'
      }"
    >
      <i>my child: </i>
      <Com52 />
    </div>
  </div>
</template>
<script>
import Com52 from './Com-5-2.vue'

export default {
  components: {
    Com52
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
