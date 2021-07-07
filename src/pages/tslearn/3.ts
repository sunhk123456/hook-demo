let arr=[{
    type:"zhangsan",
    age:"18"
},{
    type:"zhangsanlisi",
    age:"19"
},]
type a={
    type:string,
    age:string,

}
const b=arr.find(ele=>ele.type==="zhangsan") as a;

console.log(b)
