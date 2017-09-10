{
    let obj = {
        time: "2017-03-11",
        name: "net",
        _r: 123
    };

    let monitor = new Proxy(obj, {
        // 拦截对象属性的读取
        get(target, key) {
            console.log(`getting ${key}`);
            return target[key].replace("2017", "2018")
        },
        // 拦截对象属性设置
        set(target, key, value) {
            console.log(`setting ${key}`);
            if (key === "name") {
                return target[key] = value;
            } else {
                return target[key];
            }
        },
        // 拦截 key in object 操作
        has(target, key) {
            if (key === "name") {
                return target[key];
            } else {
                return false;
            }
        },
        // 拦截 delete
        deleteProperty(target, key) {
            if (key.indexOf("_") > -1) {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        },
        // 拦截 Object.keys, Object.getOwnPropertySymbols, Object.getOwnpropertyNames
        ownKeys(target) {
            return Object.keys(target).filter(item => item != "time");
        }

    });

    console.log("get", monitor.time);
    monitor.time = "2018";
    monitor.name = "chengx";
    console.log("set", monitor.time, monitor);

    console.log("has", "name" in monitor, "time" in monitor);

    // delete monitor.time;
    // console.log("delete", monitor);

    // delete monitor._r;
    // console.log("delete", monitor);

    console.log("ownKeys", Object.keys(monitor));

}

{
    // Reflect
    let obj = {
        time: "2017-03-11",
        name: "net",
        _r: 123
    };

    console.log("Reflect get", Reflect.get(obj, "time"));
    Reflect.set(obj, "name", "chengx");
    console.log(obj);
    console.log("Reflect has", Reflect.has(obj, "name"));
}

{
    // 校验模块
    function validator(target, validator) {
        return new Proxy(target, {
            _validator: validator,
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let va = this._validator[key];
                    if (!!va(value)) {
                        return Reflect.set(target, key, value, proxy);
                    } else {
                        throw Error(`不能设置 ${key} 到 ${value}`);
                    }
                } else {
                    throw Error(`${key} 不存在`);
                }
            }
        });
    }

    // 设置过滤选项
    const personValidators = {
        name(val) {
            return typeof val === "string"
        },
        age(val) {
            return typeof val === "number" && val > 18
        }
    }

    class Person{
        constructor(name, age) {
            this.name = name;
            this.age = age;
            // Person 实例以后，得到对 Person 实例对象代理的 proxy 对象
            return validator(this, personValidators);
        }
    }

    const person = new Person("chengx", 24);
    console.info(person);

    person.name = "chengx1";
    console.info(person);
}