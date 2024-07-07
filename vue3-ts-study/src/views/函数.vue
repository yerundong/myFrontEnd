<template>
  <RouterTitle />
  <DocReferTo />
</template>
<script setup lang="ts">
// 写法1
const fn1 = (foo: number, bar: string): string => {
  return bar
}

// 写法2
const fn11: (foo: number, bar: string) => string = (foo, bar) => {
  return bar
}
fn11(1, '')

// 如果不指定参数类型（比如上例不写txt的类型），TypeScript 就会推断参数类型，如果缺乏足够信息，就会推断该参数的类型为any。
// 推断返回 number
const fn2 = (foo: number, bar: number) => {
  return foo + bar
}

// 类型
type TyFunc = (x: string, y: number) => number
const fn3: TyFunc = (x, y) => y
// console.log(fn3('', 123))

// 函数的实际参数个数，可以少于类型指定的参数个数，但是不能多于，即 TypeScript 允许省略参数。
let fn4: (x: number, y: string) => number
fn4 = (x: number) => x // 正确
// fn4(123) // 报错
fn4(123, '')
// fn4 = (x: number, y: string, z: string) => x // 报错

// 如果一个变量要套用另一个函数类型，有一个小技巧，就是使用typeof运算符。
function fn5(x: number, y: number) {
  return x + y
}
const fn6: typeof fn5 = function (x, y) {
  return x + y
}

// 函数类型还可以采用对象的写法。
// 函数类型的对象写法如下。
// {
//   (参数列表): 返回值
// }
let fn7: {
  (x: number, y: string): number
}
fn7 = (x: number, y: string) => x

// 这种写法平时很少用，但是非常合适用在一个场合：函数本身存在属性。
let fn8: {
  (x: number, y: string): number
  version: string
}
function fn9(x: number, y: string) {
  return x
}
fn9.version = '1.0.0'
fn8 = fn9

// -------------------------- Function 类型 --------------------------
let xfn1: Function = () => {}
xfn1(1, 2, 3, 4)
// Function 类型的函数可以接受任意数量的参数，每个参数的类型都是any，返回值的类型也是any，代表没有任何约束，
// 所以不建议使用这个类型，给出函数详细的类型声明会更好。

// -------------------------- 箭头函数 --------------------------

type Person = { name: string }
const people = ['alice', 'bob', 'jan'].map((name): Person => ({ name }))
console.log(people)

// -------------------------- 可选参数 --------------------------
// 如果函数的某个参数可以省略，则在参数名后面加问号表示。
function kfn1(x?: number) {
  // ...
}
kfn1() // OK
kfn1(10) // OK

// 类型显式设为undefined的参数，就不能省略。
function kfn2(x: number | undefined) {
  return x
}
// kfn2() // 报错
kfn2(undefined) // OK

// 函数体内部用到可选参数时，需要判断该参数是否为undefined。
let myFunc: (a: number, b?: number) => number

myFunc = function (x, y) {
  if (y === undefined) {
    return x
  }
  return x + y
}

// -------------------------- 参数默认值 --------------------------
//  这里其实可以省略x和y的类型声明，因为可以从默认值推断出来。
function createPoint(x = 0, y = 0) {
  return [x, y]
}

// 可选参数与默认值不能同时使用。
// 报错
// function f(x?: number = 0) {
//   // ...
// }

// 设有默认值的参数，如果传入undefined，也会触发默认值。
function f(x = 456) {
  return x
}

f() // 456
f(undefined) // 456

// -------------------------- 参数解构 --------------------------
// 元组解构
function jfn1([x, y]: [number, number]) {
  return x + y
}
jfn1([1, 2])

// 数组解构
function jfn2([x, y]: Array<number>) {
  return x + y
}
jfn2([1, 2, 3])

// 对象解构
function jfn3({ a, b, c }: { a: number; b: string; c: boolean }) {
  return c
}
jfn3({ a: 1, b: '', c: false })

// -------------------------- rest 参数 --------------------------
// rest 参数表示函数剩余的所有参数，它可以是数组（剩余参数类型相同），也可能是元组（剩余参数类型不同）。
// 数组
function rfn1(a: number, ...b: number[]) {
  return a + b.length
}
rfn1(1, 2, 3, 4)
// 元组
function rfn2(a: number, ...b: [number, string]) {
  return a + b.length
}
rfn2(1, 2, '')

// -------------------------- readonly 只读参数 --------------------------
function reafn1(arr: readonly number[]) {
  // arr[0] = 0 // 报错
}

// -------------------------- void 类型 --------------------------
// void 类型表示函数没有返回值或者返回 undefined
const vfn1 = (): void => {
  // return 123 // 报错
  // return null// 报错
  return undefined // ok
}

// 需要特别注意的是，如果【变量、对象方法、函数参数】是一个返回值为 void 类型的函数，
// 那么并不代表不能赋值为有返回值的函数。恰恰相反，该变量、对象方法和函数参数可以接受返回任意值的函数，这时并不会报错。
// 这样设计是有现实意义的。举例来说，数组方法Array.prototype.forEach(fn)的参数fn是一个函数，而且这个函数应该没有返回值，即返回值类型是void。
// 只要不用到这里的返回值，就不会报错。
// 注意，这种情况仅限于变量、对象方法和函数参数，函数字面量如果声明了返回值是 void 类型，还是不能有返回值。

// 变量
let vfn2: () => void
vfn2 = () => {
  return 123 // ok
}

// 变量
type TyVfn = () => void
let vfn3: TyVfn = () => {
  return true // ok
}

// 对象方法
const obj1: { vfn: () => void } = {
  vfn() {
    return ''
  }
}

// 函数参数
const arr1: number[] = [1, 2, 3]
const arr2: number[] = []
arr1.forEach((el) => arr2.push(el))

// 如果后面使用了这个函数的返回值，就违反了约定，则会报错。
// const res1 = vfn2() * 2 // 报错

// 函数的运行结果如果是抛出错误，也允许将返回值写成void。
function throwErr(): void {
  throw new Error('something wrong')
}

// -------------------------- never 类型 --------------------------
// never类型表示肯定不会出现的值。它用在函数的返回值，就表示某个函数肯定不会返回值，即【函数不会正常执行结束】。
// 它主要有以下两种情况。
// （1）抛出错误的函数。
function nvfn1(msg: string): never {
  throw new Error(msg)
}
// （2）无限执行的函数。
function nvfn2(msg: string): never {
  while (true) {
    console.log('sing')
  }
}

// -------------------------- 函数重载 --------------------------
// 有些函数可以接受不同类型或不同个数的参数，并且根据参数的不同，会有不同的函数行为。
// 这种根据参数类型不同，执行不同逻辑的行为，称为函数重载（function overload）。
// TypeScript 对于“函数重载”的类型声明方法是，在函数内部，逐一处理不同的参数类型的情况。
function getSum(x: number, y: number): number
function getSum(x: string, y: string): string
function getSum(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number') return x + y
  else return 'hello: ' + x + y
}

// console.log(getSum(1, 2))// ok
// console.log(getSum('a', 'b'))// ok
// console.log(getSum(1, 'b')) // 报错
</script>
