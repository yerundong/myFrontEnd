<template>
  <RouterTitle />
  <DocReferTo />
</template>
<script setup lang="ts">
// -------------------------- declare --------------------------
// declare 关键字用来告诉编译器，某个类型是存在的，可以在当前文件中使用。
// declare 关键字的重要特点是，它只是通知编译器某个类型是存在的，不用给出具体实现。
// declare是描述TS文件之外信息的一种机制，它的作用是告诉TS某个类型或变量已经存在
// 这对于当你需要为现有的 JavaScript 库或模块提供类型信息时非常有用，尤其是对于没有提供自己的类型声明的第三方库。

// declare 关键字可以描述以下类型:
// 变量（const、let、var 命令声明）
// type 或者 interface 命令声明的类型
// class
// enum
// 函数（function）
// 模块（module）
// 命名空间（namespace）

// 如果foo1是外部声明的变量，而编译器不知道已经声明了，就会报错，这时就可以使用declare
declare let foo1: number
declare const foo2: number
// console.log(foo1)

// 注意，declare 关键字只用来给出类型描述，是纯的类型代码，不允许设置变量的初始值，即不能涉及值。
// declare let foo2: number = 2 // 报错

declare function fn1(x: number): number
declare let fn2: (x: number) => number

declare class Cla1 {
  constructor(x: number)
  eat(x: number): number
}

declare enum en1 {
  Red = 1,
  Blue = 2
}

declare type T1 = number

// declare 关键字除了可以声明全局类型之外，它还可以用来声明全局函数、全局类或全局枚举类型等
// 例如：
declare const Math: {
  abs(x: number): number
}
// Math.PI // error

// 例如：
// 声明jquery的$方法，不然直接使用会报错
declare const $: (e?: string, t?: string) => object
// console.log($)
// console.log($())
// console.log($('div'))

// -------------------------- declare module --------------------------
// 通过 declare module，你可以定义一个模块的结构和该模块导出的类型。这样，TypeScript 编译器就可以知道如何处理模块的导入和使用，
// 即使这个模块实际上是用 JavaScript 写的。???
// declare module 在 TypeScript 中提供了一种强大的机制，以确保即使是非 TypeScript 的库也能在 TypeScript 项目中平滑地集成和使用。
// declare module 只能扩充现有对象的类型描述，不能增加新的顶层类型。

// declare module 用法【参考 @/types/hey.ts 文件】
import { type T2, type T7, type COLOR2, color2 } from '@/types/foo'
const color: COLOR2 = 123
const dmnum1: T7 = {
  add: 123,
  f(x, y) {
    return x + y
  }
}

// -------------------------- declare global --------------------------
// declare global 是给最顶层的对象添加类型或变量的声明
// 如果要为 JavaScript 引擎的原生对象添加属性和方法，可以使用 declare global {}语法。
// declare global 只能扩充现有顶层对象下的类型，也可以增加新的全局类型，但不能添加新的顶层对象的类型。
// declare global 用法【参考 @/types/hot.ts 文件】
String.prototype.doyou = (x) => x
String.prototype.hopy = 123345
const dgstr1 = ''
// console.log('doyou', dgstr1.doyou('123'))

const dgvar1: Newh1 = 123
const dgvar2: Newh2 = {
  x: 123
}

Window.prototype.yyy = 888 // ok
console.log(window.yyy)

// window.prototype.xxx = 456 // error
</script>
