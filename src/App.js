import React from 'react'
import { useState } from 'react'
import './App.css'
import X from './X.png'
import O from './O.png'
let data = ["" , "" , "" , "" , "" ,"" ,"" , "" ,""];

function App() {
  const imgsize = '100px';
 
  let [Count , setCount ] = useState(0);
  let [lock , setLock] = useState(false);
  let [first , setFirst] = useState("Result Pending ")
  function handletoggle(e , num){
    if(lock){
      return 0;
    }
    if(Count%2 === 0){
      e.target.innerHTML = `<img src=${X} style ="width:${imgsize} ; height:${imgsize} ; margin:18px"> `;
      data[num]="X";
      setCount(Count+1);
    }
    else{
      e.target.innerHTML = `<img src=${O} style ="width:${imgsize} ; height:${imgsize}; margin:18px">`;
      data[num]="O";
      setCount(Count+1);
    }
    findWin();
  }
  const findWin =()=>{
    console.log(data);
    if(data[0] === data[1] && data[1] === data[2] && data[0] !== "" )
    {
      console.log(data);
      win(data[0]);
    }
    if(data[3] === data[4] && data[4] === data[5] && data[3] !== "" )
    {
      console.log(data);
      win(data[3]);
    }
    if(data[6] === data[7] && data[7] === data[8] && data[6] !== "" )
    {
      console.log(data);
      win(data[6]);
    }
    if(data[0] === data[4] && data[4] === data[8] && data[0] !== "")
    {
      console.log(data);
      win(data[0]);
    }
    if(data[2] === data[4] && data[4] === data[6] && data[2] !== "" )
    {
      console.log(data);
      win(data[2]);
    }
    if(data[0] === data[3] && data[3] === data[6] && data[0] !== "" )
    { 
      console.log(data);
      win(data[0]);
    }
    if(data[1] === data[4] && data[4] === data[7] && data[1] !== "" )
    {
      console.log(data);
      win(data[1]);
    }
    if(data[2] === data[5] && data[5] === data[8] && data[2] !== "" )
    {
      console.log(data);
      win(data[2]);
    }
    if (!data.includes("") && !lock) {
      setFirst("It's a Tie!");
      setLock(true);
    }
   
  }
 
  
  const win =(winner)=>{
    setLock(true);
    if(winner === "X")
    {
      setFirst("Winner is : X")
      console.log(data);
    }
    else {
      setFirst("Winner is : O")
      console.log(data);
    }
  }
  const reset =()=>{
    setLock(true);
    setLock(false); 
    setFirst("Result Pending "); 
    setCount(0); 
    let newData = ["", "", "", "", "", "", "", "", ""]; 
    data = [...newData];
    data.forEach((_,index)=>{
      document.getElementById(`box-${index}`).innerHTML ="";
    })
  }

  return (
    <div>
      <h1>Tic Tac Toe </h1>
      <h1>{first}</h1>
     
     
      <div className="board">
        <div className="row">
          <div className="Box" id ="box-0" onClick={(e)=>{handletoggle(e , 0)}}></div>
          <div className="Box" id ="box-1" onClick={(e)=>{handletoggle(e , 1)}}></div>
          <div className="Box" id ="box-2" onClick={(e)=>{handletoggle(e , 2)}}></div>
        </div>
        <div className="row">
        <div className="Box" id ="box-3" onClick={(e)=>{handletoggle(e , 3)}}></div>
          <div className="Box" id ="box-4" onClick={(e)=>{handletoggle(e , 4)}}></div>
          <div className="Box" id ="box-5" onClick={(e)=>{handletoggle(e , 5)}}></div>
        </div>
        <div className="row">
        <div className="Box" id ="box-6" onClick={(e)=>{handletoggle(e , 6)}}></div>
          <div className="Box" id ="box-7" onClick={(e)=>{handletoggle(e , 7)}}></div>
          <div className="Box" id ="box-8" onClick={(e)=>{handletoggle(e , 8)}}></div>
        </div>

      </div>
      <button className='reset-btn' onClick={()=>{reset()}}>Reset </button>
     
     
      
    </div>
  )
}

export default App
