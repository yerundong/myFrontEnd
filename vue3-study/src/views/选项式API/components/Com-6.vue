<script>
import Com61 from './Com-6-1.vue'
import { h } from 'vue'

export default {
  name: 'Com6',
  components: {
    Com61
  },
  data() {
    return {
      msg: 'hello!!!'
    }
  },
  methods: {
    print() {
      console.log('msg: ', this.msg)
    }
  },
  render() {
    // h(tag, props?, children?)
    // tag：字符串标签名或组件对象
    // props：属性对象，如 class、style、事件绑定
    // children：子节点，可以是字符串、VNode 或 VNode 数组

    // return h('div', { class: 'hiii', style: { color: 'red' } }, this.msg)
    // return h('div', h('button', { style: { color: 'blue' }, onClick: this.print }, 'btn'))
    return h(Com61, null, {
      default: () => 'default slot',
      header: () => h('div', 'header slot')
    })
  }
}
</script>
