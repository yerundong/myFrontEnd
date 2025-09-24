<template>
  <div>
    <h3>《组件: Comp70》</h3>
    {{ name }}: {{ count }}
    <br />
    <button @click="add">add</button>
    <button @click="get(Math.random())">get</button>
  </div>
</template>

<script lang="ts">
  // 普通写法
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      name: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        count: 1,
      };
    },
    methods: {
      add() {
        this.count++;
      },
      get(p: number): string {
        // 这样写, this.name\this.count的类型推导无效
        const res = this.name + this.count + p;
        console.log('res: ', res);
        return res;
      },
    },
  });
</script>
