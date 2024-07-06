<template>
  <RouterTitle />
  <DocReferTo />
</template>
<script setup lang="ts">
// 元组（tuple）是 TypeScript 特有的数据类型，JavaScript 没有单独区分这种类型。它表示成员类型可以自由设置的数组，即数组的各个成员的类型可以不同。
// 由于成员的类型可以不一样，所以元组必须明确声明每个成员的类型。
// 类型、个数、顺序都不能错
let tup1: [number, string, boolean] = [1, 'b', true]
tup1 = [2, 'a', false]
tup1[0] = 3
// tup1 = [2, '', false, '']// 报错

// 元组成员的类型可以添加问号后缀（?），表示该成员是可选的。

let tup2: [number, string?] = [1, 'b']
tup2 = [2]
// let tup3: [number?, string] = [1, 'b'] // 必选元素不能位于可选元素后。

// 使用扩展运算符（...），可以表示不限成员数量的元组。
let tup4: [number, ...string[]] = [1, 'b']
tup4 = [1, 'b', 'b', 'b', 'b', 'b']

// 元组的成员可以添加成员名，这个成员名是说明性的，可以任意取名，没有实际作用。
type TyTup1 = [num: number, color: string, isFinish: boolean]
let tup5: TyTup1 = [2, 'red', true]
const fun1 = (foo: TyTup1) => {
  console.log(foo)
}
fun1(tup5)

// 由于元组的成员都是数值索引，即索引类型都是number，所以可以像下面这样读取。
type TyTup2 = [string, number, Date]
type TyStr = TyTup2[0] // string
type TySnd = TyTup2[number] // string|number|Date
let str1: TyStr = ''
let str2: TySnd = 1
let str3: TySnd = ''

// -------------------------- 只读元组 --------------------------
// 元组也可以是只读的，不允许修改，有两种写法。
// 写法一
type Reatup1 = readonly [number, string]
// 写法二
type Reatup2 = Readonly<[number, string]>

let reatup1: Reatup1 = [1, '']
let reatup2: Reatup2 = [1, '']
// reatup1[0] = 2// 报错
// reatup2[0] = 2// 报错

// 写法三，因为它生成的实际上是一个只读的“值类型”readonly [3, 4]，把它解读成只读数组或只读元组都可以。
let reatup3 = [1, ''] as const
// reatup3[0] = 2 // 报错

// 跟数组一样，只读元组是元组的父类型。所以，元组可以替代只读元组，而只读元组不能替代元组。
</script>
