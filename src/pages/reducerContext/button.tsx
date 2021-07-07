import React, {useContext} from 'react'
import {ColorContext} from  './color'
const Button:React.FC=()=>{

    const {dispatch}=  useContext(ColorContext)
return(
    <div>
        <button onClick={()=>{
            dispatch({type:"changeColor",payload:{color:"red"}})}}>红色</button>
        <button  onClick={()=>{
            dispatch({type:"changeColor",payload:{color:"blue"}})}} >蓝色</button>
    </div>
)
}
export default Button;


