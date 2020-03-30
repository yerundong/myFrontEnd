Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    // 组件样式隔离 
    // isolated 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响（一般情况下的默认值）；
    // apply-shared 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；
    // shared 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 apply-shared 或 shared 的自定义组件。（这个选项在插件中不可用。）
    // styleIsolation: 'isolated',
    // styleIsolation: 'page-isolated',

    // addGlobalClass: true 等价于设置 styleIsolation: apply-shared ，但设置了 styleIsolation 选项后这个选项会失效。
    // addGlobalClass: true,

    // 外部样式类
    // externalClasses: ['my-class']
  },
  properties: {
    // 这里定义了prop1属性，属性值可以在组件使用时指定
    prop1: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {
      msg: 789
    }
  },
  // 组件的的生命周期（推荐） 在lifetimes内进行声明
  lifetimes: {
    created() {
      // console.log('-------created--------');
      console.log(this.data.prop1);
    },
    attached() {
      // console.log('-------attached--------');
    },
    ready() {
      // console.log('-------ready--------');
    },
    moved() {
      // console.log('-------moved--------');
    },
    detached() {
      // console.log('-------detached--------');
    },
    error() {
      // console.log('-------error--------');
    },
  },
  // 组件所在页面的生命周期函数
  // 有时组件需要获知，以便组件内部处理
  pageLifetimes: {
    show: function () {},
    hide: function () {},
    resize: function () {},
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () {},
  },
  // 低版本生命周期写在这，高会被lifetimes覆盖
  created() {
    console.log('-------ready2--------');
  }
})