<template>
  <div>
    <h3>《组件: Comp71》</h3>
    {{ name }}: {{ count }}
    <br />
    <button @click="add">add</button>
    <button @click="get(Math.random())">get</button>
  </div>
</template>

<script lang="ts">
// defineComponent一定要配合setup使用, 否则无意义
import { ref } from 'vue'
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const count = ref(0)
    const add = () => {
      count.value++
    }
    const get = (p: number): string => {
      // 这样写, this.name\this.count的类型推导有效
      const res = props.name + count.value + p
      console.log('res: ', res)
      return res
    }
    return {
      count,
      add,
      get
    }
  }
})
</script>
