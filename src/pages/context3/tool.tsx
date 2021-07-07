import React, {useContext} from "react";
import {ThemTypeState} from "./part1";
import {ThemType} from './part1'
const Tool=()=>{
    const context=useContext<ThemTypeState>(ThemType);
    console.log(context)
    console.log(context.name)
    return(
        <div>
            {context.name}
            <h1 style={{color:context.flag? context.colorValue.blackDay.color: context.colorValue.whiteDay.color}}> 8888888</h1>
            <button onClick={()=>{context.changeValue()}}>9999999</button>
        </div>
    )
}


export default Tool;