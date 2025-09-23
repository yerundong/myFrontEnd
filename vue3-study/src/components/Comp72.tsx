import { ref, h, defineComponent, type PropType } from 'vue';

const Comp72 = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      default: '',
    },
  },
  setup(props) {
    const count = ref<number>(0);
    const add = () => {
      count.value++;
    };
    const get = (p: number): string => {
      const res = props.name + count.value + p;
      console.log('res: ', res);
      return res;
    };
    return () =>
      h('div', [
        h('h3', '《组件: Comp72》'),
        h('span', `${props.name}: ${count.value}`),
        h('br'),
        h(
          'button',
          {
            onClick: add,
          },
          'add'
        ),
        h(
          'button',
          {
            onClick: () => get(Math.random()),
          },
          'get'
        ),
      ]);
  },
});

export default Comp72;
