<template>
  <div>
    <h1>组件-选项式</h1>

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
    <Comp2 v-model:aaa="cvm" />
    {{ cvm }}
    <br />

    <h2>自定义 v-model 修饰</h2>
    <Comp3 v-model.toup="tvm" v-model:modelValue2.tonum="tvm2" />

    <h2>透传 Attributes</h2>
    <Comp4 class="xxx" style="font-family: serif" title="i am tc title" />

    <h2>
      依赖注入
      <button @click="add">add</button>
    </h2>
    <div>foo: {{ foo }}</div>
    <div>bar: {{ bar }}</div>
    <Comp50 />
  </div>
</template>

<script>
  import Comp1 from '@/components/选项式/Comp1';
  import Comp2 from '@/components/选项式/Comp2';
  import Comp3 from '@/components/选项式/Comp3';
  import Comp4 from '@/components/选项式/Comp4';
  import Comp50 from '@/components/选项式/Comp50';
  import { computed } from 'vue';
  export default {
    components: {
      Comp1,
      Comp2,
      Comp3,
      Comp4,
      Comp50,
    },
    data() {
      return {
        num: 0,
        cvm: '',
        cvm2: '',
        tvm: 'a',
        tvm2: '2',
        foo: 'i am foo!',
        bar: 'i am bar!',
      };
    },
    provide() {
      // 使用函数的形式，可以访问到 `this`
      return {
        foo: this.foo,
        bar: this.bar,
        foo_comp: computed(() => this.foo),
        bar_comp: computed(() => this.bar),
      };
    },
    methods: {
      add() {
        this.foo += ' hello!';
        this.bar += ' hi!';
      },
    },
  };
</script>
