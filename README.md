# ES6 Demo

这个项目的功能有以下几部分，先编写一个编译es6的任务自动化+热更新，之后在app/js/class下编写es6 demo，
记得在app/js/index.js中添加es6 demo的JS。

## 项目构建

- 项目的基础架构
- 任务自动化Gulp
- 编译工具（Babel、Webpack）

## 技术栈

本项目涉及技术栈包括Gulp/Webpack，ES6语法、ejs模板语言、express脚手架

- 利用yargs自定义命令

## 任务自动化脚本编写

- tasks/scripts.js 处理Javascript文件的任务
- tasks/pages.js 处理ejs文件的任务
- tasks/css.js 处理css文件的任务
- tasks/server.js 服务启动的任务
- tasks/browser.js 监听js/ejs/css的任务
- tasks/clean.js 清空指定目录文件的任务
- tasks/bulid.js 把所有的任务串起来
- tasks/default.js 默认的gulp任务

## ES6语法

es6的demo放在app/js/class目录下，先用下面的代码执行es6的自动编译任务

```javascript
gulp --watch
```

之后在浏览器中输入localhost:3000，就能在浏览器中控制台看到es6 demo的结果，很方便吧。


- 数组操作
    - 填充、类型转换、遍历等
- [字符串扩展](https://github.com/guangxiao/es6-demos/issues/4)
    - 字符串模板、字符处理、补白操作
- 函数扩展
    - 箭头函数、rest参数、默认值
- 对象区别
    - 省略的写法、属性表达式、严格比较、对象拷贝
- 数据结构
    - 新增Map/Set
- 异步操作
    - Promise
    - Generator
    - async和await
- Class操作
    - 类的声明、继承、构造函数静态函数、getter和setter
- 对象代理
    - 让代码更安全
- 遍历器
    - 允许任意数据结构自定义遍历接口
- 模块化（Module）

# License

[MIT License](https://en.wikipedia.org/wiki/MIT_License)
