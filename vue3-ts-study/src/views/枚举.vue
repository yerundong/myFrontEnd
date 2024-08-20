<template>
  <RouterTitle />
  <DocReferTo />
</template>
<script setup lang="ts">
enum Color {
  Red, // 0
  Green, // 1
  Blue // 2
}
// console.log(Color)
// console.log(Color.Red) //0
// console.log(Color.Green) //1
// console.log(Color['Blue']) //1

// 数值 Enum 存在反向映射，即可以通过成员值获得成员名。
// console.log(Color[1]) //Green

// Enum 结构本身也是一种类型。
const c: Color = 0 // 正确
// const c2: Color = 4 // 报错
const c3: Color = Color.Green // 正确
let c4: number = Color.Green // 正确
// const c5: Color = Color[1] // 报错

// Enum 结构比较适合的场景是，成员的值不重要，名字更重要，从而增加代码的可读性和可维护性。

function fn1(c1: Color, c2: Color) {
  console.log(c1 + c2)
}
fn1(Color.Red, Color.Blue)
fn1(2, 1)
// fn1(2, 3) // 报错

// 也可以为 Enum 成员显式赋值
enum Color2 {
  Red = '12',
  Green = 15,
  Blue = '7n'
}
console.log(Color2.Red)

// 如果只设定第一个成员的值，后面成员的值就会从这个值开始递增。
enum Color3 {
  Red, // 0
  Green = 7,
  Blue // 8
}

// Enum 成员值都是只读的，不能重新赋值。
// Color.Red = 4 // 报错

// 为了让这一点更醒目，通常会在 enum 关键字前面加上const修饰，表示这是常量，不能再次赋值。
// 加上const还有一个好处，就是编译为 JavaScript 代码后，代码中 Enum 成员会被替换成对应的值，这样能提高性能表现。
const enum Color4 {
  Red, // 0
  Green, // 1
  Blue // 2
}

// 除了数值和字符串，Enum 成员不允许使用其他值
// 注意，字符串 Enum 的成员值，不能使用表达式赋值。
enum Foo {
  // A = undefined // 报错
  // A = true // 报错
  // A = null // 报错
  A = 2, // ok
  // B = 1 + 2, // 报错
  B = 'hi' // ok
}

console.log(Foo)

// keyof 运算符可以取出 Enum 结构的所有成员名，作为联合类型返回。

enum Bar {
  A = 'a',
  B = 'b'
}
type Bar_ = keyof typeof Bar // 'A'|'B'

const bar1: Bar_ = 'A'
console.log(bar1)
</script>
