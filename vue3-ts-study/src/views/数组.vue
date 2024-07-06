<template>
  <RouterTitle />
  <DocReferTo />
</template>
<script setup lang="ts">
// 数组的类型有两种写法。第一种写法是在数组成员的类型后面，加上一对方括号。
let arr1: number[] = [1, 2, 3]
// arr1 = ['', 2]// 报错
// arr1 = ['2', '1'] // 报错
// console.log(arr1)

// 如果数组成员的类型比较复杂，可以使用联合类型，写在圆括号里面。
let arr2: (number | string)[] = [1, 2, 3]
arr2 = ['', 2]
// console.log(arr2)

// 如果数组成员可以是任意类型，写成any[]。当然，这种写法是应该避免的。
let arr3: any[] = ['', 2, true]
// console.log(arr3)

// 数组类型的第二种写法是使用 TypeScript 内置的 Array 接口。
let arr4: Array<number> = [1, 2, 3]
// 这种写法对于成员类型比较复杂的数组，代码可读性会稍微好一些。
let arr5: Array<number | string> = [1, 2, '3']

let arr6: number[] = []
// console.log(arr6[0])

type TyStrArr = string[]
type TyStr = TyStrArr[0]
let arr7: TyStrArr = ['123']
let str1: TyStr = '123'

// -------------------------- 数组的类型推断 --------------------------
const arr8 = [] // 推断为 any[]
arr8.push('1') // 推断类型为 number[]
arr8.push(2) // 推断类型为 (string|number)[]

// 数组变量arr的初始值是空数组，然后随着新成员的加入，TypeScript 会自动修改推断的数组类型。
// 但是，类型推断的自动更新只发生初始值为空数组的情况。如果初始值不是空数组，类型推断就不会更新。
const arr9 = [123] // 推断类型为 number[]
// arr9.push('abc'); // 报错

// -------------------------- 只读数组，const 断言 --------------------------
// TypeScript 允许声明只读数组，只读数组不允许变动数组成员。方法是在数组类型前面加上readonly关键字。
const rearr1: readonly number[] = [0, 1]
// rearr2[1] = 2; // 报错
// rearr2.push(3); // 报错
// delete rearr2[0]; // 报错
const rearr2: readonly (number | string)[] = [0, '1']
// rearr2[1] = 2; // 报错

// TypeScript 将readonly number[]与number[]视为两种不一样的类型，后者是前者的子类型。
let rearr3: number[] = [0, 1]
let rearr4: readonly number[] = rearr3 // 正确，子类型可以赋给父类型
// rearr3 = rearr4 // 报错，父类型不能赋给子类型
// 解决方法是使用类型断言
rearr3 = rearr4 as number[]
// console.log(rearr3)

// 注意，readonly关键字不能与数组的泛型写法一起使用。
// const rearr5: readonly Array<number> = [0, 1]// 报错

// 实际上，TypeScript 提供了两个专门的泛型，用来生成只读数组的类型。
const rearr6: ReadonlyArray<number> = [0, 1]
const rearr7: Readonly<number[]> = [0, 1]

// 只读数组还有一种声明方法，就是使用“const 断言”。
const rearr8 = [1, 2] as const
// rearr8[1] = 3// 报错

// -------------------------- 多维数组 --------------------------
// 表示它是一个二维数组，最底层的数组成员类型是number。
const mularr1: number[][] = [
  [1, 2, 3],
  [23, 24, 25]
]

const mularr2: symbol[][][] = [[[Symbol(), Symbol()]]]
</script>
