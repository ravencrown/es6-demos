{
    // 异步基本定义
    // let ajax = function(callback) {
    //     console.log("执行");
    //     setTimeout(function() {
    //         callback && callback.call();
    //     }, 1000);
    // };

    // ajax(function() {
    //     console.log("timeout1");
    // });

}   

{
    // let ajax = function() {
    //     console.log("执行2");
    //     return new Promise(function(resolve, reject) {
    //         setTimeout(function() {
    //             resolve();
    //         }, 1500);
    //     })
    // }; 

    // ajax().then(function() {
    //     console.log("promise", "timeout2");
    // });
}

{
    let ajax = function() {
        console.log("执行3");
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve();
            }, 1500);
        })
    };

    ajax()
        .then(function() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve();
            }, 2000);
        });
    })
        .then(function() {
        console.log("timeout3");
    });
}

{
    let ajax = function(num) {
        console.log("执行4");
        return new Promise(function(resolve, reject) {
            if (num > 5) {
                resolve();
            } else {
                throw Error("出错了");
            }
        })
    }

    ajax(6).then(function() {
        console.log("log", 6);
    }).catch(function(err) {
        console.log("catch", err);
    });

    ajax(3).then(function() {
        console.log("log", 3);
    }).catch(function(err) {
        console.log("catch", err);
    });
}

{
    // 所有图片加载完再加载页面 promise.all
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement("img");
            img.src = src;
            img.onload = function() {
                resolve(img);
            }
            img.onerror = function(err) {
                reject(err);
            }
        });
    }

    function showImgs(imgs) {
        imgs.forEach(function(img) {
            document.body.appendChild(img);
        });
    }

    // Promise.all([
    //     loadImg("http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg"),
    //     loadImg("http://pic49.nipic.com/file/20140927/19617624_230415502002_2.jpg"),
    //     loadImg("http://pic71.nipic.com/file/20150610/13549908_104823135000_2.jpg")
    // ]).then(showImgs);

}

{
    // 有一个图片加载完就添加到页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement("img");
            img.src = src;
            img.onload = function() {
                resolve(img);
            }
            img.onerror = function(err) {
                reject(err);
            }
        });
    }

    function showImgs(img) {
        var p = document.createElement("p");
        p.appendChild(img);
        document.body.appendChild(p);
    }

    Promise.race([
        loadImg("http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg"),
        loadImg("http://pic49.nipic.com/file/20140927/19617624_230415502002_2.jpg"),
        loadImg("http://pic71.nipic.com/file/20150610/13549908_104823135000_2.jpg")
    ]).then(showImgs)
}