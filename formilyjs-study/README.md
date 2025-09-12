# 架构

 ![img](https://img.alicdn.com/imgextra/i3/O1CN01iEwHrP1NUw84xTded_!!6000000001574-55-tps-1939-1199.svg) 

 这张图主要将 Formily 分为了内核层，UI 桥接层，扩展组件层，和配置应用层。 

## 概念解释

- `@formily/core`  表单内核。充当 ViewModel 的角色。它负责管理表单的状态，表单校验，联动等等。 内核层是 UI 无关的，它保证了用户管理的逻辑和状态是不耦合任何一个框架 。 

- `@formily/vue ` UI桥接库。充当 View 的角色。用来接入**内核数据**，用来实现最终的表单交互效果，对于不同框架的用户，我们有不同的桥接库。核心定位是将 ViewModel([@formily/core](https://core.formilyjs.org/))与组件实现一个状态绑定关系，它不负责管理表单数据，表单校验，它仅仅是一个渲染胶水层，但是这样一层胶水，并不脏，它会把很多脏逻辑优雅的解耦，变得可维护。 

- `@formily/element-plus` UI拓展层。 **专注于表单领域的解决方案**，基于 Formily 核心框架和 Element 组件封装而成。
  它不提供通用 UI 组件，而是聚焦于解决表单的复杂场景：数据驱动、动态渲染、联动逻辑、校验规则、状态管理等。 

- ` JSON Schema `  是一种用于描述和验证 JSON 数据结构的规范。  独立存在，给 UI 桥接层消费，保证了协议驱动在不同 UI 框架下的绝对一致性，不需要重复实现协议解析逻辑。 

  > Model 层在我们的实际业务代码层了，这一层 formily 就不会管了



# @formily/core

```js
import { createForm } from '@formily/core'
const form = createForm()
```

- [createForm](https://core.formilyjs.org/zh-CN/api/entry/create-form)用来创建表单核心领域模型，Form 实例，它是作为[MVVM](https://core.formilyjs.org/guide/mvvm)设计模式的标准 ViewModel。

## 领域模型

 Formily 内核架构非常复杂，因为要解决一个领域级的问题，而不是单点具体的问题，先上架构图： 

 ![img](https://img.alicdn.com/imgextra/i4/O1CN01HlrsLS1hQAJnihhh1_!!6000000004271-55-tps-2431-2037.svg) 

# @formily/vue 

 ![img](https://img.alicdn.com/imgextra/i1/O1CN013jbRfk1l5n6N7jYH8_!!6000000004768-55-tps-2200-1637.svg)

```js
import { FormProvider, FormConsumer, Field, createSchemaField } from '@formily/vue'
```

- [FormProvider](https://react.formilyjs.org/zh-CN/api/components/form-provider)组件是作为视图层桥接**表单模型的入口**，统领上下文，它只有一个参数，就是接收 createForm 创建出来的 Form 实例，并将 Form 实例以上下文形式传递到子组件中
-  [Field](https://react.formilyjs.org/zh-CN/api/components/field)组件是用来承接普通字段的组件。
- [FormConsumer](https://react.formilyjs.org/zh-CN/api/components/form-consumer)组件是作为响应式模型的响应器而存在，它核心是一个 render props 模式，在作为 children 的回调函数中，会自动收集所有依赖，如果依赖发生变化，则会重新渲染，借助 FormConsumer 我们可以很方便的实现各种计算汇总的需求
- [SchemaField /createSchemaField](https://vue.formilyjs.org/api/components/schema-field.html) SchemaField 组件是专门用于解析[JSON-Schema](https://vue.formilyjs.org/api/shared/schema)动态渲染表单的组件。 在使用 SchemaField 组件的时候，需要通过 createSchemaField 工厂函数创建一个 SchemaField 组件 

#  三种开发模式

## 一、 Template 开发模式

 该模式主要是使用 Field/ArrayField/ObjectField/VoidField 组件。

- 特点：通过组件嵌套的方式定义表单结构
- 优势：更符合 React/Vue 组件化思维，类型提示友好，灵活性高
- 适用场景：大多数常规表单场景，特别是需要复杂 UI 交互的表单

## 二、JSON Schema 开发模式

 该模式是给 SchemaField 的 schema 属性传递 JSON Schema 即可 

- 特点：通过编写 JSON Schema 定义表单结构和校验规则
- 优势：完全声明式，适合动态表单场景，便于前后端共享表单配置
- 适用场景：需要动态生成表单、表单结构复杂且多变的场景

##  三、Markup Schema 开发模式