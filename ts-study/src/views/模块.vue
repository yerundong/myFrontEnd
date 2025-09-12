<template>
  <RouterTitle />
  <DocReferTo />
</template>
<script setup lang="ts">
// TypeScript 模块除了支持所有 ES 模块的语法，特别之处在于允许输出和输入类型。
// import { type T1, type T2, type T3 } from '@/types/foo' // ok
import type { T1, T2, T3 } from '@/types/foo' // ok
import type * as Ts from '@/types/foo' // ok
const foo1: T1 = 'abc'
const foo2: T2 = 123
const foo3: T3 = false
const foo4: Ts.T4 = (x) => false
const foo5: Ts.T5 = {
  a: '',
  c: false
}
const foo6: Ts.T6 = {
  a: '123',
  c: false,
  fn: (x) => true
}
const foo7: Ts.T7 = (x, y) => x + y
</script>
