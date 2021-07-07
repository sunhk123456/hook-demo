// import axios from 'axios'

export interface msgState {
    name:string,
    age:string,
    grade:string
}

const resData:msgState[]=[{
    name:"李四",
    age:"18",
    grade:"高二"
},{
    name:"王五",
    age:"20",
    grade:"大三"
}]
export const getList:any=(params:string)=>{

    return new Promise<msgState[]>((resolve:any) => {
        // axios.get("/aaa").then(res=>{
        //     console.log(res)
        // })
if (params==="yes"){
    //resolve里面放的数据是传给页面的数据
    resolve(resData)
}
    })
}