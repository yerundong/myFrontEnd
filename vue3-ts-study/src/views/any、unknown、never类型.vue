<template>
  <RouterTitle />
  <div>
    参考：<a href="https://wangdoc.com/typescript/any" target="_blank"
      >阮一峰《TypeScript教程·any 类型，unknown 类型，never 类型》</a
    >
  </div>
</template>
<script setup lang="ts">
/*
一、any类型
any 类型表示没有任何限制，该类型的变量可以赋予任意类型的值。
变量类型一旦设为any，TypeScript 实际上会关闭这个变量的类型检查。即使有明显的类型错误，只要句法正确，都不会报错。
要避免使用any类型
*/
let anyfoo: any = 123
// anyfoo = 'hi' // ts不报错
// anyfoo(1) // ts不报错
// anyfoo.foo = 100 // ts不报错
// console.log(anyfoo)

// 没有指定类型，也没有足够的信息, TypeScript 会推断它们的类型为any。
// function add(x, y) {
//   return x + y
// }

/*
二、unknown 类型
为了解决any类型“污染”其他变量的问题，TypeScript 3.0 引入了unknown类型。它与any含义相同，表示类型不确定，
可能是任意类型，但是它的使用有一些限制，不像any那样自由，可以视为严格版的any。
*/
let unkfoo: unknown = ''
unkfoo = 123
unkfoo = true
console.log(unkfoo)

/*
unknown类型跟any类型的不同之处在于，它不能直接使用。主要有以下几个限制。
首先，unknown类型的变量，不能直接赋值给其他类型的变量（除了any类型和unknown类型）。
*/
// let unkfoo2: number = unkfoo // 报错
// let unkfoo3: string = unkfoo // 报错

// 其次，不能直接调用unknown类型变量的方法和属性，或者直接当作函数执行
let unkfoo4: unknown = { bar: '123', foo() {} }
// console.log(unkfoo4.bar)// 报错
// unkfoo4.foo()// 报错
let unkfoo5: unknown = () => {}
// unkfoo5() // 报错

/*
再次，unknown类型变量能够进行的运算是有限的，只能进行比较运算（运算符==、===、!=、!==、||、&&、?）、取反运算（运算符!）、
typeof运算符和instanceof运算符这几种，其他运算都会报错。
*/
let unkfoo6: unknown = 1
// unkfoo6 + 1 // 报错
unkfoo6 === 1 // 正确

// 那么，怎么才能使用unknown类型变量呢？答案是只有经过“类型缩小”，unknown类型变量才可以使用。
let unkfoo7: unknown = 1

if (typeof unkfoo7 === 'number') {
  let r = unkfoo7 + 10 // 正确
}
// 这样设计的目的是，只有明确unknown变量的实际类型，才允许使用它，防止像any那样可以随意乱用，“污染”其他变量。类型缩小以后再使用，就不会报错。
// 总之，unknown可以看作是更安全的any。一般来说，凡是需要设为any类型的地方，通常都应该优先考虑设为unknown类型。

/*
三、never 类型
为了保持与集合论的对应关系，以及类型运算的完整性，TypeScript 还引入了“空类型”的概念，即该类型为空，不包含任何值。
由于不存在任何属于“空类型”的值，所以该类型被称为never，即不可能有这样的值。
never 类型的变量不可能赋给它任何值，否则都会报错。
never 类型的变量可以赋值给任意其他类型。
*/
let nevrFoo: never
// nevrFoo = ''// 报错

// let numFoo: number = ((): never => {
//   throw new Error('Error')
// })() // 不报错
</script>
