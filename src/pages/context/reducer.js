import React, { useReducer } from "react";

// const initialState = 0;
const myContext = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case "reset":
            return { count: 0 };
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const ContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <myContext.Provider value={{ state, dispatch }}>
            1111
            {props.children}
        </myContext.Provider>
    );
};

export { reducer, myContext, ContextProvider };