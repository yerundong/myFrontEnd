// Node使用CommonJS模块规范，内置的require命令用于加载模块文件。
// require命令的基本功能是，【读入并执行】一个JavaScript文件，然后返回该模块的exports对象。如果没有发现指定模块，会报错。
// CommonJS模块规范是在【代码执行阶段】导入和导出的，emModule是在编译阶段
// 详细参考：https://javascript.ruanyifeng.com/nodejs/module.html

// 根据参数的不同格式，require命令去不同路径寻找模块文件。
// （1）如果参数字符串以“/”开头，则表示加载的是一个位于[绝对路径]的模块文件。比如，require('/home/marco/foo.js')将加载/home/marco/foo.js。
// （2）如果参数字符串以“./”或“../”开头，则表示加载的是一个位于[相对路径]（跟当前执行脚本的位置相比）的模块文件。
//     比如，require('./circle')将加载当前脚本同一目录的circle.js。
// （3）如果参数字符串不以“./”、“/”、“../”开头，则表示加载的是一个【默认提供的核心模块】（位于Node的系统安装目录中），
//     或者一个位于各级node_modules目录的已安装模块（全局安装或局部安装）。即是npm安装的模块

// 第一次加载某个模块时，Node会缓存该模块。以后再加载该模块，就直接从缓存取出该模块的module.exports属性。

{
    let myModule1 = require('./模块1');
    myModule1.new = 555;
    console.log(myModule1);
    
    // 取得的是缓存，所以还是555
    let myModule2 = require('./模块1');
    // console.log(myModule2.new);// 555

    // 加载整个目录时候，默认是index.js。只需要在该目录中添加package.json配置文件，在这个文件中进行指定默认的入口
    // let myModule2 = require('../CommonJs');

    // 如果想重新导入最新的模块，不想导入缓存，可以删除缓存。
    // 所有缓存的模块保存在require.cache之中，如果想删除模块的缓存，可以像下面这样写。

    // 删除指定模块的缓存
    // console.log(require.cache);
    // delete require.cache['./src/模块/CommonJs/模块1.ts'];
    let myModule3 = require('./模块1');
    // console.log(myModule3.new);// undefine

    // 删除所有模块的缓存
    // Object.keys(require.cache).forEach(function (key) {
    //     delete require.cache[key];
    // })
    


}