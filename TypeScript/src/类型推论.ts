{
    // TypeScript里，在有些没有明确指出类型的地方，类型推论会帮助提供类型。

    // *基础
    // 分配类型“number”
    let x = 3;
    // x = 'ssss';// error

    // *最佳通用类型
    // 分配类型number[]
    let y = [0, 1, null];
    // y = ['aaa'];// error

    // *上下文类型(???????)
    

}