{
    /**
     * 函数的扩展 新增特性
     * 1.参数默认值
     * 2.rest 参数
     * 3.扩展运算符
     * 4.箭头函数
     * 5.this绑定
     * 6.尾调用
     */
}

{
    // 默认值
    function test(x, y = "world") {
        console.log(x,y);
    }

    test("hello");
    test("hello", "china");
    test("hello", "");

    function log (x, y) {
        y = y || "world";
        console.log(x, y);
    }

    log("hello");
    log("hello", "china");
    log("hello", "");
}

{
    // 作用域
    let x = "test";
    function test2 (x, y = x) {
        console.log("作用域", x, y);
    }
    // test2("china");
    test2();
}

{
    // rest 参数
    function test(...arg) {
        console.log(arg);
        for(let v of arg) {
            console.log("rest", v);
        }
    }

    test(1,2,3,4,5,"a");
}

{
    // rest 
    function push(array, ...items) {
        items.forEach(function(item) {
            array.push(item);
            console.log(item);
        });
    }

    var a = [];
    push(a,2,3,1,4);
    console.log(a);
}

{
    // 扩展运算符
    console.log(...[1,2,4]); // 1 2 4
    console.log("a", ...[1,2,4]); // a 1 2 4

    function push(array, ...items) {
        array.push(...items);
    }

    var a = [];
    push(a, [1,2,3]);
    console.log(a);

    function add (x, y) {
        return x + y;
    }

    var numbers = [1,3,4,6,7];
    console.log(add(...numbers));
}

{
    // 箭头函数
    let arrow = v => v * 2; // 第一个 v 为参数。
    let arrow2 = () => 5; // 无参数 使用空括号

    console.log("arrow",arrow(3));
    console.log(arrow2());

}

{
    // 尾调用
    function tail(x) {
        console.log("tail", x);
    }

    function fx(x) {
        return tail(x); // 尾调用
    }

    fx(123);

}


