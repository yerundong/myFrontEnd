<template>
  <div>
    <h1>组件</h1>
    <h2>组件基础</h2>
    <Comp1 title="i am title." :num="123" @change="console.log" @cheat="console.log" />
    <br />

    <h2>v-model修饰符</h2>
    <div>
      <input v-model.number.trim.lazy="num" />
      <{{ num }}> <{{ typeof num }}>
    </div>
    <br />

    <h2>多个 v-model 绑定</h2>
    <Comp2 v-model="cvm" v-model:modelValue2="cvm2" />
    <br />

    <h2>自定义 v-model 修饰</h2>
    <Comp3 v-model.toup="tvm" v-model:modelValue2.tonum="tvm2" />

    <h2>使用defineModel方式</h2>
    <Comp4 v-model="hvm" v-model:modelValue2="hvm2" />

    <h2>透传 Attributes</h2>
    <Comp5 class="xxx" style="font-family: serif" title="i am tc title" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Comp1 from '@/components/Comp1';
  import Comp2 from '@/components/Comp2';
  import Comp3 from '@/components/Comp3';
  import Comp4 from '@/components/Comp4';
  import Comp5 from '@/components/Comp5';
  const num = ref(0),
    cvm = ref(''),
    cvm2 = ref(''),
    tvm = ref('a'),
    tvm2 = ref('2'),
    hvm = ref(''),
    hvm2 = ref(undefined);
</script>
