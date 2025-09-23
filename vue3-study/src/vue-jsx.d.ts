// vue-jsx.d.ts
import 'vue';

declare global {
  namespace JSX {
    // 这里可以直接继承 Vue3 的内置类型
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
