{
    // 为函数返回值定义类型
    let fn1 = function (): number {
        return 1
    }
    // or
    let fn2 = (): number => 2;
    // console.log(fn2());// 2

    // 给每个参数定义类型
    let fn3 = (name: string, age: number): string => `my name is ${name}, i am ${age} years old!`;
    // console.log(fn3('LiLi', 13));

    let fn3_ = (obj: { a: string }) => obj.a;
    // console.log(fn3_({a: 'yyy'}));

    let fn3__ = (x: { a: string, [pro: string]: any }[]): object => x;
    // console.log(fn3__([{ 'a': 'aa', 'aa': 123 }]));

    // 函数的完整类型写法：
    let fn4: (x: number, y: number) => number = function (x: number, y: number): number { return x + y; };

    // 必传参数（限制个数和类型）不能不传，即使是any
    let fn5: (x: any, y: any) => any = () => { };
    // fn5();// error
    fn5(undefined, undefined);
    fn5(null, null);

    // 可选参数
    // 可选参数必须跟在必须参数后面。
    let fn6 = (x: number, y?: number): number => {
        if (y)
            return x + y;
        return x
    };
    // console.log(fn6(6));

    // 默认初始值
    // 可选参数与末尾的默认参数共享参数类型
    let fn7 = (x: number, y: number = 0): number => x + y;
    // or let fn7 = (x: number, y = 0): number => x+y; 
    // console.log(fn7(7, 1));

    // 剩余参数
    let fn8 = (...y: number[]) => console.log(y);
    // fn8(7,8);

    // this参数（？？？？？）
    // this参数是个假的参数，它出现在参数列表的最前面
    // let fn9 = function(this: fn8, x:number){ 
    //     console.log(this);
    //     console.log(x);
    // };
    // fn9(999);

    // 重载的类型判断
    let suits = ["hearts", "spades", "clubs", "diamonds"];
    function pickCard(x: { suit: string; card: number; }[]): number;
    function pickCard(x: number): { suit: string; card: number; };
    function pickCard(x): any {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            let pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        // Otherwise just let them pick the card
        else if (typeof x == "number") {
            let pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
    // 重载的pickCard函数在调用的时候会进行正确的类型检查。

}