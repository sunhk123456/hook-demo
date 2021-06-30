// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React, { useState,useEffect } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  // const [a, setA] = useState(0);
    function handleAlertClick() {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000);
    }
    // eslint-disable-next-line no-undef
  // useEffect(()=>{
  //     setA(a+1)
  //     console.log(a)
  // },[]);
    useEffect(() => {
        console.log("2")
        const id = setInterval(() => {
            setCount(preCount => preCount + 1);
            // 此时setCount里面的函数的入参是前一次render之后的count值，所以这样的情况下计时器可以work
        }, 1000);
        return () => clearInterval(id);
    }, []);
  return (
      <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
              Click me
          </button>
          <button onClick={handleAlertClick}>
              Show alert
          </button>

      </div>
  );



}
export default Example;
