import React, {useEffect, useRef, useState} from 'react'
import {getList, msgState} from "./api/sugonApi";

const Example: React.FC<any> = () => { //FC尖括号里面如果父组件传下来有props如name 可写const Example: React.FC<{name:string}> = () => {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState<number>(0);
    const [count2, setCount2] = useState<string>("");
    //定义"msg"变量 让其存放后台返回来的数据 便于页面渲染
    const [msg, setMsg] = useState<msgState[]>([]);
    const InputRef = useRef<any>(null);
    useEffect(() => {
        console.log("每次修改变量都会触发")
    });
    useEffect(() => {
        console.log("只在页面第一次加载的时候触发一次")
        document.title = `中科react前端`;
        //请求getList接口 传入参数yes   res是传回来的数据
        getList("yes").then((res: msgState[]) => {
            setMsg(res)
        })
    }, []);
    useEffect(() => {
        console.log("在输入信息后触发 修改的值为",InputRef.current.value)
        // console.log(InputRef.current.value);

    }, [count2]);
    return (<div>
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <div>
                <input type="text" ref={InputRef} onChange={() => {
                    setCount2(InputRef.current.value)
                }}/>

            </div>
            <h1>{count2}</h1>
            <table style={{border: "1px solid #000", margin: "10px"}}>
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>班级</th>
                </tr>
                </thead>
                <tbody>
                {
                    msg.map(ele => {
                        return (
                            <tr key={ele.name}>
                                <td>{ele.name}</td>
                                <td>{ele.age}</td>
                                <td>{ele.grade}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    </div>)
}

export default Example;