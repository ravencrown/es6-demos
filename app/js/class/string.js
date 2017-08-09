{
    // 字符 unicode 表示方法
    console.log('a', `\u0061`); // 正式范围为 \u0000 - \uFFFF
    console.log('s', `\u20BB7`); // 超出范围 0xFFFF

    console.log('s', `\u{20BB7}`); // 输出 𠮷

}

{
    // codePointAt()
    let s = '𠮷';
    console.log('length', s.length);
    console.log('0', s.charAt(0)); // 输出 0 �
    console.log('1', s.charAt(1)); // 输出 1 �

    // charCodeAt 只能取两个字节
    console.log('at0', s.charCodeAt(0)); // 输出 at0 55362
    console.log('at1', s.charCodeAt(1)); // 输出 at1 57271

    let s1 = '𠮷a';
    console.log('length', s1.length);
    console.log('code0', s1.codePointAt(0)); // 输出 code0 134071
    console.log('code0', s1.codePointAt(0).toString(16)); // 输出 code0 20bb7 -- 取前四个字节

    console.log('code1', s1.codePointAt(1)); // 输出 code1 57271 -- 取第三第四个字节
    console.log('code2', s1.codePointAt(2)); // 输出 code2 97(a) -- 取第五第六字节

}

{
    // 测试字符是由2个字节还是4个字节组成的 -- codePointAt()
    function is32bit(c) {
        return c.codePointAt(0) > 0xFFFF;
    }

    console.log(is32bit("𠮷"));
    console.log(is32bit("a"));
}

{
    // String.fromCodePoint() 码点返回对应字符
    console.log(String.fromCharCode("0x20BB7")); // 输出ஷ
    console.log(String.fromCodePoint("0x20BB7")); // 𠮷
}

{
    // 字符串遍历器接口
    let str = '\u{20BB7}abc';
    for (let i = 0; i < str.length; i++) {
        console.log('es5', str[i]);
    }
    
    for (let code of str) {
        console.log("es6", code);
    }
}

{
    // 判断字符串是不是包含某些字符 includes()
    let str = "string";
    console.log("include", str.includes("r")); // true
    console.log("include", str.includes("c")); // false
}

{
    // startsWith()
    let str = "string";
    console.log("start", str.startsWith("str")); // true
    console.log("start", str.startsWith("ctr")); // false
}

{
    // endsWith()
    let str = "string";
    console.log("end", str.endsWith("ng")); // true
    console.log("end", str.endsWith("dg")); // false
}

{
    // repeat()
    let str = "abc";
    console.log(str.repeat(2));
}

{
    // 模板字符串
    let name = "list";
    let info = "hello world";
    let m = `i am ${name}, ${info}`;
    console.log(m);
}

{
    // 字符串补全长度
    console.log("1".padStart(2, "0"));
    console.log("1".padEnd(3, "0"));
}

{
    // 标签模板
    // 
    let user = {
        name: "list",
        info: "hello world"
    };
    console.log(abc`i am ${user.name}, ${user.info}`);
    function abc(s, v1, v2) {
        console.log(s,v1,v2);
        return s+v1+v2;
    }
}

{
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}













