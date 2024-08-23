// tsconfig.json 的 includes 包含此文件，会执行编译此文件
// export可以省略
// 在 declare module 中使用的模块名称应与实际导入时使用的字符串完全匹配。

console.log('I am hey.ts') // 不会执行
declare module './foo' {
  // console.log('I am hey module') // error, 不允许使用语句

  // type COLOR = string //error, 不允许重复定义类型
  type COLOR2 = number // 允许新增类型定义

  // const color = '123' //error, 不允许重复定义变量
  // const color2: number = 123 // error, 不允许赋值
  let color2: boolean // 允许新增变量声明，但是无效

  // 接口允许重复定义，自动合并
  interface T7 {
    add: number
  }
}

// declare module 描述的模块名可以使用通配符。
// declare module './f*' {} ???
