<template>
  <div>
    <h3>《组件: comp3》</h3>
    modelValue:<input v-model="vm" @change="change1" />
    <br />
    modelValue2:<input v-model="vm2" @change="change2" />
  </div>
</template>
<script>
export default {
  // 声明props
  props: {
    modelValue: String,
    modelValue2: String,
    modelModifiers: null,
    modelValue2Modifiers: null
  },
  // 声明emits
  emits: ['update:modelValue', 'update:modelValue2'],
  data() {
    return {
      vm: '',
      vm2: ''
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(v) {
        this.vm = v
      }
    },
    modelValue2: {
      immediate: true,
      handler(v) {
        this.vm2 = v
      }
    }
  },
  created() {
    console.log('this.modelModifiers: ', this.modelModifiers)
    console.log('this.modelValue2Modifiers: ', this.modelValue2Modifiers)
  },
  methods: {
    change1() {
      let v
      if (this.modelModifiers?.toup) {
        v = this.vm.toLocaleUpperCase()
      } else {
        v = this.vm
      }
      this.$emit('update:modelValue', v)
    },
    change2() {
      let v
      if (this.modelValue2Modifiers?.tonum) {
        v = new Number(this.vm2).toString()
      } else {
        v = this.vm2
      }
      this.$emit('update:modelValue2', v)
    }
  }
}
</script>
