<template>
  <RouterTitle />
  <DocReferTo />
</template>
<script setup lang="ts">
// 单独使用的模块，一般会同时提供一个单独的类型声明文件（declaration file），
// 把本模块的外部接口的所有类型都写在这个文件里面，便于模块使用者了解接口，也便于编译器检查使用者的用法是否正确。
// 类型声明文件里面只有类型代码，没有具体的代码实现。

// .ts 文件与 .d.ts 文件介绍：
// .ts 文件，既包含类型信息又包含可执行代码。可以被编译成 .js 文件。
// .d.ts 文件，只包含类型信息的类型声明文件。不会生成 .js 文件，仅用于提供类型信息。
// .ts 是 implementation（代码实现文件）。.d.ts 是 declaration（类型声明文件）。

// .d.ts 文件中的顶级声明必须以 "declare" 或 "export" 修饰符开头。否则会抛出错误
// .d.ts 文件中有两种用法：declare 和 export，一个.d.ts 文件中只能使用一种用法

// 一、declare用法【参考 @/types/bee.d.ts 文件】
// .d.ts 文件中定义的类型和接口，可以在全局访问

const num1: BEET0 = 123
const str1: BEET1 = 'hi'
const obj1: BEET2 = {
  x: 123
}

// console.log(BEEV1) // error
// console.log(BEEColor.red)// error
const obj2: BEET3 = {
  x: '123'
}

// 与 .ts 的 declare module 不同的是，.d.ts的 declare module 会把模块原输出的类型清除，只保留 .d.ts 里输出的
// import { T1, T2 } from '@/types/shy' // 取不到 T1, T2
import { BEET4 } from '@/types/shy'
const str2: BEET4 = 'i am BEET4'

// 二、export用法【参考 @/types/tea.d.ts 文件】
// const epvar0: TEAT1 = 123 // error，export用法并非全局，必须手动引入
import { type TEAT1, type TEAT2, type TEAT3, TEAV1, TEAT4, TEAT5 } from '@/types/tea.d'
const epvar1: TEAT1 = 123
const epvar2: TEAT2 = {
  x: 123
}
const epvar3: TEAT3 = {
  x: 'x',
  y: 'y'
}
// console.log(TEAV1) // ok

const epvar4: TEAT4 = 'ump'
const epvar5: TEAT5 = false
</script>
