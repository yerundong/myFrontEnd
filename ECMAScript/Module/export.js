/*
【export】导出
 	export可以导出任何一种数据类型
 	export命令可以出现在模块的任何位置，只要处于【模块顶层】就可以。如果处于块级作用域内，就会报错
*/
/*方式一：export+定义*/
export let a = 1;
export function fn1 () {}
export let obj1 = {
	a:1
}
/*方式二：export{变量名}*/
let arr1 = ['a',1];
let b = 2;
export {arr1,b};

/*方式三：export {变量名 as 重命名},import重命名的变量*/
let c = 3;
export {c as cc};

/*方式四：默认导出*/
//默认导出只能存在一个
//默认导出允许导出匿名变量和普通变量，但普通变量会赋值给default进行导出
//import默认的变量可以自己命名变量名,有两种方式：
//import{default as xx} from 'xx'
//import xx from 'xx' 

var d = 55;
//export default d;
export default 666;

//export default function () {
//	alert(777)
//}

//export default function f1() {
//	alert(888)
//}

/*方式五：复合写法,详见export_complex.js文件*/
