var arr = [{
        type: "zhangsan",
        age: "18"
    }, {
        type: "zhangsanlisi",
        age: "19"
    },];
var b = arr.find(function (ele) { return ele.type === "zhangsan"; });
console.log(b);
