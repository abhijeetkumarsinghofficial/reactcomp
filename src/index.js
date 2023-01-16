import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const Comp1 = () => {
  return (
    <div>
      <h1>React Component 1</h1>
    </div>
  );
}

const Comp2 = () => {
  return (
    <div>
      <h1>React Component 2</h1>
    </div>
  );
}
const Comp3 = () => {
  return (
    <div>
      <h1>React Component 3</h1>
    </div>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Comp1/>
    <Comp2/>
    <Comp3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

