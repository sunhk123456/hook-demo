import React ,{useState,useContext} from "react";

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


const ThemType: React.Context<ThemTypeState> = React.createContext<ThemTypeState>({
    changeValue: ()=>{},
    colorValue:colorValue,
    flag: false,
    name: ""
});
// {
//     color:colorValue,
//         fontSize:"28",
//     cutColor:()=>{}
// }

const Tool=()=>{
    const context=useContext<ThemTypeState>(ThemType);
    console.log(context.name)
return(
    <div>
        {context.name}
          <h1 style={{color:context.flag? context.colorValue.blackDay.color: context.colorValue.whiteDay.color}}> 8888888</h1>
        <button onClick={()=>{context.changeValue()}}>9999999</button>
    </div>
)
}

const Part:React.FC=()=>{
    const [flag,SetFlag]=useState(false)

    return(
        <ThemType.Provider value={{name:"zhangsan",colorValue,changeValue:()=>{
                console.log("123");SetFlag(()=>!flag)},flag: flag}}>
            <Tool />
        </ThemType.Provider>
    )
}

export default  Part;