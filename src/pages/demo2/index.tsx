import React, {useState, useEffect, useContext} from 'react';
import {ThemeContext} from '../../component/button/index'
const Demo :React.FC= () => {
const [a]=useState<boolean>(false);
const [count,setCount]=useState<number>(0);
    useEffect(()=>{
        console.log("123")
    })

  const  clickH1=():string=>{
        setCount(count+2)
      return "123"
    }
    const {t}=useContext(ThemeContext)

    const table=(a:number):object|string=>{

        console.log("123333",t)
        if (a%5===1){
            return (<h5 >123</h5>)

        }else if (a%5===3){
            return "123"
            // return (<div>1231111</div>)
        }else {
            return (<h1>555</h1>)
        }

    }
    return   (
     <React.Fragment><div>
                asd
                {123}
                {!a&&a.toString()}
                {"123"}
            </div>
            <h1 onClick={clickH1}>
                {count}
                {"aaa"?"123":"999"}
            </h1>
         <div style={{color:"red"}}>
             {table(count)}
         </div>
     </React.Fragment>

    );

};
export default Demo;
