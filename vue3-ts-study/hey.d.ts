declare type TTT = number

declare namespace AnimalLib1 {
  class Animal {
    constructor(name: string)
    eat(): void
    sleep(): void
  }

  type Animals = 'Fish' | 'Dog'
}

// 或者
declare module AnimalLib2 {
  class Animal {
    constructor(name: string)
    eat(): void
    sleep(): void
  }

  type Animals = 'Fish' | 'Dog'
}
