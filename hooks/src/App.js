import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cont, setcont] = useState(0);
  function inc() {
    setcont(cont + 1)
  }
  useEffect(() => {
    console.log("useEffect Called");
  },[cont])
  console.log("Function Body");
  return (
    <div className='App'>
      <div className="main">
        <h1 className="heading">{cont}</h1>
        {/* <button className='btn' onClick={inc}>Increment</button> */}
        {/* <button className='btn' onClick={() => setcont(cont - 1)}>Decrement</button> */}
        <button className='btn' onClick={inc}>Click Me { cont}</button>
      </div>
      {console.log("Inside JSX")}
    </div>

  );
}

export default App;
