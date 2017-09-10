{
    // Array.from
    // Array.of
    // copyWithin
    // find/findIndex
    // fill
    // entries/key/values
    // includes
}

{
    // Array.of 将一组值转换为数组
    let arr = Array.of(1,2,3,4,6,12);
    console.log("arr:", arr);
    
    let empty = Array.of();
    console.log(empty);

    console.log(Array.of(1));
    console.log(Array.of(undefined));
}

{
    // Array.from 
    let p = document.querySelectorAll("p");
    let pArr = Array.from(p);

    pArr.forEach(item => {
        console.log(item.textContent);
    });

    console.log(Array.from([1,3,5], function (item) {
        return item * 2;
    }));
}

{
    // fill
    console.log("fill-7", [1, "a", undefined].fill(7));
    console.log("fill,pos", ["a","b","c"].fill(7,1,2));
}

{
    // entries(), keys(), values()
    for(let index of ["1", "c", "ks"].keys()) {
        console.log("keys", index);
    }

    for(let value of ["1", "c", "ks"].values()) {
        console.log("values", value);
    }

    for(let [index, value] of ["1", "c", "ks"].entries()) {
        console.log("values", index, value);
    }
}

{
    // copyWithin
    console.log([1,2,3,4,5].copyWithin(0,3,4));
    console.log([].copyWithin.call({length: 5,3: 1}));
}

{
    // 查找 find & findIndex
    console.log([1,2,3,4,5].find(function(item) {
        return item > 3; // 4
    }));

    console.log([1,2,3,4,5].findIndex(function(item) {
        return  item > 3; // 
    }));

    console.log([1,2,3,4,5].findIndex((n) => {
        return n > 3;
    }));

}

{
    console.log("number", [1,2,NaN].includes(1));
    console.log("number", [1,2,NaN].includes(NaN));
}

