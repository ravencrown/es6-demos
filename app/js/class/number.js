{
    // 二进制：0b
    console.log("B",0B111110);
    console.log("b",0b111110);
    // 八进制：0o
    console.log("o",0o767);
    console.log("O",0O762);
}

{
    // Number.isFinite 检查一个数值是否为非无穷
    console.log("15",Number.isFinite(15));
    console.log("NaN",Number.isFinite(NaN));
    console.log("1/0",Number.isFinite(1/0));
}

{
   console.log("NaN",Number.isNaN(NaN));
   console.log("0",Number.isNaN(0));
}

{
    // 判断是不是整数
    console.log("Number.isInteger",Number.isInteger(23));
    console.log("Number.isInteger",Number.isInteger(23.1));
    console.log("Number.isInteger",Number.isInteger(23.0));
}

{
    // Number.parseInt === parseInt
    // Number.parseFloat === parseFloat
}

{
    // ES6 极小常量，极大常量
    console.log("Number.EPSILON", Number.EPSILON);
    console.log("Number.MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER);
    console.log("Number.MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER);
}

{
    // Number.MAX_SAFE_INTEGER & Number.MIN_SAFE_INTEGER
    // 判断一个整数是否落在安全整数范围内：Number.isSafeInterger()
    console.log("Number.isSafeInteger");
    console.log("10", Number.isSafeInteger(10));
    console.log("a", Number.isSafeInteger("a"));
}

{
    // Math.trunc 去除一个数的小数部分，返回整数部分
    console.log(4.1, Math.trunc(4.1));
    
    // Math.sign 判断一个数是正数还是负数
    console.log(-5, Math.sign(-5));
    console.log(0, Math.sign(0));
    console.log(1, Math.sign(1));
    console.log("1", Math.sign("1"));
    console.log("foo", Math.sign("foo"));
}

{
    // 立方根 Math.cbrt()
}
