// tsconfig.json 的 includes 包含此文件，会执行编译此文件
// export可以省略
console.log('I am hot.ts') // 不会执行
declare global {
  // console.log('I am hot global') // error, 不允许使用语句

  // const window: Object// error, 不允许重复定义变量
  // const String: Object// error, 不允许重复定义变量

  // 给顶层对象扩充新的属性描述
  interface String {
    hopy: number
    doyou(x: string): string
  }

  interface Window {
    yyy: number
  }

  // 错误写法
  // interface window {
  //   xxx: number
  // }

  // 增加新的顶层类型，可以全局访问
  type Newh1 = number
  interface Newh2 {
    x: number
  }

  // newv1 不是顶层对象，所以加了也没用???
  const newv1: string
}
