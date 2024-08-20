<template>
  <RouterTitle />
  <DocReferTo />
</template>
<script setup lang="ts">
import { isLikeNum } from 'slitu'
type T = 'a' | 'b' | 'c'
let a = 'a'
const t1: T = 'a' // ok
// const t2: T = a // error, 父类型不能赋值给子类型

const t2: T = a as T // ok，利用断言可以缩小类型

// 类型断言有两种语法。
// 早期只有语法一，后来因为 TypeScript 开始支持 React 的 JSX 语法（尖括号表示 HTML 元素），为了避免两者冲突，就引入了语法二。
// 目前，推荐使用语法二。

// 语法一：<类型>值。
// let t3: T = <T>a

// 语法二：值 as 类型
// value as Type

// const p: { x: number } = { x: 0, y: 0 }// error
const p0: { x: number } = { x: 0, y: 0 } as { x: number } // 正确, 断言成子类型
const p1: { x: number } = { x: 0, y: 0 } as { x: number; y: number } // 正确, 断言成值类型
const p2: { x: number } = { x: 0, y: 0 } as { x: number; y: number; z: number } // 正确, 断言成父类型
// console.log(p0)
// console.log(p1)

type O = {
  fn(x: number): number
}
const obj = {}
// obj?.fn?.(1) // error
;(obj as O)?.fn?.(1) // ok

// 类型断言不应滥用，因为它改变了 TypeScript 的类型检查，很可能埋下错误的隐患。

// 类型断言并不意味着，可以把某个值断言为任意类型。
// 类型断言要求实际的类型与断言的类型兼容，实际类型可以断言为一个更加宽泛的类型（父类型），也可以断言为一个更加精确的类型（子类型），
// 但不能断言为一个完全无关的类型。
// const n = 1
// const m: string = n as string // 报错

// 但是，如果真的要断言成一个完全无关的类型，也是可以做到的。
// 那就是连续进行两次类型断言，先断言成 unknown 类型或 any 类型，然后再断言为目标类型。
// 因为any类型和unknown类型是所有其他类型的父类型，所以可以作为两种完全无关的类型的中介。
const n = 1
const m: string = n as any as string
// console.log(m)

// as const可以将这个值推断为值类型
let s1 = 'b' // 推断为string类型
let s2: 'b' = 'b' // 推断为值类型
let s3 = 'b' as const // 推断为值类型

const fn2 = (s: 'a' | 'b' | 'c') => {}
// fn2(s1) // error
fn2(s2) // ok
fn2(s3) // ok

let h1 = 'a' as const
// h1 = 'b'// error, 使用了as const断言以后，let 变量就不能再改变值了。

const r1 = [1, 2, 3] // 数组
const r2 = [1, 2, 3] as const // 只读数组
const r3: readonly number[] = [1, 2, 3] // 只读数组
r1[2] = 2 // ok
// r2[2] = 1// error
// r3[2] = 1// error

// 非空断言
// 对于那些可能为空的变量（即可能等于undefined或null），TypeScript 提供了非空断言，保证这些变量不会为空，写法是在变量名后面加上感叹号!
const f1 = (x?: number | null) => {
  if (isLikeNum(x)) {
    return x! * 2
  }
}
// console.log(f1(123))

// 断言函数
// 断言函数的asserts语句等同于void类型，所以如果返回除了undefined和null以外的值，都会报错。
const assertIsNumber = (value: unknown): asserts value is number => {
  if (typeof value !== 'number') throw Error('Not a number')
}
// assertIsNumber('asd')// error
</script>
