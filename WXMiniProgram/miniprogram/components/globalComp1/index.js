Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    prop1: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    msg: 456
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