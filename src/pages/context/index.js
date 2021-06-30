import React from "react";
import { ContextProvider } from "./reducer";
import Counter from "./Counter";
import CounterTest from "./CounterTest";

const App = () => {
    return (
        <div className="App">
<div>
    <ContextProvider>
    <Counter />
    <CounterTest />
    </ContextProvider>

</div>
        </div>
    );
};

export default App;
