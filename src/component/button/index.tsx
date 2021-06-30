import React, {useState,useEffect} from 'react';
import {myContext} from "../../pages/context/reducer";

export const ThemeContext=React.createContext<any>({});

const Demo :React.FC= (props) => {
// const [a]=useState<boolean>(false);
// const [count,setCount]=useState<number>(0);
    useEffect(()=>{
        console.log("123")
    })
  const goClick=()=>{
     return {
         a:12,
     }

  }

    return (
        <div>

            <ThemeContext.Provider value={{t:()=>goClick()}}/>
            <div> 9999878</div>
            {props.children}

        </div>

    );

};
export default Demo;
