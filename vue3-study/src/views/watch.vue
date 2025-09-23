<template>
  <div>
    <h1>watch</h1>
    <button @click="increment1">add count1: {{ count1 }}</button>
    <div>{{ msg1 }}</div>
    <button @click="increment2">add count2: {{ count2.a[0].b }}</button>
    <div>{{ msg2 }}</div>
    <div>{{ msg3 }}</div>
    <button @click="increment3('a')">add count3.a: {{ count3.a }}</button>
    <button @click="increment3('b')">add count3.b: {{ count3.b }}</button>
    <div>{{ msg4 }}</div>
  </div>
</template>

<script setup>
  import { ref, watch, watchEffect } from 'vue';
  const count1 = ref(1);
  const count2 = ref({ a: [{ b: 2 }] });
  const count3 = ref({ a: 1, b: 2 });
  const msg1 = ref();
  const msg2 = ref();
  const msg3 = ref();
  const msg4 = ref();

  const increment1 = () => {
    count1.value++;
  };
  const increment2 = () => {
    count2.value.a[0].b++;
  };
  const increment3 = (v) => {
    count3.value[v]++;
  };

  // watch
  // 1.浅层侦听器
  watch(count1, (val) => {
    msg1.value = `i am ${val} years old, ${count1.value} indeed.`;
  });

  // 2.深层侦听器+即时回调的侦听器
  watch(
    count2,
    (val) => {
      msg2.value = `i am ${val.a[0].b} years old.`;
    },
    { deep: true, immediate: true }
  );

  // watchEffect
  // 1.监听多个数据变化
  watchEffect(() => {
    msg3.value = `we are ${count1.value + count2.value.a[0].b} years old total.`;
  });

  // 2.监听多个属性变化
  watchEffect(() => {
    msg4.value = `we get ${count3.value.a * count3.value.b} mul value.`;
  });

  // 监听props，详见：组合式API\components\comp3
</script>
