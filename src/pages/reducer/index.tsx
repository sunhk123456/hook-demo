import React,{useState,useReducer} from "react"




type countState=number;
interface actionState{
    type:string,
    paload:{
        name:string,
        num?:number
    }
}

function reducer(state:countState,action: actionState) {
    console.log(state)
    console.log(action)
    switch(action.type){
        case 'add': {
            if (action?.paload?.num){
                return state + action?.paload?.num;

            }else {
                return state + 1;

            }
        }
        case 'reset':
            return 0;
        case 'sub': {     if (action?.paload?.num){
            return state - action?.paload?.num;

        }else {
            return state - 1;
        }
        }
    }

return 10;
}


const Index:React.FC=()=>{
    const [count, dispatch] = useReducer(reducer, 0)
    const [state, setState] = useState( 0)
    const [txt, settxt] = useState( 0)
    const handle = () => {
        settxt(txt=>txt+1);
        console.log(txt)
        setTimeout(()=>{
            console.log(txt);  //1
            settxt(txt)
        },4000)
    };

    const flag:boolean=false;
    return (
        <div>
            aaa
            <h1>
                {count}
            </h1>
            <button onClick={() => {
                dispatch({type: "add",paload:{
                        name:"Lisi"
                    }});
            }}>添加</button>
            <button onClick={() => {
                dispatch({type: "sub",paload:{
                        name:"Lisi",
                        num:flag?10:undefined
                    }});
            }}>减少</button>
            <button onClick={() => {
                dispatch({type: "reset",paload:{
                        name:"Lisi"
                    }});
            }}>重置</button>
<div>
    <button onClick={()=> {
        setState(state + 1)
        handle()
    }}>1111111111</button>

    <h2>{state}</h2>
    <button onClick={()=>{
        console.log(txt)}}>aaa</button>
</div>
        </div>

    )

}
export default Index;