import React, {  useMemo } from "react";

const Son:React.FC<{
    name:string,
}>= (props) => {
    const showName = (name:string) => {
        console.log("Son render");
        return "my name is " + name;
    };
  const a=   useMemo (() => {
        console.log("memo");
       return  showName(props.name);
    }, [props.name])
return (
    <>
     <div>
         {a}
</div>
{/*<div>{showName(props.name)}</div>*/}
{/*<div>{props.name}</div>*/}
    </>
)
};
export default Son;
// <div>
//     {useMemo(() => {
//         console.log("memo");
//         showName(props.name);
//     }, [props.name])}
// </div>
// <div>{showName(props.name)}</div>