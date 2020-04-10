// Node 应用由模块组成，采用 CommonJS 模块规范，npm 的包都是 CommonJs 规范的
// 每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。
// CommonJS规范加载模块是【同步的】，也就是说，加载完成才可以执行后面的操作，
// Node.js主要用于服务器编程，模块一般都是存在【本地硬盘】中，加载比较快，所以Node.js采用CommonJS规范。
// commonsJS的加载机制，输入的是被输出值的【拷贝】。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值了。

// module.exports属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量。
namespace myModule {
    class Clas1 {
        name: string;
        age: number;
    }
    export class Clas2 {
        name: string;
        age: number;
    }
    interface interf1 {
        [pro: string]: any
    }
    export let obj1: interf1 = {
        name: 1,
    }
    obj1.name = 'a';
    // export {Clas1};// error 命名空间中不允许有导出声明。
}

let aaaa = 1;
module.exports = {
    myModule: myModule,
    a: aaaa
};

if(true){
    module.exports.b = 321;
}

// 输出的还是1，不会改变
aaaa = 2;
