// *.d.ts中 直接写 type 、interface 加上 declare 和 不加 declare是一样的效果，都能在其他ts文件 直接引用。
// 即 declare 可以省略
declare type BEET0 = number
type BEET1 = 'hi' | 'hello' // declare 省略
declare type BEET2 = {
  x: number
}

// .d.ts 文件中的顶级声明只能以 "declare" 或 "export" 修饰符开头，否则会抛出错误
// const sa =123 // error

// 不允许出现非类型的
// declare const BEEV1 = 123
// declare enum BEEColor {
//   red = 1
// }

declare interface BEET3 {
  x: string
}

// declare module './shy' // error, d.ts环境模块声明无法指定相对模块名。
declare module '@/types/shy' {
  type BEET4 = 'i am BEET4'

  //   function moment(): any
  //   export = moment
}
