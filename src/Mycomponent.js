import React from 'react';
import {Button} from "@mui/material";
//{props.value}{props.myname.state}{props.color}

function Mycomponent(props){
    //yahan par triple curly braces kyon nahin hain {props.color}
    const[bankbalance,setbankbalance]=React.useState(200000);
    function handleClick(){
       var total=bankbalance+props.value;
       setbankbalance(total);
    }
    return(
        <div style={{color:props.color}}><h1>This is my component</h1>
        <div><Button variant="contained" onClick={handleClick}>Click Here</Button></div>
        
        <div> Balance:{bankbalance}</div>
       


        </div>
       
    )
}
export default Mycomponent;