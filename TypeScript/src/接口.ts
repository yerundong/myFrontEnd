{
    // 接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用
    // 在面向对象语言中，接口（Interfaces）是一个很重要的概念，[接口是一种规范的定义，它定义了行为和动作的规范]，在程序设计里面，
    // 接口起到一种[限制和规范]的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，
    // 也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。 typescrip中的接口类似于java，
    // 同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等！
    // 需要注意接口不能转换为 JavaScript。 它只是 TypeScript 的一部分。
    // 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。

    // *属性接口：对对象的约束
    interface Person {
        name: string, // 必选属性
        age?: number,//可选属性
        readonly id: number,
        [propName: string]: any,  // 任意类型
    }
    // 对对象的约束
    let obj1: Person = {
        name: 'Lili',
        age: 15,
        id: 100001,
        job: 'programmer'
    }

    // 对传入对象的约束
    let fn1 = (x: Person) => x;

    // 可以约束一个确定的值
    interface Intfc1 {
        a: number,
        b: 123
    }
    let obj2: Intfc1 = {
        a: 1,
        b: 123
    }
    // 如果需要多传属性c，又没有定义任意类型，可以使用类型断言：
    // 不过还是推荐使用任意类型[pro: string]: any
    let obj3: Intfc1 = {
        a: 1,
        b: 123,
        c: 555
    } as Intfc1;

    // *函数类型接口：对方法传入的参数以及返回值进行约束　　　
    interface Intfc2 {
        (x: number, y: number): boolean
    }
    // 使用了函数类型的接口，函数还需要显式地表明形参ab，但可以不同
    // 函数可以省略参数类型和返回类型的约束，如果不省略，须要和接口一致。
    let fn2: Intfc2 = (a, b) => a > b;
    // console.log(fn2(1, 2));

    // *可索引接口：对数组和对象的约束（不常用）　
    // 数组
    interface Intfc3 {
        [idx: number]: number
    }
    let arr1: Intfc3 = [1, 2, 3];

    // 对象
    interface Intfc4 {
        [pro: string]: number,
        readonly length: number
    }
    let obj4: Intfc4 = {
        name: 555,
        length: 1
    };
    // console.log(obj4);

    // *类类型接口：对类的约束和抽象类有点相似
    // 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。
    // 接口不能对构造函数约束， constructor存在于类的静态部分，所以不在检查的范围内。
    // 类类型接口可以算做抽象类的子集，只不过作用小于抽象类
    interface Intfc5 {
        name: string;
        getName(x: string):string;
    }
    
    class Clas1 implements Intfc5{
        constructor(public name: string){
        }
        getName(x: string): string{
            return this.name
        }
    }
    let instanc1 = new Clas1('lisi');

    // *继承接口
    // 和类一样，接口也可以相互继承。
    // 一个接口可以继承多个接口，创建出多个接口的合成接口。
    interface Carrier {
        isCarrier: boolean;
    }
    interface Tool {
        isTool: boolean;
    }
    interface Car extends Carrier {
        isCar: boolean;
    }

    interface Bus extends Car {
        isBus: boolean;
    }
    interface Bus extends Tool {
        isBus: boolean;
    }
    let bus: Bus = {
        isCarrier: true,
        isCar: true,
        isBus: true,
        isTool: true
    }

    // *接口也可以继承类
    // 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
    // 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。
    abstract class Clas2 {
        abstract a: string
        abstract b: number
        abstract fn():string
    }
    interface Intfc6 extends Clas2{
        c: boolean
    }
    let obj5: Intfc6 ={
        a: 'aaa',
        b: 123,
        c: true,
        fn(){
            return 'aaa'
        }
    }

    // *混合类型
    // 一个对象可以同时做为函数和对象使用，并带有额外的属性。
    interface Counter {
        (start: number): string;
        interval: number;
        reset(): void;
    }
    
    function getCounter(): Counter {
        let counter = <Counter>function (start: number) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    
    let c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
   
}