<template>
  <RouterTitle />
  <br />
  <b>
    本套工程是作为学习TypeScript练习之用，配合<a
      href="https://wangdoc.com/typescript/"
      target="_blank"
      >阮一峰《TypeScript教程》</a
    >使用。
  </b>
</template>
<script setup lang="ts">
// *Array 类型
// 错误用法
// let arr1: array = [1]

// 正确用法一
let arr1: number[] = [1]
// console.log(arr1)

// 正确用法二: 使用数组泛型，Array<元素类型>
let arr2: Array<number> = [1, 2, 3]
// console.log(arr2)

// *元组 Tuple
let tuple1: [number, string] = [1, '123']
let tuple2: [number, ...Array<string>] = [1, '123', '2', '3']
let tuple3: [number, ...Array<any>] = [1, '123', '2', null, true]
// console.log(tuple1)
// console.log(tuple2)
// console.log(tuple3)

// *对象 Object
let obj1: Object = {
  a: 1,
  b: ''
}
// let obj2: object<string, number> = {
//   a: 1,
//   b: 2
// }
// console.log(obj1)

// Enum 类型
</script>
