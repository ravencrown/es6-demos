/**
 * 对象扩展
 * 1.简介表示法
 * 2.属性表达式
 * 3.扩展运算符
 * 4.Object 新增方法
 */

{
    // 简介标识法
    let o = 1;
    let k = 2;
    let es5 = {
        o: o,
        k: k
    };

    let es6 = {
        o,
        k
    }
    console.log(es5,es6);

    let es5_method = {
        hello: function() {
            console.log("hello");
        }
    };

    let es6_method = {
        hello() {
            console.log("hello");
        }
    };

    console.log(es5_method.hello(), es6_method.hello());
}

{
    // 属性表达式
    let a = "b";
    let es5_obj = {
        a: "c"
    };

    let es6_obj = {
        [a]: "c"
    };

    console.log(es5_obj, es6_obj);

    let es6_obj2 = {
        ["a" + "bc"]: 123
    };

    console.log(es6_obj2);

    var lastWord = "last hello";
    var es6_obj3 = {
        "first world": "hello",
        [lastWord]: "world"
    };

    console.log(es6_obj3["first world"], es6_obj3[lastWord], es6_obj3["last hello"]);
    
}


{
    // Object.is() 严格判断两个值是否相等
    console.log("字符串", Object.is("abc", "abc"), "abc" === "abc");
    console.log("数组", Object.is([],[]), [] === []);

    console.log("+0, -0", Object.is(+0, -0));
    console.log("NaN",Object.is(NaN, NaN));
}

{
    // Object.assign() 
    console.log("assign", Object.assign({a:"a"}, {b:"b"}));
}

{
    // Object.entries
    let test = {
        k: 123,
        o: 456
    };
    console.log("Object.entries", Object.entries(test));

    for(let [key, value] of Object.entries(test)) {
        console.log([key, value]);
    }
}

{
    // 扩展运算符
    let {a,b,...c} = {
        a: "test",
        b: "china",
        c: "ccc",
        d: "ddd"
    };
}


