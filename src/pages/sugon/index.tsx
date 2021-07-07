import React, {useRef} from 'react'
const Index:React.FC=()=>{
    const InputRef=useRef<any>(null);
    function getInput(){
        console.log(InputRef.current.value)
    }
    return (<div>
        9999
        <div>

            <input type="text" ref={InputRef}/>
        </div>
        <div>
            <button onClick={()=>{getInput()}}>获取input信息</button>
        </div>
    </div>)
}

export default  Index;