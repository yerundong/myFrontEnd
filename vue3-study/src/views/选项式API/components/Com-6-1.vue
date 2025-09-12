<script>
import { h } from 'vue'

export default {
  name: 'Com61',
  data() {
    return {}
  },
  methods: {},
  render() {
    return h('div', { style: { color: 'red' } }, [
      'I am Com61',
      this.$slots.header ? this.$slots.header() : null,
      this.$slots.default ? this.$slots.default() : null
    ])
  }
}
</script>
