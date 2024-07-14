<template>
  <RouterTitle />
  <DocReferTo />
</template>
<script setup lang="ts">
// -------- Boolean 类型 ----------
let bool1 = true
let bool2: boolean = true
let bool3: any = false
// console.log(bool1)
// console.log(bool2)
// console.log(bool3)

// -------- Number 类型
let num1: number = 1
// console.log(num1)

// -------- 包装对象类型 ----------
;('hello') // 字面量
new String('hello') // 包装对象

const s1: String = 'hello' // 正确,，自动包装
const s2: String = new String('hello') // 正确

const s3: string = 'hello' // 正确
// const s4: string = new String('hello') // 报错，不能自动解包

// ---------- Object 类型与 object 类型 ----------
// 大写的Object类型代表 JavaScript 语言里面的广义对象。所有可以转成对象的值，都是Object类型，这囊括了几乎所有的值。
let obj1: Object
obj1 = true
obj1 = 'hi'
obj1 = 1
obj1 = { foo: 123 }
obj1 = [1, 2]
obj1 = (a: number) => a + 1
// 事实上，除了undefined和null这两个值不能转为对象，其他任何值都可以赋值给Object类型。
// obj1 = undefined; // 报错
// obj1 = null; // 报错
// 另外，空对象{}是Object类型的简写形式，所以使用Object时常常用空对象代替。

let obj2: {}
obj2 = true
obj2 = 'hi'
obj2 = 1
obj2 = { foo: 123 }
obj2 = [1, 2]
obj2 = (a: number) => a + 1

// 小写的object类型代表 JavaScript 里面的狭义对象，即可以用字面量表示的对象，只包含对象、数组和函数，不包括原始类型的值。
let obj3: object

obj3 = { foo: 123 }
obj3 = [1, 2]
obj3 = (a: number) => a + 1
// obj3 = true; // 报错
// obj3 = 'hi'; // 报错
// obj3 = 1; // 报错

// 注意，无论是大写的Object类型，还是小写的object类型，
// 都只包含 JavaScript 内置对象原生的属性和方法，用户自定义的属性和方法都不存在于这两个类型之中。
const obj4: Object = { foo: 0 }
const obj5: object = { foo: 0 }

obj4.toString() // 正确
// obj4.foo // 报错

obj5.toString() // 正确
// obj5.foo // 报错

// 上面示例中，toString()是对象的原生方法，可以正确访问。foo是自定义属性，访问就会报错。

// ---------- 值类型 ----------
// TypeScript 规定，单个值也是一种类型，称为“值类型”。
let valty1: 'hello'

valty1 = 'hello' // 正确
// valty1 = 'world'; // 报错

// const valty2:5 = 4 + 1; // 报错，等号右侧4 + 1的类型，TypeScript 推测为number，父类型不能赋值给子类型
// 但是，反过来是可以的，子类型可以赋值给父类型。
const valty3: 5 = 5
const valty4: number = valty3
// console.log(valty4)

// ---------- 联合类型 ----------
let unity1: string | number

unity1 = 1
unity1 = ''

// 联合类型可以与值类型相结合，表示一个变量的值有若干种可能。
let unity2: true | false
let unity3: 'male' | 'female'
// unity3 = 'asd'// 报错
let unity4: '赤' | '橙' | '黄' | '绿' | '青' | '蓝' | '紫'

// ---------- 交叉类型 ----------
let jcia1: number & string
// console.log(typeof jcia1)// 报错, 变量jcia1同时是数值和字符串，这当然是不可能的，所以 TypeScript 会认为jcia1的类型实际是never。

// 交叉类型的主要用途是表示对象的合成。
let jcia2: { foo: string } & { bar: string }

jcia2 = {
  foo: 'hello',
  bar: 'world'
}
// 交叉类型常常用来为对象类型添加新属性。
type A = { foo: number }
type B = A & { bar: number }
let aandb: B = {
  foo: 1,
  bar: 2
}

// ---------- type 命令 ----------
// type命令用来定义一个类型的别名。
type Age = number
let age: Age = 55

// 也可以用值类型
type RedColor = 'red'
let color: RedColor = 'red'

// console.log(RedColor);//报错, “RedColor”仅表示类型，但在此处却作为值使用。

// 别名支持使用表达式，也可以在定义一个别名时，使用另一个别名，即别名允许嵌套。
type Greeting = `hello ${RedColor}`
let gty: Greeting = 'hello red'

// 对象类型
type Deftype1 = { foo: number; bar: string }
let defval1: Deftype1 = { foo: 123, bar: '123' }

// ---------- typeof 运算符 ----------
// TypeScript 将typeof运算符移植到了类型运算，它的操作数依然是一个值，但是返回的不是字符串，而是该值的 TypeScript 类型。
console.log(typeof 123) // number
typeof { x: 0 } // { x: number }
const a = { x: 0 }
type Ty1 = typeof a // { x: number }
let xxb: Ty1 = { x: 123 }
type Ty2 = typeof a.x // number
let xxe: Ty2 = 123

// 也就是说，同一段代码可能存在两种typeof运算符，一种用在值相关的 JavaScript 代码部分，另一种用在类型相关的 TypeScript 代码部分。
let anum1 = 1
let anum2: typeof anum1 // 类型运算, TypeScript

if (typeof anum1 === 'number') {
  //值运算, JavaScript
  anum2 = anum1
}

// 由于编译时不会进行 JavaScript 的值运算，所以TypeScript 规定，typeof 的参数只能是标识符，不能是需要运算的表达式。
// type Ty3 = typeof 123; // 报错
</script>
