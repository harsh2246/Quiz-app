import React from 'react';
import Timer from './Timer';
import {Button,TextField,FormControlLabel,Radio,RadioGroup} from '@mui/material';
//{props.value}{props.myname.state}{props.color}

const Pagecomp=({name,questions,score,setScore,setQuestions})=>{
  const [que,setque]=React.useState(
     [ ["what is your gender","male","female","other","Gay","Gay"],
     ["what is your name","harsh","ramesh","suresh","kamlesh","harsh"],
     ["what is your age","18","19","20","21","22"]
    ]
      )
      const [dis,setDis]=React.useState("Question no. ")
      const [correct,setCorrect]=React.useState(0);
   const [index,setIndex]=React.useState(0);
   const [record,setRecord]=React.useState("");
    const handleSubmit=()=>{
        if(record==que[5])
        {setCorrect(correct+1);}
        runcomp();
    }
   const handleNext=()=>{
    if(record==que[5])
    {setCorrect(correct+1);}
       
        setIndex(index+1);
   }
   
   const runcomp= () =>{
    return( 
    
             <div style={{background:'#82E0AA' ,display: 'flex', alignItems: 'center',justifyContent: 'center',height: '100vh'}}>
                <div style={{margin:10,background:'white',display: 'flex',flexDirection:'column', alignItems: 'center',justifyContent: 'center',width:500}}>
                                <div style={{color:'Red',padding:20,fontWeight:'bold',fontSize:22,letterSpacing:1}}>
                                
                                </div>
                            <div style={{color:'black',padding:20,fontWeight:'bold',fontSize:22,letterSpacing:1}}>
                            Simple Quiz App
                            </div>
                            <div style={{width:400,margin:10,fontWeight: 'bold'}}>
                            Your Score is {correct}
                            </div>
                </div>
            </div>
        );
 };
    return(
        <div>
            <div style={{background:'#82E0AA' ,display: 'flex', alignItems: 'center',justifyContent: 'center',height: '100vh'}}>
               <div style={{margin:10,background:'white',display: 'flex',flexDirection:'column', alignItems: 'center',justifyContent: 'center',width:500}}>
               <div style={{color:'Red',padding:20,fontWeight:'bold',fontSize:22,letterSpacing:1}}>
                        <Timer/>
                        </div>
                    <div style={{color:'black',padding:20,fontWeight:'bold',fontSize:22,letterSpacing:1}}>
                        Simple Quiz App
                        </div>
                    <div style={{width:400,margin:10,fontWeight: 'bold'}}>
                       {dis} {index+1}
                    </div>
                    <div style={{width:400,margin:10,fontWeight: 'bold'}}>
                        {que[index][0]}
                    </div>
                    <div style={{width:400,margin:10}}>
                    <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    id="ans"
    required={true}
  >
    <FormControlLabel value={que[index][1]} control={<Radio />} label={que[index][1]} onClick={(e)=>setRecord(e.target.value)}/>
    <FormControlLabel value={que[index][2]} control={<Radio />} label={que[index][2]} onClick={(e)=>setRecord(e.target.value)}/>
    <FormControlLabel value={que[index][3]} control={<Radio />} label={que[index][3]} onClick={(e)=>setRecord(e.target.value)}/>
    <FormControlLabel value={que[index][4]} control={<Radio />} label={que[index][4]} onClick={(e)=>setRecord(e.target.value)} />
  </RadioGroup>
                    </div>
                    <div style={{width:300,margin:10}}>
                       {index+1<3?<div>
                                <Button variant="contained"  onClick={handleNext} fullWidth>Next Question</Button>
                            </div>:<div>
                            <Button variant="contained"  onClick={handleSubmit} fullWidth>
                                Submit</Button></div>}

                        
                    </div>
                    
                    
               </div>
           </div>
       </div>
    )
}
export default Pagecomp;