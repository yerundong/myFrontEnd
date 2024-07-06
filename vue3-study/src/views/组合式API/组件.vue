<template>
  <div>
    <h1>选项式API-组件</h1>
    <h2>组件基础</h2>
    <Com1 title="i am title." :num="123" @change="console.log" @cheat="console.log" />
    <br />

    <h2>v-model修饰符</h2>
    <div>
      <input v-model.number.trim.lazy="num" />
      <{{ num }}> <{{ typeof num }}>
    </div>
    <br />

    <h2>多个 v-model 绑定</h2>
    <Com2 v-model="cvm" v-model:modelValue2="cvm2" />
    <br />

    <h2>自定义 v-model 修饰</h2>
    <Com3 v-model.toup="tvm" v-model:modelValue2.tonum="tvm2" />

    <h2>使用defineModel方式</h2>
    <Com4 v-model="hvm" v-model:modelValue2="hvm2" />

    <h2>透传 Attributes</h2>
    <Com5 class="xxx" style="font-family: serif" title="i am tc title" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Com1 from './components/Com-1.vue'
import Com2 from './components/Com-2.vue'
import Com3 from './components/Com-3.vue'
import Com4 from './components/Com-4.vue'
import Com5 from './components/Com-5.vue'
const num = ref(0),
  cvm = ref(''),
  cvm2 = ref(''),
  tvm = ref('a'),
  tvm2 = ref('2'),
  hvm = ref(''),
  hvm2 = ref(undefined)
</script>
