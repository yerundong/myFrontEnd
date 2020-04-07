{
    // 基础写法
    class Cla1 {
        constructor(x:number, y:number){
            this.total = x+y
        };
        total: number;// ts里必须属性必须在类中写出来，js不用
        getTotal(){
            console.log(this.total);
        }
    }

    let instanc1 = new Cla1(1, 2);
    // console.log(instanc1);
    // instanc1.getTotal();

    // 继承
    class Cla2 extends Cla1{
        constructor(x:number, y:number){
            // 派生类写了constructor必须调用super
            super(x, y);
            this.tips = 'x+y总和是：'
        };
        readonly tips;
        contotal(){
            console.log( this.tips + this.total);
        }
    }
    let instanc2 = new Cla2(3, 4);
    // console.log(instanc2);
    // instanc2.contotal();

    // 公共，私有与受保护的修饰符
    // 默认为 public
    // 当成员被标记成 private时，它就不能在声明它的类的外部访问。比如：version
    // protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
    // 但protected成员也不能再不能在类外访问
    // static 静态属性/方法，其实是类对象下自身方法，不会被实例继承，只能直接通过类来调用
    class Cla3 {
        public constructor(x:number, y:number, public info:any = 'haha'){
            // 构造函数可以使用public info:any这种语法，相当于this.info = info 
            this.total = x+y;
            this.version = 'v3.0';
            this.age = y;
        };
        public total: number;// ts里必须属性必须在类中写出来，js不用
        private version: string;
        protected age: number;
        static caption:string = 'class demo';
        public getTotal(){
            console.log(this.total);
        }
        static consCaption(){
            console.log(Cla3.caption);
        }
    }
    let instanc3 = new Cla3(1, 2);
    // instanc3.version;//error 属性“version”为私有属性，只能在类“Cla3”中访问。
    // instanc3.age;// 属性“age”受保护，只能在类“Cla3”及其子类中访问。
    // console.log(instanc3);
    // console.log(Cla3.caption);
    // Cla3.consCaption()

    class Cla4 extends Cla3 {
        public consfn(){
            // this.version// error 属性“version”为私有属性，只能在类“Cla3”中访问。
            console.log(this.age);// age可以在超类和所有派生类中访问
        }
    }
    let instanc4 = new Cla4(1, 2);
    // instanc4.version;//error 属性“version”为私有属性，只能在类“Cla3”中访问。
    // instanc4.age;// 属性“age”受保护，只能在类“Cla3”及其子类中访问。
    // console.log(instanc4);

    // 类型兼容
    // TypeScript使用的是【结构性类型系统】。 当我们比较两种不同的类型时，并不在乎它们从何处而来，如果所有成员的类型都是兼容的，
    // 我们就认为它们的类型是兼容的。
    // 然而，当我们比较带有 private或 protected成员的类型的时候，情况就不同了。 如果其中一个类型里包含一个 private成员，那么只有当另外一个
    // 类型中也存在这样一个 private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。
    class Animal {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }
    
    class Rhino extends Animal {
        constructor() { super("Rhino"); }
    }
    
    class Employee {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }
    
    let animal = new Animal("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");
    
    // 因为 Animal和 Rhino共享了来自 Animal里的私有成员定义 private name: string，因此它们是兼容的。
    // Employee却不兼容，尽管 Employee里也有一个私有成员 name，但它明显不是 Animal里面定义的那个。
    animal = rhino;
    // animal = employee; // 错误: Animal 与 Employee 不兼容.

    // *构造函数也可以被标记成 protected。 这意味着【这个类不能在包含它的类外被实例化，但是能被继承】。比如，
    class Person1 {
        protected name: string;
        protected constructor(theName: string) { this.name = theName; }
    }
    
    // Employee1 能够继承 Person1
    class Employee1 extends Person1 {
        private department: string;
    
        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }
    
        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }
    
    let howard = new Employee1("Howard", "Sales");
    // let john = new Person1("John"); // 错误: 'Person' 的构造函数是被保护的.

    // 存取器（get/set）
    // typeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
    // 不带有 set的存取器自动被推断为 readonly
    class Cla5 {
        constructor(){
            this.age = 0;
        }
        private _age: number|string;
        get age(): number|string{
            return `${this._age}岁` 
        };
        set age(nval: number|string){
            this._age = nval;
        }
    }
    let instanc5 = new Cla5();
    instanc5.age = 66;
    // console.log(instanc5.age);
    // console.log(instanc5);
    
    // 抽象类
    // 抽象类做为其它派生类的基类使用。 不能直接被实例化。 
    // 有点像【类类型接口】，但抽象类可以包含成员的实现细节。【类类型接口】可以看做 抽象类 的一种；
    // 抽象类中除了可以像【类类型接口】那样只定义不实现外，还可以部分实现，而且也可以使用类型修饰符。
    // abstract 关键字是用于定义[抽象类]和在[抽象类内部定义抽象方法]。

    abstract class AbsClas1{
        info : string;
        // 抽象属性，约束了子类属性的类型
        abstract time: Date;
        constructor(private name: string, private age: number) {
            this.info = `I am ${name}, I am ${age} years old!`
        }
        consInfo(): void{
            console.log(this.info);
        }
        // 抽象方法，约束了子类方法的类型
        abstract getInfo(x: number): string
    }
    class Cla6 extends AbsClas1{
        // 子类必须定义所继承的抽象类的抽象属性和方法，并且类型保持一致
        time: Date;
        getInfo(){
            return this.info
        }
    }
    // 意思是instanc6的类型是Greeter
    let instanc6: Cla6 = new Cla6('zhangsan', 16);
    // console.log(instanc6);

    // 把类当做接口使用
    class Point {
        x: number;
        y: number;
    }
    
    interface Point3d extends Point {
        z: number;
    }
    let point3d: Point3d = {x: 1, y: 2, z: 3};

    // 抽象类与接口一起使用（？？？？）
}