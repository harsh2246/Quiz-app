import React from 'react';
import Mycomponent from './Mycomponent';
import { useState } from "react";
import {Button,TextField} from '@mui/material';
import Weather from './Weather'
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Pagecomp from './Pagecomp';
import Home from './Home';
import axios from "axios";
import Result from './Result';
import Quiz from './Quiz';
function App() {
  const [name,setName]=React.useState("xyz");
  const [questions,setQuestions]=useState();
  const [score,setScore]=React.useState(0);
  
   return(
    <div className="App">
        <BrowserRouter>
        <Routes>
          
          <Route  element={<Home name={name} setName={setName} />} path="/home"/>
          <Route  element={<Quiz name={name}  score={score} setScore={setScore} setQuestions={setQuestions}/>}  path="/quiz"/>
          <Route  element={<Result score={score} name={name}/>} path="/result"/>
          
        </Routes>
      </BrowserRouter>
    </div>
   )
}
export default App;