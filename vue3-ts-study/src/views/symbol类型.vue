<template>
  <RouterTitle />
  <DocReferTo />
</template>
<script setup lang="ts">
// Symbol 是 ES2015 新引入的一种原始类型的值。它类似于字符串，但是每一个 Symbol 值都是独一无二的，与其他任何值都不相等。
// Symbol 值通过Symbol()函数生成。在 TypeScript 里面，Symbol 的类型使用symbol表示。
let sym1: symbol = Symbol()
let sym2: symbol = Symbol()
// console.log(sym1 === sym2) // false

// TypeScript 设计了symbol的一个子类型unique symbol，它表示单个的、某个具体的 Symbol 值。
// 因为unique symbol表示单个值，所以这个类型的变量是不能修改值的，只能用const命令声明，不能用let声明。
// unique symbol，其实是独一无二的值类型。

const usym1: unique symbol = Symbol() // 正确
// let usym2:unique symbol = Symbol();// 报错

/*
const x:unique symbol = Symbol();
// 等同于
const x = Symbol();
*/

//

const usym3: unique symbol = Symbol()
const usym4: typeof usym3 = usym3 // 正确
</script>
