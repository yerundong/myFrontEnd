// ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为【浏览器和服务器】通用的模块解决方案。
// 其模块功能主要由两个命令构成：export和import。
// 而在js运行时会进行三件事：1语法分析  2.预编译  3.解释执行
// ES6 module的语法是静态的，静态的语法意味着可以在【编译时】确定导入和导出，更加快速的查找依赖，但只能写在【模块顶层】
// 使用 import 被导入的变量是只读的，可以理解默认为 const 装饰
// 使用 import 被导入的变量是与原变量绑定/引用的，可以理解为 import 导入的变量无论是否为基本类型都是【引用传递】

// export命令可以出现在模块的任何位置，只要处于【模块顶层】就可以。如果处于块级作用域（包括命名空间）内，就会报错
class Clas1 {
    name: string;
    age: number;
}
class Clas2 {
    name: string;
    age: number;
}
interface interf1 {
    [pro: string]: any
}
let obj1: interf1 = {
    name: 1,
}
obj1.name = 'a';

export { Clas1, obj1 }

