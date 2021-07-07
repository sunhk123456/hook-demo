import React, { useState } from 'react';
import Son from './Son'
export interface Fater {
    name:string,
    number:number

}
const Index:React.FC= ()=>{
    const [number,setNumber]=useState<number>(0)
    const [name, setName]=useState<string>('Yui')

    return(
        <>
            <button onClick={()=>{setNumber(number+1)}}>{'number is:'+number}</button>
            <button onClick={()=>{setName('rena')}}>{'change name'}</button>
            <Son name={name}>
            <div>
                {name}

            </div>
            </Son>
        </>
    )

}
export default Index;