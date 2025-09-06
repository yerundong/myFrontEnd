<template>
  <div>
    <h1>组合式API-setup</h1>
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {
    // 响应式状态
    const count = ref(0)
    const increment = () => {
      count.value++
    }

    // 生命周期钩子
    onMounted(() => {
      console.log(`onMounted`)
      console.log(count)
    })

    // 必须return才可以
    return {
      count,
      increment
    }
  }
}
</script>
