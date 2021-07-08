import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import RouterConfig from "./router/index.js";
ReactDOM.render(
<div>
  <div style={{position:"absolute",width:"200px",background:"rgba(0,0,0,0.1)",height:"100%",}}>
    <ul >
      <li><a href="#/Demo2">demo2  </a></li>
      <li><a href="#/sugon">sugon  </a></li>
      <li><a href="#/App">App  </a></li>
      <li><a href="#/Demo3">Demo3  </a></li>
      <li><a href="#/Page1">Page1  </a></li>
      <li><a href="#/context">context  </a></li>
    </ul>

  </div>

  <div style={{marginLeft:"220px",paddingTop:"20px"}}>
    <React.StrictMode>
      <RouterConfig />
    </React.StrictMode>
  </div>
</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
