{
    // *泛型函数
    // 在TypeScript中，泛型是一种创建可复用代码组件的工具。这种组件不只能被一种类型使用，而是能被[多种类型复用]。
    // 类似于参数的作用，泛型是一种用以增强类（classes）、类型（types）和接口（interfaces）能力的非常可靠的手段。
    // 泛型可以适用于多个类型，不同于any，它不会丢失信息，保持准确性，传入数值类型并返回数值类型，保证类型安全。
    // 一般用T，也可以用其他字母
    let fn1 = function <T>(arg: T): T {
        return arg
    }
    // 这里明确的指定了T是number类型，并做为一个参数传给函数，使用了<number>
    fn1<number>(123);
    // fn1<number>('aaa');// 报错

    // 第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
    fn1('aaa');
    // *注意我们没必要使用尖括号（<>）来明确地传入类型；编译器可以查看myString的值，然后把T设置为它的类型。 
    // 类型推论帮助我们保持代码【精简和高可读性】。
    // 如果编译器不能够自动地推断出类型的话，在一些复杂的情况下，这是可能出现的，那就只能像上面<number>这样传入。

    // T类型变量代表的是任意类型，不确定是否有length属性，所以不能用
    let fn2 = function <T>(arg: T): T {
        // arg.length;  // Error: T doesn't have .length
        return arg;
    }

    let fn3 = function <T>(arg: T[]): T[] {
        console.log(arg.length);
        return arg;
    }
    // fn3<number>([1,2,3])

    // *泛型接口
    // 这是一个函数接口
    interface Intfc1 {
        <T>(arg: T): T[]
    }

    let fn4: Intfc1 = <T>(num: T): T[] => {
        return [num]
    }
    fn4<number>(444);

    // 范围：G > T,所以我们可以省略G或T其中一个，它们都是实现（调用）的时候去传入G（或T）
    interface Intfc2<G> {
        (arg: G): G[]
    }

    let fn5: Intfc2<number> = (num) => {
        return [num, 666]// 这里已经确定为number了
    }
    fn5(5655);

    // *泛型类
    // 泛型类看上去与泛型接口差不多。 泛型类使用（ <>）括起泛型类型，跟在类名后面。
    // 这是一个普通的泛型类 
    // 泛型类指的是实例部分的类型，所以【类的静态属性不能使用这个泛型类型】。
    class Clas1<T> {
        name: T;
        add() { };
        constructor(x: T) {
            this.name = x;
        }
    }

    let instanc1 = new Clas1<number>(1111);
    // console.log(instanc1);

    // 这是一个 泛型抽象类 
    abstract class Clas2<T> {
        constructor(public name: string, public age: T) {

        }
        abstract getName(): string;
        getAge(): T {
            return this.age
        }
    }

    class Clas3 extends Clas2<number> {
        getName() {
            return this.name
        }
    }
    let instanc3 = new Clas3('李强', 35);
    // console.log(instanc3);

    // *泛型约束
    // 泛型约束就是为泛型本身定义一些约束条件
    interface Intfc3 {
        length: number
    }
    // 现在这个泛型函数被定义了约束，必须传入length属性的参数
    let fn6 = <T extends Intfc3>(x: T) => {
        console.log(x.length);
    }
    // fn6([123]);
    // fn6({
    //     length: 555
    // });

    // *在泛型里使用类类型（没搞懂）
    function create<T>(c: {new(): T; }): T {
        return new c();
    }
}