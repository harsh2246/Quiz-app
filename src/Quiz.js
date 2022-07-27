import { CircularProgress, Button } from "@material-ui/core";
import {useLocation} from 'react-router-dom';
import { useEffect, useState } from "react";
import React from "react"
import { useNavigate } from 'react-router-dom'
import { TextField, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import axios from 'axios'
import Timer from "./Timer";
import { LocationSearching } from "@mui/icons-material";

function Quiz({name}) {
  var location=useLocation()
  
  var navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const [Line,setLine]=useState(0);
  const [currQues, setCurrQues] = useState(0);
  const [selected, setSelected] = useState("");
  const [sss, setSSS] = useState(0);
  
  const [questions, setQuestions] = useState([["what is your name","harsh","sudhir","ramesh","suresh","harsh"],
  ["what is your height","harsh","sudhir","ramesh","suresh","harsh"],
  ["what is your age","19","20","21","22","19"],
  ["what is your weight","57","58","59","60","57"],
  ["what is your branch","cse","IT","civil","mech","IT"],
  ]);
  const [score, setScore] = useState(0);
  const [dsave,setdsave]=useState(true);
  const [mcolor1, setmcolor1] = useState(false);
  const [mcolor2, setmcolor2] = useState(false);
  const [mcolor3, setmcolor3] = useState(false);
  const [mcolor4, setmcolor4] = useState(false);
  const [isActive,setIsActive] =useState(false);
  const [pis0,setPis0] = useState(false);
  const [pis1,setPis1]= useState(false);
  const [pis2,setPis2] = useState(false)
  const [pis3,setPis3] = useState(false)
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);//it will shuffle the elements https://flaviocopes.com/how-to-shuffle-array-javascript/
  };

  
  const handleSave=(k)=>{
    
  
   //setIsActive(current=>!current);
   /* if(questions[currQues][1]===selected){
        if(selected===questions[currQues][5])
        {
          //m1setcolor("green");
          setScore(score+1);
        }
        else
        {
          //m1setcolor("red");
        }
    }
    /*
    else if(questions[currQues][2]===selected)
    {
      if(selected===questions[currQues][5])
      {
        m2setcolor("green");
      }
      else
      {
        m2setcolor("red");
      }
    }
    else if(questions[currQues][3]===selected)
    {
      if(selected===questions[currQues][5])
      {
        m3setcolor("green");
      }
      else
      {
        m3setcolor("red");
      }
    }
    else
    {
      if(selected===questions[currQues][5])
      {
        m4setcolor("green");
      }
      else
      {
        m4setcolor("red");
      }
    }
    /*if(selected==questions[currQues][4])
    {
      //green
    }*/
   /* if(selected==correct_answer)
    {//mark it green
    }
      else
      {//mark it red and show the correct answer
      }*/
      
    }
  const handleNext = () => {
    
     setSSS(sss+1);
      setPis0(false)
      setPis1(false);
      setPis2(false);
      setPis3(false);
      setmcolor1(false);
      setmcolor2(false);
      setmcolor3(false);
      setmcolor4(false);
    
    
  }
  const handlepqr=()=>{
    if(selected===questions[currQues][5])
    {setScore(score+1);}
  }
  const handleSubmit = () => {

    navigate('/result',{state:{score:score,name:location.state.name}});
  }
  
  const handleCheck = (e) => {
    if(questions[sss][1]===e.target.value){
      if(e.target.value===questions[currQues][5])
      {
        setmcolor1(true)
        setScore(score+1);
        
      
      }
      
      
  }
  else if(questions[sss][2]===e.target.value){
    if(e.target.value===questions[currQues][5])
    {
      setmcolor2(true)
      setScore(score+1);
     
    
    }
    
}
else if(questions[sss][3]===e.target.value){
  if(e.target.value===questions[currQues][5])
  {
    setmcolor3(true)
    setScore(score+1);
   
  
  }
  
}
else if(questions[sss][4]===e.target.value){
  if(e.target.value===questions[currQues][5])
  {
    setmcolor4(true)
    setScore(score+1);
    
  
  }
  
}
setPis0(true)
setPis1(true);
setPis2(true);
setPis3(true); 
  }
  
  function Timer(props)
{
    var navigate=useNavigate();
    const [min,setmin]=React.useState(0);
    
    const [counter, setCounter] = React.useState(60);
    React.useEffect(() => {
        if(counter==0)
        {navigate('/result',{state:{score:score,name:location.state.name}});}
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
    
    return(
        <div>
            {counter}S
               
        </div>
    )
}
  /*<RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                id="ans"
                required={true}
              >
                <FormControlLabel value={options[0]} control={<Radio />} label={options[0]} onClick={(e) => handleCheck(e)} />
                <FormControlLabel value={options[1]} control={<Radio  />} label={options[1]} onClick={(e) => handleCheck(e)} />
                <FormControlLabel value={options[2]} control={<Radio  />} label={options[2]} onClick={(e) => handleCheck(e)} />
                <FormControlLabel value={options[3]} control={<Radio  />} label={options[3]} onClick={(e) => handleCheck(e)} />
              </RadioGroup> */
  return (
    <div>
        <div style={{ background: '#82E0AA', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <div style={{ margin: 10, background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 500 }}>
            
            <div style={{ color: 'black', padding: 20, fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
               Quiz App 
              
            </div>
            <div style={{ color: 'red', padding: 20, fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
            {location.state.name}
              
            </div>
           
            <div style={{ color: 'black', padding: 20, fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
              {Timer()}
             
            </div>
            <div style={{ color: 'black', padding: 20, fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
             Score:   {score}
             
            </div>
          
            <div style={{ width: 400, margin: 10, fontWeight: 'bold' }}>
              Question No. {sss+1}
            </div>
            <div style={{ width: 400, margin: 10, fontWeight: 'bold' }}>

              {questions[sss][0]}  ?
            </div>
            <div style={{ width: 400, margin: 10}} onChange={handleCheck}>
              <div style={{color:mcolor1?'blue':'black'}}> <input type="radio" id="op1" disabled={pis0} value={questions[sss][1]}  name="options" checked={false}/> 
            {questions[sss][1]}</div>
            <div style={{color:mcolor2?'blue':'black'}}>
            <input type="radio" id="op2" value={questions[sss][2]} name="options" disabled={pis1} checked={false}/>
                {questions[sss][2]}</div>
                <div style={{color:mcolor3?'blue':'black'}}>
              <input type="radio" id="op3" value={questions[sss][3]} name="options" disabled={pis2} checked={false}/>{questions[sss][3]}
              </div>
              <div style={{color:mcolor4?'blue':'black'}}>
              <input type="radio" id="op4" value={questions[sss][4]} name="options" disabled={pis3} checked={false}/>{questions[sss][4]}
              </div>
            </div>
            <div style={{ color: 'black', padding: 20, fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
              {(sss<4)?<div><Button variant="contained" onClick={handleNext} >next</Button></div>:<div><Button variant="contained" onClick={handleSubmit}>submit</Button></div>}
            </div>
          
              <div style={{ color: 'black', padding: 20, fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
              {selected}
              </div>
          </div>
          
        </div>
      </div>
  )
}
export default Quiz;