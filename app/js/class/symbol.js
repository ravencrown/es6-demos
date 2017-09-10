{
    // 声明
    let a1 = Symbol();
    let a2 = Symbol();

    console.log("Symbol", a1 === a2);

    let a3 = Symbol.for("a3");
    let a4 = Symbol.for("a3");

    console.log("Symbol.for", a3 === a4);
}

{
    // symbol 用法
    let a1 = Symbol.for("abc");
    let obj = {
        [a1]: "123",
        "abc": 345,
        c: 456
    };

    console.log("obj", obj);

    // symbol 不会在 for-in 和 for-of 循环中出现
    for(let [key, value] of Object.entries(obj)) {
        console.log("let of", key, value);
    }

    // Object.getOwnPropertySymbols 可以取到 symbol 属性值
    // Object.getOwnPropertySymbols 返回数组
    Object.getOwnPropertySymbols(obj).forEach( (item) => {
        console.log(obj[item]);
    });

    // 取到所有属性 Reflect
    Reflect.ownKeys(obj).forEach( (item) => {
        console.log("reflect", item, obj[item]);
    });
    
}