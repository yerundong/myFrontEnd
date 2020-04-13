{
    // 在实际应用中，有的变量只有几种可能取值。如人的性别只有两种可能取值，星期只有七种可能取值。
    // 所谓枚举是指将有限的数据一一列举出来，放在一个容器里，方便取值。
    // 成员都是只读属性 readonly
    // 使用枚举很简单：通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：
    // 即正向映射（ name -> value）和反向映射（ value -> name）

    // 数字枚举
    // 定义了一个数字枚举，成员会默认从0开始自动增长
    enum enum1 {
        aaa,
        bbb,
        ccc,
        ddd
    }
    // console.log(enum1);

    // 成员设定从5开始自动增长
    enum enum2 {
        aaa=5,
        bbb,
        ccc,
        ddd
    }
    // console.log(enum2);

    enum enum3 {
        woman = 0,
        man = 1
    }
    function someDeal (gender: enum3) {
        console.log(gender);
    }
    // someDeal(enum3.man);
    
    // 每个枚举成员都带有一个值，它可以是 常量或 计算出来的。
    // 数字枚举可以被混入到计算过的和常量成员。 但含字符串值成员的枚举中不允许使用计算值。
    // 函数计算的成员下一位B必须手动给值
    let fn1 = function () {
        return 1
    }
    enum enum4 {
        A = fn1(),
        B = 2+1, 
        C,
    }
    // console.log(enum4);

    // *字符串枚举
    // 字符串枚举的每个成员都必须手动给值（用字符串字面量），或另外一个字符串枚举成员进行初始化。
    // 字符串枚举没有自增长的行为，也没有反向映射
    enum enum5 {
        Up = "UP",
        Down = "DOWN",
        Left = "LEFT",
        Right = "RIGHT",
    }
    // console.log(enum5);

    // *异构枚举
    // 从技术的角度来说，枚举可以混合字符串和数字成员，但不建议这样做
    // 字符串成员下一位必须手动给值
    enum enum6 {
        A,
        Left = "LEFT",
        Right = "RIGHT",
        C=555,
        Up = "UP",
    }
    // console.log(enum6);

    // *const 常量枚举
    // 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。
    // 避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问
    // 量枚举不允许包含计算成员
    // 用了babel就不能用const enum
    // const enum enum7 {
    //     A,
    //     B,
    //     C,
    // }
    // console.log(enum7);// error
    // console.log(enum7.A);

    // *外部枚举（？？？？？？？？？）
    // declare enum enum8 {
    //     A = 1,
    //     B,
    //     C = 2
    // }
}