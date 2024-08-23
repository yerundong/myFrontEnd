// 方法一
// export {type A, type B};
// 方法二
// export type {A, B};

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
  f(x: number, y: number): number
}

// export type T3 // error

export { type T3, type T4 } // ok
export type { T5, T6, T7 } // ok

export type OBJ = {
  x: number
}
export type COLOR = string
export const color = 'red'
export const fnc = (x) => x
