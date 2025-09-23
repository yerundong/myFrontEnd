<!--  
defineComponent 是什么？

它是 Vue3 提供的一个 辅助函数。

作用：给 TypeScript 提供更好的类型推导，让 props / emits / slots 在 IDE 中有智能提示。

运行时，它其实什么也没做，就是原样返回你的对象。

一定要用吗？

不一定要用。

如果你写的是 TS/TSX：
强烈建议用 defineComponent，否则 TypeScript 无法正确识别 props 和 emits 类型

4. 总结

纯 JS 项目 → 可以不用 defineComponent。

TS/TSX 项目 → 推荐用 defineComponent，不然失去类型推导。

它不会改变运行时逻辑，只是辅助类型和 IDE 提示。
-->

<template>
  <div>
    <innerComp name="loop" />
    <Comp70 name="foo" />
    <Comp71 name="bar" />
    <Comp72 name="tite" :user="user" />
  </div>
</template>

<script setup lang="ts">
  import { ref, defineComponent, h, type PropType } from 'vue';
  import Comp70 from '@/components/Comp70';
  import Comp71 from '@/components/Comp71';
  import Comp72 from '@/components/Comp72';

  // 定义内部组件用法
  const InnerComp = defineComponent({
    props: {
      name: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const count = ref<number>(0);
      const add = () => {
        count.value++;
      };
      const get = (p: number): string => {
        const res = props.name + count.value + p;
        console.log('res: ', res);
        return res;
      };
      return () =>
        h('div', [
          h('h3', '《组件: InnerComp》'),
          h('span', `${props.name}: ${count.value}`),
          h('br'),
          h(
            'button',
            {
              onClick: add,
            },
            'add'
          ),
          h(
            'button',
            {
              onClick: () => get(Math.random()),
            },
            'get'
          ),
        ]);
    },
  });

  const user = ref({ id: 2342342, name: 'xxx', role: 'admin' as const });
</script>
