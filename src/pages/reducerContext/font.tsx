import React, {useContext} from 'react'
import {ColorContext} from  './color'
const Button:React.FC=()=>{

    const {color}=  useContext(ColorContext)
    return(
        <div style={{color}}>
            我的颜色是{color}

        </div>

    )
}
export default Button;


