<template>
  <h3>《组件: com-1》</h3>
  <div>{{ title }}</div>
  <div>{{ num }}</div>
  <input type="number" v-model="count" />
  <button @click="onclick">click</button>
  <button @click="oncheat">cheat</button>
</template>
<script>
export default {
  // 声明props
  props: { title: String, num: Number },

  // 声明emits
  // emits: ['change', 'cheat'],
  // 声明emits+事件校验（鸡肋）
  emits: {
    change(v) {
      if (v > 10) {
        return true
      } else {
        return false
      }
    },
    // 没有校验
    cheat: null
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    onclick() {
      // 触发事件change
      this.$emit('change', this.count)
    },
    oncheat() {
      // 触发事件cheat
      this.$emit('cheat', 'i am cheat.')
    }
  }
}
</script>
