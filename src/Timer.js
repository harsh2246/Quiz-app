import React from 'react';

import { useNavigate } from 'react-router-dom'
import {Button,TextField,FormControlLabel,Radio,RadioGroup} from '@mui/material';
function Timer(props)
{
    var navigate=useNavigate();
    const [min,setmin]=React.useState(0);
    
    const [counter, setCounter] = React.useState(60);
    React.useEffect(() => {
        if(counter==0)
        {navigate('/result');}
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
export default Timer;