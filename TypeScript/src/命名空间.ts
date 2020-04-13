// // 想让这些接口和类在命名空间之外也是可访问的，需要使用 export 关键字修饰变量声明
// // 这个export不是模块的export
// // 用了babel就不能用namespace
// namespace myPureLife {
//     let str1:string = 'hello';
//     export let str2:string = 'holy';
//     export namespace pureLifeCome{
//         export let str3:string = 'come';
//         export namespace pureLifeGo{
//             export let str4:string = 'Go';
//             // 可以随意获取上级空间的变量
//             // console.log(myPureLife.str2);
//             // console.log(pureLifeCome.str3);
//         }
//     }
//     // console.log(str2);
// }

// namespace myHappyLife {
//     export let str1:string = 'yeakol';
//     // console.log(myHappyLife);
//     // console.log('in_myHappyLife', myPureLife);
// }

// // 获取命名空间中变量
// // console.log('outside',myPureLife.str2);
// // console.log('outside',myHappyLife.str1);

// // 获取命名空间中的命名空间
// // 需要使用 import 关键字
// // console.log('outside',myPureLife.pureLifeCome.str3);// come
// // // or
// import pureLifeCome = myPureLife.pureLifeCome;
// // console.log('outside', pureLifeCome.str3);// come
// import pureLifeGo = myPureLife.pureLifeCome.pureLifeGo;
// // console.log('outside', pureLifeGo.str4);// Go

// // *外部命名空间(???)

