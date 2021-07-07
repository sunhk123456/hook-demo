import React, {createContext, useReducer} from "react";
export interface ColorState {
    color: string,
    dispatch: React.Dispatch<{
        type: string,
        payload: payload
    }>
}

export interface actionState {
    type: string,
    payload: payload
}

export interface payload {
    color: string,
    [prop: string]: any
}




export const ColorContext = createContext<ColorState>({
    dispatch(): void {
    },
    color: ""})

const Color: React.FC<{
    name: string
}> = (props) => {

    function reducer(state: string, action: actionState): string {
        switch (action.type) {
            case 'changeColor':
                return action.payload.color
        }
        return "999"
    }
    const [color, dispatch] = useReducer(reducer, 'red')
    return (
        <>
            {
                <ColorContext.Provider value={{color, dispatch}}>
                    {props.children}
                </ColorContext.Provider>
            }


        </>
    )
}
export default Color;