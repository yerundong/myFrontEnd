
{
    // *布尔值
    let bool: boolean = false;
    // bool = 555;// 报错 Type '555' is not assignable to type 'boolean'.
    bool = true;

    // *数字
    let num1: number = 1;
    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    let binaryLiteral: number = 0b1010;
    let octalLiteral: number = 0o744;

    // decLiteral = 'sss';// 报错
    // decLiteral = '1'*1;// 报错

    // *字符串
    let str: string = 'ssss';

    // *数组
    // 有两种方式可以定义数组
    // 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
    let arr1: number[] = [1, 2, 3];
    // arr1[2] = 'lll';//报错 Type '"lll"' is not assignable to type 'number'.

    // 第二种方式是使用数组泛型，Array<元素类型>：
    let arr2: Array<string> = ['a', 'b', 'c'];
    let arr3: Array<any> = ['a', true, 3];

    // *元组 Tuple
    // 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
    let tuple1: [number, string];
    tuple1 = [2, 'a'];
    // tuple1 = ['a', 2];// 报错
    // tuple1 = ['a', 2];// 报错
    // tuple1 = ['a'];// 报错
    // tuple1: number[] = [3]// 报错

    let tuple2: [number, number | string] = [1, 2];

    // 对象
    let obj1: object;
    // obj1 = 123;// error
    obj1 = [];
    obj1 = {};
    obj1 = ()=>{};
    obj1 = new Set();

    let obj2: {
        a: any
    };
    obj2 = {a: 123};

    // *枚举
    // enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
    enum Color1 { Red, Green, Blue }
    // console.log(Color1);// {0: "Red", 1: "Green", 2: "Blue", Red: 0, Green: 1, Blue: 2}
    let col1: Color1 = Color1.Green;
    // console.log(col1);// 1

    // 或者，全部都采用手动赋值：
    enum Color2 { Red = 666, Green = 8, Blue = 123 }
    let col2: Color2 = Color2.Blue;
    // console.log(col2);// 123

    // *Any
    // any类型可以标记任何类型
    let arr4: any[] = [1, 'p', true];
    let tuple3: [number, any] = [1, true];

    // *Void
    // 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
    let void1: void = undefined;
    void1 = null;
    // void1 = 555;// 报错
    // console.log(void1);

    let fn1 = function (): void {
        // return 5// 报错
    }

    // *Null 和 Undefined
    // TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。
    let udf: undefined = undefined;
    let nll: null = null;
    // 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
    // udf = void1;// 报错
    num1 = udf;
    arr4 = nll;
    udf = nll;
    void1 = udf;
    void1 = nll;

    // 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 
    // 鼓励尽可能地使用--strictNullChecks

    // *Never
    // never类型表示的是那些永不存在的值的类型。
    // never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
    // 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
    // never类型是任何类型的子类型，也可以赋值给任何类型；然而，
    // 没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

    // 返回never的函数必须存在无法达到的终点
    let fn2 = function (): never {
        throw new Error('errrrrrrr');
    }
    let nver1: never;

    // *类型断言
    // 类型断言有两种形式:
    let someValue: any = "this is a string";
    let strLength1: number = (<string>someValue).length;// (JSX里不支持)
    let strLength2: number = (someValue as string).length;
}
