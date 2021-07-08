import React,{useState} from "react";
const Interval:React.FC=()=>{

   const [count,setCount] =useState<number>(0);
    React.useEffect(()=>{
      const t= setInterval(()=>{
          setCount(count=>count+1)
      },1000)

       return ()=>{

               clearInterval(t)

       }
   },[])

    return (
        <>
        <h1>{count}</h1>


        </>
    )
}
export default Interval;