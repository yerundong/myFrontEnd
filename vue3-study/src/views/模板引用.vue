<template>
  <div>
    <h1>模板引用</h1>
    <div>
      <input v-if="show1" ref="myinput" />
      <button @click="() => (show1 = !show1)">show1</button>
    </div>
    <div>
      <textarea v-if="show2" ref="mytextarea" />
      <button @click="() => (show2 = !show2)">show2</button>
    </div>
    <div>
      <input v-if="show3" type="number" :ref="refFunc" />
      <button @click="() => (show3 = !show3)">show3</button>
    </div>

    <ul>
      <!-- 不能写 :ref="li + num"（这样会报错，因为 li+num 是字符串拼接，不是变量）。只能是固定的字符串或函数 -->
      <!-- <li v-for="num in 3" :key="num" :ref="li + num">{{ num }}</li> -->
      <li v-for="num in 3" :key="num" ref="lies">{{ num }}</li>
      <span v-for="num in 3" :key="num" ref="spanes">{{ num }}</span>
      <p v-for="num in ['一', '二', '三']" :key="num" :ref="pRefFunc">{{ num }}</p>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { ref, useTemplateRef, onMounted, watch, type ComponentPublicInstance } from 'vue';

  const show1 = ref(true),
    show2 = ref(true),
    show3 = ref(true);

  // 访问模板引用
  /**
   * 方式一: ref
   * 类型写法: ref<HTMLInputElement | null>()
   * 声明一个 ref 来存放该元素的引用
   * 变量名必须和模板里的 ref 同名
   */
  const myinput = ref<HTMLInputElement | null>(null);

  /**
   * 方式二: useTemplateRef (Vue 3.5+)
   * 推荐写法: useTemplateRef<HTMLTextAreaElement>('mytextarea')
   */
  const mytextarea = useTemplateRef<HTMLTextAreaElement>('mytextarea');

  /**
   * 方式三: 函数模板引用
   * 除了使用字符串值作名字，ref attribute 还可以绑定为一个函数，会在每次组件更新时都被调用。参数是元素本身或 null
   * 但是只能在函数内部取到模板引用，外部取不到。若要外部使用到，可存到外部变量里
   * 注意: el 在卸载时会变成 null
   */

  const mynuminput = ref<HTMLInputElement | null>(null);
  const refFunc = (el: Element | ComponentPublicInstance | null) => {
    console.log('refFunc: ', el);
    mynuminput.value = el as HTMLInputElement | null; // 存到外部
    console.log('mynuminput: ', mynuminput);
  };

  /**
   * v-for + 字符串 ref
   * 当 同一个字符串 ref 用在 v-for 中时，Vue 会自动把它收集成一个数组。
   * 所以 lies.value 是 HTMLLIElement[]。
   */
  const lies = ref<(HTMLLIElement | null)[]>([]);

  /**
   * v-for + useTemplateRef
   * 和上个差不多
   */
  const spanes = useTemplateRef<(HTMLLIElement | null)[]>('spanes');

  /**
   * v-for + 函数 ref
   * 当 同一个函数 ref 用在 v-for 中时，每个元素引用都可以在函数里取到
   * 自己收集, 注意去重
   */
  const ps = ref<(HTMLParagraphElement | null)[]>([]);
  const pRefFunc = (el: Element | ComponentPublicInstance | null) => {
    console.log('****pRefFunc: ', el);
    ps.value.push(el as HTMLParagraphElement | null);
  };

  // 注意，你只可以在组件挂载后才能访问模板引用。
  onMounted(() => {
    console.log('myinput: ', myinput);
    console.log('mytextarea: ', mytextarea);
    // myinput.value?.focus()
    // mytextarea.value?.focus()
    mynuminput.value?.focus();

    console.log('lies: ', lies);
    if (lies.value[0]) lies.value[0].style.color = 'red';

    console.log('spanes: ', spanes);
    if (spanes.value?.[1]) spanes.value[1].style.color = 'green';

    console.log('ps: ', ps);
    if (ps.value[2]) ps.value[2].style.color = 'blue';
  });

  watch(myinput, (val) => {
    console.log('myinput: ', val);
  });
</script>
