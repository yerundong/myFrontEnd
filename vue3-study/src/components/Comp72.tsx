import { ref, defineComponent, type VNode, type PropType } from 'vue';

interface User {
  id: number;
  name: string;
  role: 'admin' | 'user';
  meta?: {
    age: number | string;
    address?: string;
  };
}

// @TODO 这个defineComponent<CompProps>的泛型参数不知道有什么用？
const Comp72 = defineComponent({
  props: {
    name: {
      type: String, // 简单prop不需要使用PropType
      default: '',
    },
    user: {
      type: Object as PropType<User>, // 复杂prop字段可以使用PropType<interface/type>来限制更多子项的类型
      required: true,
    },
  },
  setup(props) {
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    const get = (p: number): string => {
      const res = props.name + count.value + p;
      console.log('res: ', res);
      console.log('user: ', props.user);
      return res;
    };
    return (): VNode => (
      <div>
        <h3>《组件: Comp72》</h3>
        {props.name}: {count.value}
        <br />
        <button onClick={add}>add</button>
        <button onClick={() => get(Math.random())}>get</button>
      </div>
    );
  },
});

export default Comp72;
