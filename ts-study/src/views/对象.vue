<template>
  <RouterTitle />
  <DocReferTo />
</template>
<script setup lang="ts">
// 对象类型的最简单声明方法，就是使用大括号表示对象，在大括号内部声明每个属性和方法的类型。
// 属性的类型可以用分号结尾，也可以用逗号结尾，也可以换行省略。
const obj1: {
  x: number
  y: number
} = { x: 1, y: 1 }

// 属性类型以分号结尾
// type MyObj1 = {
//   x:number;
//   y:number;
// };

// 属性类型以逗号结尾
// type MyObj2 = {
//   x:number,
//   y:number,
// };

// 对象的方法使用函数类型描述。
const obj2: {
  x: number
  y: number
  add(x: number, y: number): number
  // 或者写成
  // add: (x:number, y:number) => number;
} = {
  x: 1,
  y: 1,
  add(x, y) {
    return x + y
  }
}

// 除了type命令可以为对象类型声明一个别名，TypeScript 还提供了interface命令，可以把对象类型提炼为一个接口。
// 写法一
type MyObj3 = {
  x: number
  y: number
}

const obj3: MyObj3 = { x: 1, y: 1 }

// 写法二
interface MyObj4 {
  x: number
  y: number
}

const obj4: MyObj4 = { x: 1, y: 1 }

// -------------------------- 可选属性 --------------------------
// 如果某个属性是可选的（即可以忽略），需要在属性名后面加一个问号。
let kxobj1: {
  x: number
  y?: string
} = {
  x: 123
}
// 可选属性等同于允许赋值为undefined
kxobj1 = {
  x: 456,
  y: undefined
}
// -------------------------- 只读属性 --------------------------
// 属性名前面加上readonly关键字，表示这个属性是只读属性，不能修改。
// 只读属性只能在对象初始化期间赋值，此后就不能修改该属性。
let reaObj1: {
  readonly x: number
} = {
  x: 123
}
// reaObj1.x = 456 // 报错
// reaObj1.x = 123 // 报错
reaObj1 = { x: 45 } // ok
// reaObj1.x = 456 // 报错

// 注意，如果属性值是一个对象，readonly修饰符并不禁止修改该对象的属性，只是禁止完全替换掉该对象。
let reaObj2: {
  readonly x: {
    y: number
  }
} = {
  x: {
    y: 1
  }
}
reaObj2.x.y = 123 // ok

let reaObj22: {
  readonly x: {
    readonly y: {
      readonly z: number
    }
  }
} = {
  x: {
    y: {
      z: 123
    }
  }
}
// reaObj22.x.y.z = 345 // error

// 如果希望属性值是只读的，除了声明时加上readonly关键字，还有一种方法，就是在赋值时，在对象后面加上只读断言as const。
const reaObj3 = {
  x: 'Sabrina',
  o: {
    a: 1
  }
} as const
// reaObj3.x = '' // 报错
// reaObj3.o.a = 2 // 报错

// -------------------------- 属性名的索引类型 --------------------------
// 索引类型里面，最常见的就是属性名的字符串索引。
const probj1: {
  [x: string]: number
} = {
  a: 1,
  b: 2,
  c: 2,
  d: 2
}

const probj2: {
  [x: string]: number
  [x: symbol]: string
} = {
  a: 1,
  b: 2,
  c: 2,
  d: 2,
  [Symbol(1)]: 'a',
  [Symbol(2)]: 'b'
}

// console.log(probj2)

// 索引签名参数类型必须是 “string”、“number”、“symbol”或模板文本类型。
// number类型的索引会自动转成string，所以number类型索引的值要属于string类型索引的值的类型范围内（如果有string类型索引的话）
type T1 = {
  [x: string]: number // ok
  // [x: number]: string // 报错，string不在number范围内
}

// 属性名的数值索引不宜用来声明数组，因为采用这种方式声明数组，就不能使用各种数组方法以及length属性，因为类型里面没有定义这些东西。
type MyArr = {
  [n: number]: number
}

const arr: MyArr = [1, 2, 3]
// arr.length // 报错
// console.log(arr)

// -------------------------- 解构赋值 --------------------------
const jgobj1: {
  x: number
  y: number
} = { x: 1, y: 2 }

const { x, y }: { x: number; y: number } = jgobj1

// -------------------------- 结构类型原则 --------------------------
// 只要对象 B 满足 对象 A 的结构特征，TypeScript 就认为对象 B 兼容对象 A 的类型，这称为“结构类型”原则（structural typing）。
// 子类型满足父类型的所有结构特征，同时还具有自己的特征。凡是可以使用父类型的地方，都可以使用子类型，即子类型兼容父类型。
const jglxobj1 = {
  x: 1,
  y: 2
}
const jglxobj2: { x: number } = jglxobj1 // 正确

console.log(jglxobj2)
// 只要不使用其他属性，就不会有类型报错。
// console.log(jglxobj2.y)// 报错

// -------------------------- 严格字面量检查 --------------------------
// 如果对象使用字面量表示，会触发 TypeScript 的严格字面量检查（strict object literal checking）。
// 如果字面量的结构跟类型定义的不一样（比如多出了未定义的属性），就会报错。
type TpYg1 = {
  x: number
  y?: boolean
}
const ygobj1: TpYg1 = {
  x: 1
  // yy: true // 报错
}

// 规避严格字面量检查，可以使用中间变量。
const ygobj2 = {
  x: 1,
  yy: true
}
const ygobj3: TpYg1 = ygobj2

console.log(ygobj3)
// console.log(ygobj3.yy)// 报错

// 如果你确认字面量没有错误，也可以使用类型断言规避严格字面量检查。
const ygobj4: TpYg1 = {
  x: 1,
  yy: true
} as TpYg1

// -------------------------- 最小可选属性规则 --------------------------
type Tyzx = {
  a?: number
  b?: number
  c?: number
}
let zxobj1: Tyzx = {} // ok
// zxobj1 = { d: 123 }// 报错
// 报错原因是，如果某个类型的所有属性都是可选的，那么该类型的对象必须至少存在一个可选属性，不能所有可选属性都不存在。这就叫做“最小可选属性规则”。
// 如果想规避这条规则，要么在类型里面增加一条索引属性（[propName: string]: someType），要么使用类型断言（opts as Options）。

// -------------------------- 空对象 --------------------------
// 空对象是 TypeScript 的一种特殊值，也是一种特殊类型。
const kobj = {}

// obj.a = 123; // 报错

// 原因是这时 TypeScript 会推断变量obj的类型为空对象，实际执行的是下面的代码。
// const kobj:{} = {};
// 也等同于
// const kobj:Object = {};

// 也可以用接口声明空对象
interface Empty {}
const kobj2: Empty = { a: 123 }
// console.log(kobj2.a) // 报错

// 如果想强制使用没有任何属性的对象，可以采用下面的写法。
interface WithoutProperties {
  [key: string]: never
}

// const kobj3: WithoutProperties = { a: 1 }// 报错
</script>
