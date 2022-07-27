import React from 'react';
import Timer from './Timer';
import {Button,TextField,FormControlLabel,Radio,RadioGroup} from '@mui/material';
import {useLocation} from 'react-router-dom';
//{props.value}{props.myname.state}{props.color}
const Result=({score,name})=>{
    var location=useLocation()
    return (

    
            <div>
           
           <div style={{background:'#82E0AA' ,display: 'flex', alignItems: 'center',justifyContent: 'center',height: '100vh'}}>
               <div style={{margin:10,height:400,background:'white',display: 'flex',flexDirection:'column', alignItems: 'center',justifyContent: 'center',width:500}}>
                    <div style={{color:'black',padding:20,fontWeight:'bold',fontSize:22,letterSpacing:1}}>
                        Simple Quiz App
                        </div>
                        
                        <div style={{color:'Red',padding:20,fontWeight:'bold',fontSize:42,letterSpacing:1}}>
                            {location.state.name} ,Yours Score is {location.state.score}
                        </div>
                        
                        
                </div>
            </div>
        </div>
        
    )


}
export default Result;