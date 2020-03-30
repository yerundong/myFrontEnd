const myBehavior1 = require('my-behavior1');
const myBehavior2 = require('my-behavior2');
// behaviors 是用于组件间代码共享的特性，类似于一些编程语言中的“mixins”或“traits”。

// 组件和它引用的 behavior 中可以包含同名的字段，对这些字段的处理方法如下：
// 如果有同名的属性或方法，组件本身的属性或方法会覆盖 behavior 中的属性或方法，如果引用了多个 behavior ，在定义段中靠后 behavior 中的属性或方法会覆盖靠前的属性或方法；
// 如果有同名的数据字段，如果数据是对象类型，会进行对象合并，如果是非对象类型则会进行相互覆盖；
// 生命周期函数不会相互覆盖，而是在对应触发时机被逐个调用。如果同一个 behavior 被一个组件多次引用，它定义的生命周期函数只会被执行一次

// [内置 behaviors]
// wx://form-field
// 使自定义组件有类似于表单控件的行为。 form 组件可以识别这些自定义组件，并在 submit 事件中返回组件的字段名及其对应字段值
// wx://component-export 使自定义组件支持 export 定义段。这个定义段可以用于指定组件被 selectComponent 调用时的返回值。

Component({
  behaviors: [myBehavior1, myBehavior2, 'wx://form-field', 'wx://component-export'],
  export() {
    return { 
      aaa: 'aaa',
      bbb: 'bbb',
    }
  },
  options: {
  },
  properties: {
  },
  data: {
    info: 'father',
    obj:{
      father: 1,
      tip: 1
    }
  },
  lifetimes: {
    created() {
      console.log(this.data.obj);
    },
    attached() {
    },
    ready() {
    },
  },
  pageLifetimes: {
    show: function () {},
    hide: function () {},
    resize: function () {},
  },
  methods: {
  }
})