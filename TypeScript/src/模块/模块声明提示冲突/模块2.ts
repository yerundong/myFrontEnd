// 测试不同文件声明冲突(??????)
// error: 无法重新声明块范围变量“test_declaration_conflict”。
// 之所以 tslint 会提示这个错误，是因为在 Commonjs 规范里，没有像 ESModule 能形成闭包的「模块」概念，所有的模块在引用时都默认被抛至全局，
// 因此当再次声明某个模块时，TypeScript 会认为重复声明了两次相同的变量进而抛错。
// 对于这个问题，最简单的解决方法是在报错的文件底部添加一行代码：export {}。这行代码会「欺骗」tslint 使其认为当前文件是一个 ESModule 模块
// 终极解决方法：使用插件@babel/plugin-transform-modules-commonjs ，可以将 ESModule 模块转换为符合 Commonjs 规范的代码
// let test_declaration_conflict = false;
// console.log(test_declaration_conflict);