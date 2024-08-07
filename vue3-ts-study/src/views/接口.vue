<template>
  <RouterTitle />
  <DocReferTo />
</template>
<script setup lang="ts">
// interface 是对象的模板，可以看作是一种类型约定，中文译为“接口”。使用了某个模板的对象，就拥有了指定的类型结构。
interface Itf1 {
  a: string
  b: number
  c: boolean
}

// 任何实现这个接口的对象，都必须部署这三个属性，并且必须符合规定的类型。
const obj1: Itf1 = {
  a: 'a',
  b: 1,
  c: false
}

// 方括号运算符可以取出 interface 某个属性的类型。
interface Itf2 {
  a: string
}

// type A = Itf2.a // 报错
type A = Itf2['a'] // string

// interface 可以表示对象的各种语法，它的成员有5种形式。
// 对象属性
// 对象的属性索引
// 对象方法
// 函数
// 构造函数

// 如果属性是只读的，需要加上readonly修饰符。
interface Itf3 {
  readonly a: number
  b: string
}
const obj2: Itf3 = {
  a: 1,
  b: 'a'
}
// obj2.a = 2// 报错

// 对象的属性索引
interface Itf4 {
  [prop: string]: number
}
const obj3: Itf4 = {
  a: 2
}

interface Itf5 {
  [prop: number]: string
}

const obj4: Itf5 = ['a', 'b', 'c']
console.log(obj4)
// console.log(obj4.length)// 报错

// 对象的方法
// 写法一
interface Fitf1 {
  f(x: boolean): string
}

// 写法二
interface Fitf2 {
  f: (x: boolean) => string
}

// 写法三
interface Fitf3 {
  f: { (x: boolean): string }
}

const fobj1: Fitf1 = {
  f(x) {
    return x ? '1' : '0'
  }
}
const fobj2: Fitf2 = {
  f: (x) => (x ? '1' : '0')
}

const fobj3: Fitf3 = {
  f: (x) => (x ? '1' : '0')
}

// 属性名可以采用表达式，所以下面的写法也是可以的。
const fff = 'func'
type X = boolean
type S = string

interface Ditf1 {
  [fff](x: X): S
}

// interface 里面的函数重载，不需要给出实现。
interface Ritf1 {
  f(): number
  f(x: boolean): boolean
  f(x: string, y: string): string
}

function rfunc(): number
function rfunc(x: boolean): boolean
function rfunc(x: string, y: string): string
function rfunc(x?: boolean | string, y?: string): number | boolean | string {
  if (x === undefined && y === undefined) return 1
  if (typeof x === 'boolean' && y === undefined) return true
  if (typeof x === 'string' && typeof y === 'string') return 'hello'
  throw new Error('wrong parameters')
}

const robj1: Ritf1 = {
  f: rfunc
}

// 函数,interface 也可以用来声明独立的函数。
interface Fcitf1 {
  (x: number, y: number): number
}
const fcfunc1: Fcitf1 = (x, y) => x + y

// 构造函数,interface 内部可以使用new关键字，表示构造函数。 ???
interface ErrorConstructor {
  new (message: string): Error
}
</script>
