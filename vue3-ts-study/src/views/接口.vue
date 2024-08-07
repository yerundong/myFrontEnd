<template>
  <RouterTitle />
  <DocReferTo />
</template>
<script setup lang="ts">
// interface 是对象的模板，可以看作是一种类型约定，中文译为“接口”。使用了某个模板的对象，就拥有了指定的类型结构。
interface Itf1 {
  x: string
  y: string
  z: number
}
// console.log(Itf1) // 报错，接口只作用于编译阶段，仅表示类型，但在此处却作为值使用。

// 实现该接口很简单，只要指定它作为对象的类型即可。
const obj1: Itf1 = {
  x: 'a',
  y: 'b',
  z: 1
}

// 方括号运算符可以取出 interface 某个属性的类型。
type Ty1 = Itf1['x'] // string
// type Ty1 = Itf1.x // 报错

// interface 可以表示对象的各种语法，它的成员有5种形式。
// 对象属性
// 对象的属性索引
// 对象方法
// 函数
// 构造函数
</script>
