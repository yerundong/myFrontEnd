export declare type TEAT1 = number

export const TEAV1 = '98k' // export用法也可以输出值
// export const TEAV0: string = '98k' // error，但是不能输出带类型的值

export type TEAT2 = {
  x: number
}

export interface TEAT3 {
  x: string
  y: string
}

// 当 .d.ts 中出现 export，就会强制编译器将这个脚本当作模块处理，则所有 declare 都会强制变成输出机制，而非全局类型
declare type TEAT4 = 'ump' // 等于 export declare type TEAT4 = 'ump'
type TEAT5 = boolean // 这是省略了 declare 用法，此处也等于 export declare type TEAT5 = boolean

// 但是常变量不行，因为 必须以 "declare" 或 "export" 修饰符开头
// const TEAV2 = '416' // 报错

// ！！！！注意：若是出现 export {}, 会使省略了export的地方（如上面TEAT4、TEAT5）全部失效，既非导出，也非全局
// export {}

// 如果要在 .d.ts 中使用 declare global，必须是 export 用法
// 若实在没有什么可以输出的，可以写一个 export {}
declare global {}
