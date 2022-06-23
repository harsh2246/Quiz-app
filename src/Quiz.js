import { CircularProgress, Button } from "@material-ui/core";
import {useLocation} from 'react-router-dom';
import { useEffect, useState } from "react";
import React from "react"
import { useNavigate } from 'react-router-dom'
import { TextField, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import axios from 'axios'
import Timer from "./Timer";

function Quiz() {
  const location = useLocation();
  var navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(0);
  const [selected, setSelected] = useState("");
  const [sss, setSSS] = useState([]);
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState(0);
  const [color, setColor] = useState('');
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);//it will shuffle the elements https://flaviocopes.com/how-to-shuffle-array-javascript/
  };

 
  useEffect(() => {
    fetchQuestions()
    setOptions(questions && handleShuffle([
        questions[currQues].correct_answer,
        ...questions[currQues].incorrect_answers,
      ])
    );
  }, [currQues]);
  const handleNext = () => {
    if (selected != "") { setCurrQues(currQues + 1); }
  }
  const fetchQuestions = async () => {
    var  data = await axios.get(`https://opentdb.com/api.php?amount=10${location.state.category && `&category=${location.state.category}`
      }${location.state.difficulty && `&difficulty=${location.state.difficulty}`}&type=multiple`
    );
    setQuestions(data.data.results)
    // alert(JSON.stringify(data))
    // console.log(data.results);
  }
  const handleSubmit = () => {

    navigate('/result');
  }
  const handleCheck = (e) => {
    setSelected(e.target.value)
    if (questions[currQues].correct_answer == selected) {
      setScore(score + 1);
      setColor('green');
    }
    else { setColor('red'); }
  }
  function Timer(props)
{
    var navigate=useNavigate();
    const [min,setmin]=React.useState(0);
    
    const [counter, setCounter] = React.useState(60);
    React.useEffect(() => {
        if(counter==0)
        {navigate('/result',{state:{score:score}});}
        counter > 0 && setTimeout(() => setCounter(counter - 1), 100);
      }, [counter]);
    /*React.useEffect(()=>{
        setInterval(() =>{
            setCounter(counter-1);
        },1000)
    },[counter]);*/
    return(
        <div>
            {counter}S
               
        </div>
    )
}
  const mvc = () => {
    return (
      <div>
        <div style={{ background: '#82E0AA', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <div style={{ margin: 10, background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 500 }}>
            
            <div style={{ color: 'black', padding: 20, fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
              Simple Quiz App
            </div>
            <div style={{ width: 400, margin: 10, fontWeight: 'bold' }}>
              Questions {currQues + 1}
            </div>
            <div style={{ width: 400, margin: 10, fontWeight: 'bold' }}>
              {questions[currQues].question}
              
            </div>
            <div style={{ width: 400, margin: 10 }}>
              <RadioGroup
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
              </RadioGroup>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
  return (
    <div>
      <div style={{ color: 'black', padding: 20, fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
             {Timer()}
            </div>
      <div style={{ color: 'black', padding: 20, fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
              Simple Quiz App
            </div>
      
    </div>
  )
}
export default Quiz;