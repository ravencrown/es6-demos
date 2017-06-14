function test() {
    let a = 1;
    console.log(a);
}

test(); // 1

/*
    块级作用域
 */

function test() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i) // ReferenceError
}

test();

/*
    let 不允许在同一个作用域内重复声明同一个变量
 */

function test() {
    let a = 1;
    let a = 2;
}

test(); // Module build failed: Duplicate declaration "a"

/*
    let不存在变量提升
 */

 function test() {
     console.log(a);
     let a = 1;
 }

test(); // ReferenceError
