<template>
  <div>
    <h3>《组件: comp3》</h3>
    modelValue:<input v-model="vm" @change="change1" />
    <br />
    modelValue2:<input v-model="vm2" @change="change2" />
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
// 声明props
const props = defineProps({
  modelValue: String,
  modelValue2: String,
  modelModifiers: null,
  modelValue2Modifiers: null
})

// 声明emits
const emits = defineEmits(['update:modelValue', 'update:modelValue2'])

const vm = ref(''),
  vm2 = ref('')

watch(
  () => props.modelValue,
  (v) => {
    vm.value = v
  },
  { immediate: true }
)
watch(
  () => props.modelValue2,
  (v) => {
    vm2.value = v
  },
  { immediate: true }
)
console.log('props.modelModifiers: ', props.modelModifiers)
console.log('props.modelValue2Modifiers: ', props.modelValue2Modifiers)

const change1 = () => {
  let v
  if (props.modelModifiers?.toup) {
    v = vm.value.toLocaleUpperCase()
  } else {
    v = vm.value
  }
  emits('update:modelValue', v)
}

const change2 = () => {
  let v
  if (props.modelValue2Modifiers?.tonum) {
    v = new Number(vm2.value).toString()
  } else {
    v = vm2.value
  }
  emits('update:modelValue2', v)
}
</script>
