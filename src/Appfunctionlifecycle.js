import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function Appfunctionlifecyle() {
  const [counter,setcounter]=useState(0);
  useEffect(()=>{
    //usedeffcet is used to componentDidMount,ComponentDidupdate,and componentWillUnMount
  //componentdidmount
    console.log("use Effect called");
  const timer =setTimeout(()=>{
    setcounter(counter+1);


  },15000);
   return()=>{
    //componentWillUnMount
    console.log("unmounting");
    clearTimeout(timer);

   };

    },[counter] );
   //ComponentDidUpdate
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>counter value is {counter}</p>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Appfunctionlifecyle;
