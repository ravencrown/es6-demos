/**
 *  es6 数据结构
 *  Set - WeakSet 的用法
 *  Map - WeakMap 的用法
 */

{
    let list = new Set();
    list.add(5).add(4).add(2);

    console.log("size", list.size);

}

{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);
    console.log("size", list.size);
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);

    console.log("size", list);

    let arr = [1,2,3,4,"2",3,4,5,6,4,3,"5"];
    let list2 = new Set(arr);
    console.log("unique", list2);
}

{
    let arr = ["add", "delete", "clear", "has"];
    let list = new Set(arr);

    for(let key of list.keys()) {
        console.log("keys", key);
    }

    for(let value of list.values()) {
        console.log("values", value);
    }

    for(let value of list) {
        console.log("value2", value);
    }

    for(let [key, value] of list.entries()) {
        console.log("entries", key, value);
    }

    list.forEach( (item) => {
        console.log("item", item);
    });
}

{
    // WeakSet 的元素只能是对象
    // size, clear, 遍历 都没有
    let weakList = new WeakSet();

    let arg = {};
    weakList.add(arg);
    // weakList.add(1); // Invalid value used in weak set
    console.log("weakList", weakList);



}

/** Map  */

{
    let map = new Map();
    let arr = ["123"];

    map.set(arr, 456);
    console.log("map", map, map.get(arr));

}

{
    let map = new Map([["a"], ["b", 234]]);
    console.log("map", map);
    console.log("size", map.size);
    console.log("delete", map.delete("a"), map);
    console.log("clear", map.clear(), map);
} 

{
    // WeakMap
    let weakMap = new WeakMap();
    var o = {};
    weakMap.set(o, 123);
    console.log(weakMap.get(o));
}

/**
 * Map 与 Array 的比较
 */

{
    // 数据结构横向对比：增，查，改，删
    let map = new Map();
    let array = [];

    // 增
    map.set("t", 1);
    array.push({t:1});

    console.info("map-array", map, array);

    // 查
    let map_exist = map.has("t");

    let array_exist = array.find( item => item.t);

    console.info("map-array", map_exist, array_exist);

    // 改
    map.set("t", 2);
    array.forEach(item => item.t ? item.t = 2 : "");

    console.info("map-array", map, array);

    // 删
    map.delete("t");
    
    // let index = array.findIndex(item => item.t);
    let index = array.findIndex(item => item.t);

    array.splice(index, 1);

    console.info("map-array-empty", map, array);
}


/**
 * Set 与 Array 的比较
 */

{   
    // set-array 数据结构横向对比：增，查，改，删
    let set = new Set();
    let array = [];

    // 增
    set.add({t:1});
    array.push({t:1});

    console.info("set-array", set, array);

    // 查
    let set_exist = set.has({t:1});
    let array_exist = array.find(item => item.t);

    console.info("set-array", set_exist, array_exist);

    // 改
    set.forEach(item => item.t ? item.t = 2 : "");
    array.forEach(item => item.t ? item.t = 2 : "");

    console.info("set-array-modify", set, array);

    // 删
    set.forEach(item => item.t ? set.delete(item) : "");
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.info("map-array-empty", set, array);
}

/**
 * Map & Set & Object 的对比
 */

{
    let item = {t:1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    // 增
    map.set("t", 1);
    set.add(item);
    obj["t"] = 1;
    console.info("map-set-obj", map, set, obj);

    // 查
    console.info({
        map_exist: map.has("t"),
        set_exist: set.has(item),
        obj_exsit: "t" in obj
    });

    // 改
    map.set("t", 2);
    item.t = 2;
    obj["t"] = 2;
    console.info("map-set-obj-modify", obj, map, set);

    // 删
    map.delete("t");
    set.delete(item);
    delete obj["t"];
    console.info("map-set-obj-empty", obj, map, set);

}





