// 方法一
// export {type A, type B};
// 方法二
// export type {A, B};

import type { Interface } from 'readline'

export type T1 = string
export type T2 = number

type T3 = boolean
type T4 = (x: T2) => T3
type T5 = {
  a: T1
  b?: T2
  readonly c: T3
}
type T6 = { fn: T4 } & T5

interface T7 {
  (x: number, y: number): number
}

// export type T3 // error

export { type T3, type T4 } // ok
export type { T5, T6, T7 } // ok

// export default type T4 = boolean
