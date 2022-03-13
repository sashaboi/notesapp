import './App.css';
import React, { useState } from 'react';

function App() {
  const [passval , setpassval] = useState("")
  const [passvaltwo , setpassvaltwo] = useState("")
  const [numberdiv , setnumberdiv] = useState("none")
  const [disabledval , setdisabledval] = useState(true)
  const [btnclass , setbtnclass] = useState("button")
  console.log(passval);
  console.log(passvaltwo);
  console.log(btnclass);
  const clickHandler = () => {
    var nums = passval.match(/\d+/g);
    (nums != null ) ? (setnumberdiv("none")) : (setnumberdiv("block"));
  }
  return (
    <div className="wrapper">
      <h1>Password Checker</h1>
      <h2>Password1</h2>
      <input onChange={(e) => {setpassval(e.target.value)}} type="password"></input>
      <h2>Password2</h2>
      <input onChange={(e) => {(e.target.value === passval) ? (setdisabledval(false),setbtnclass("btnclass")) : (console.log('passwords dont match') )}} type="password"/>
      <button onClick={clickHandler} className={btnclass} disabled={disabledval} >Check password</button>
      <h3 style={{display:numberdiv}} >This password doesnt contain a number !</h3>
      
    </div>
  );
}

export default App;
