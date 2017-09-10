/**
 * class 的概念
 * 基本语法
 * class 的继承
 * class 静态方法
 * class 静态属性
 * getter
 * setter
 */

{
    // 基本定义和生成实例
    class Parent {
        constructor(name = "chengx") {
            this.name = name;
        }
    }

    let v_parent = new Parent("v");
    console.log("constrcutor", v_parent);
}

{
    // 继承
    class Parent {
        constructor(name = "chengx") {
            this.name = name;
        }
    }

    class Child extends Parent {
        
    }

    console.log("子类", new Child());
}

{
    // 继承
    class Parent {
        constructor(name = "chengx") {
            this.name = name;
        }
    }

    class Child extends Parent {
        constructor(name = "child") {
            super(name); // 继承父类的this
            this.type = "child";
        }
    }

    console.log("子类", new Child("chengx2"));
}

{
    // setter getter
    class Parent {
        constructor(name = "chengx") {
            this.name = name;
        }

        get longName() {
            return "my name" + this.name;
        }

        set longName(value) {
            this.name = value;
        }
    }

    let v = new Parent();

    console.log("getter", v.longName);
    console.log("setter", v.longName = "123");

    var descriptor = Object.getOwnPropertyDescriptor(Parent.prototype, "longName");
    console.log("get" in descriptor);
    console.log("set" in descriptor);
}

{
    // 静态方法
    class Parent {
        constructor(name = "chengx") {
            this.name = name;
        }

        static tell() {
            console.log("tell");
        }
    }

    Parent.tell();

}

{
    // 静态属性
    class Parent {
        constructor(name = "chengx") {
            this.name = name;
        }

        static tell() {
            console.log("tell");
        }
    }

    Parent.type = "test";
    console.log("静态属性", Parent.type);

}


