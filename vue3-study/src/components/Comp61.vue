<script lang="ts">
import { h } from 'vue'

export default {
  name: 'Com61',
  setup(_, { slots }) {
    return () =>
      h('div', { style: { color: 'red' } }, [
        'I am Com61',
        slots.header ? slots.header() : null,
        slots.default ? slots.default() : null
      ])
  }
}
</script>