/*import和export的复合写法，可以达到同时导入和导出文件*/
//import {a} from './export';
//export {a as ka};

//以上写法可以简写成:
export {a as ka} from './export';
//console.log(ka)
//同样的，还有：
//普通
//export {a} from './export';
//默认
//export {default} from './export';
//整体
//export * from './export';
