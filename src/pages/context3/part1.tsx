import React ,{useState} from "react";

const colorValue={
    whiteDay:{
        color:"red"
    },
    blackDay:{
        color:"green"
    }
}
export interface ThemTypeState{
    name:string,
    colorValue:colorValueState,
    changeValue:()=>void,
    flag:boolean
}
export interface colorValueState{
    whiteDay:colorState,
    blackDay:colorState
}
export interface colorState{
    color:string,

}
export const ThemType: React.Context<ThemTypeState> = React.createContext<ThemTypeState>({
    changeValue: ()=>{},
    colorValue:colorValue,
    flag: false,
    name: ""
});
const Part:React.FC=(props)=>{
    const [flag,SetFlag]=useState(false)
    return(
        <ThemType.Provider value={{
            name:"zhangsan",colorValue,
            changeValue:()=>{
                console.log("123");SetFlag(()=>!flag)},
            flag: flag}}>
            {props.children}
        </ThemType.Provider>
    )
}
export default  Part;