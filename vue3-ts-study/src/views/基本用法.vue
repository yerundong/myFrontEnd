<template>
  <RouterTitle />
  <DocReferTo />
</template>
<script setup lang="ts">
/*
一、类型声明
TypeScript 代码最明显的特征，就是为 JavaScript 变量加上了类型声明。
写法：标识符后“冒号+类型”。类型声明的写法，一律为在标识符后面添加“冒号 + 类型”。函数参数和返回值，也是这样来声明类型。
如下：
*/
let foo: string
function toString(num: number): string {
  return String(num)
}

// 另外，TypeScript 规定，变量只有赋值后才能使用，否则就会报错。而 JavaScript 允许这种行为，不会报错，没有赋值的变量会返回undefined。
// console.log(foo) // 报错

let snyo: object = {}
// console.log(snyo.abc)// 报错

/*
二、类型推断
类型声明并不是必需的，如果没有，TypeScript 会自己推断类型。
*/
let foo2 = 123
// 上面示例中，变量foo并没有类型声明，TypeScript 就会推断它的类型。由于它被赋值为一个数值，因此 TypeScript 推断它的类型为number。
// 后面，如果变量foo更改为其他类型的值，跟推断的类型不一致，TypeScript 就会报错。
// foo2 = 'hello'; // 报错
</script>
