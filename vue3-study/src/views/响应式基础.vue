<template>
  <div>
    <h3>common</h3>
    <p>num: {{ num }}</p>
    <p>info.foo: {{ info.foo }}</p>

    <h3>ref</h3>
    <p>ref_count: {{ ref_count }}</p>
    <p>ref_obj1.a is: {{ ref_obj1.a }}</p>
    <p>ref_obj2.a is: {{ ref_obj2.a }}</p>
    <p>ref_obj3.a is: {{ ref_obj3.a }}</p>

    <h3>reactive</h3>
    <p>rea_obj1.a.b is: {{ rea_obj1.a.b }}</p>

    <div><button @click="add">add</button></div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, watch, unref, toRaw, type Ref } from 'vue';

  const watchCsl = (filed: any, name: string, options?: object) => {
    watch(
      filed,
      (val) => {
        console.log(`*** ${name} change: `, val);
      },
      options
    );
  };

  /************* common ******************/
  // 在 Vue 3 的 <script setup> 中，存在一个 特殊机制：<script setup> 会把 顶层的普通变量当作 响应式绑定处理。
  // 也就是说，Vue 会帮你把顶层 let/const 变量包装成响应式（类似自动 ref），但【只对模板生效】
  let num = 0;
  const info = {
    foo: 100,
  };
  console.log('num: ', num);
  console.log('info: ', info);

  // 无法监听 ，watch的参数要求必须 Proxy/ref
  watchCsl(num, 'num');
  watchCsl(info, 'info');

  /************* ref ******************/
  /*
  ref 显式表明“这是一个响应式变量”，方便别人理解代码。
  包装类型可以是基础类型或对象
  不支持深层响应，只能再value那一层响应
  返回一个对象，访问要 .value
  底层实现原理：

  📌 什么时候用 ref
  ref 的特点：
  包装 基本类型 (number, string, boolean …)
  对象也可以放进去（内部会调用 reactive 包装），但是需要 .value 访问
  更适合 单值 或 需要整体替换 的数据
  */
  const ref_count = ref(0); // ref 创建一个 响应式引用，实际数据在 .value 上。
  const ref_amt = ref<number>(0); // 泛型的使用
  const ref_desc: Ref<string> = ref('说明'); // 泛型的使用
  const ref_obj1 = ref({
    a: 0,
  });
  const ref_obj2 = { a: ref(1) };
  let ref_obj3 = ref({
    a: 0,
  });
  console.log('ref_count: ', ref_count);
  console.log('ref_obj1: ', ref_obj1);
  console.log('ref_obj2: ', ref_obj2);
  console.log('ref_obj3: ', ref_obj3);

  watchCsl(ref_count, 'ref_count');
  // 监听不到，不支持深层响应
  watchCsl(ref_obj1, 'ref_obj1');
  // getter函数也监听不到
  watchCsl(() => ref_obj1, 'getter ref_obj1');
  // 加上deep后，就可以监听到
  watchCsl(ref_obj1, 'deep ref_obj1', { deep: true });

  // 深层属性监听，需要getter函数写法，才可以监听得到
  watchCsl(() => ref_obj1.value.a, 'getter ref_obj1.value.a');

  // 不会监听到
  watchCsl(ref_obj2, 'ref_obj2');

  // 整个变量替换也监听不到，必须在value里操作+deep
  watchCsl(ref_obj3, 'ref_obj3');

  /************* reactive ******************/
  /*
  reactive() 返回的是一个原始对象的 Proxy
  reactive 显式表明“这是一个响应式变量”，方便别人理解代码。
  包装类型可以只能是对象
  返回代理对象（Proxy），直接访问属性
  支持【深度响应式】，内部嵌套对象也会被代理。

  📌 什么时候用 reactive
  专门用来包装 对象 / 数组 / Map / Set 等复杂数据结构
  返回的就是 Proxy，可以直接访问属性，无需 .value
  深层响应式，适合管理多层数据
  */
  const rea_obj1 = reactive({
    count: ref_count,
    a: {
      b: 0,
    },
  });
  console.log('rea_obj1: ', rea_obj1);
  console.log('rea_obj1.count: ', rea_obj1.count); // reactive 包裹ref对象时，里面的 ref 会自动解包，访问不需要加value

  // 不需要加deep，就能深层监听
  watchCsl(rea_obj1, 'rea_obj1');
  // 深层属性监听，需要getter函数写法，才可以监听得到
  watchCsl(() => rea_obj1.a.b, 'getter rea_obj1.a.b');

  /************* 解包 ******************/

  // unref只能解包一层
  const unref_ref_count = unref(ref_count);
  const unref_ref_obj1 = unref(ref_obj1);
  const unref_ref_obj2 = unref(ref_obj2);
  const toRaw_rea_obj1 = toRaw(rea_obj1);

  console.log('unref_ref_count: ', unref_ref_count);
  console.log('unref_ref_obj1: ', unref_ref_obj1);
  console.log('unref_ref_obj2: ', unref_ref_obj2);
  console.log('toRaw_rea_obj1: ', toRaw_rea_obj1);

  const add = () => {
    num++;
    info.foo++;

    ref_count.value++;
    ref_obj1.value.a++;
    ref_obj2.a.value++;
    ref_obj3 = ref({ a: 666 });

    rea_obj1.a.b++;
  };
</script>
