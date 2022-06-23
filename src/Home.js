import React from 'react';
import { Button, TextField, InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import Categories from './Categories';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from "axios";
const Home = ({ name, setName, fetchQuestions }) => {

    var navigate = useNavigate()
    const [category, setCategory] = React.useState("");
    const [difficulty, setDifficulty] = React.useState("")
    
    const handleStart = () => {
        navigate("/quiz",{state:{category:category,difficulty:difficulty}})
    }

    return (
        <div>

            <div style={{ background: '#82E0AA', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <div style={{ margin: 10, background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 500 }}>
                    <div style={{ color: 'black', padding: 20, fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
                        Simple Quiz App
                    </div>

                    <div style={{ color: 'black', padding: 20, fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
                        {/*error&&<ErrorMessage>Please Fill all the Fields</ErrorMessage>*/}
                        <TextField id="outlined-basic" label="Enter Your Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div style={{ color: 'black', padding: 20, fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
                        <TextField
                            select
                            label="Select Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            variant="outlined"
                            style={{ marginBottom: 30 }}
                        >
                            {Categories.map((cat) => (
                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div style={{ color: 'black', padding: 20, fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Difficulty</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={difficulty}
                                label="Age"
                                onChange={(e) => setDifficulty(e.target.value)}
                            >
                                <MenuItem key="Easy" value="easy">Easy</MenuItem>
                                <MenuItem key="Medium" value="medium" >Medium</MenuItem>
                                <MenuItem kehy="Hard" value="hard">Hard</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{ color: 'black', padding: 20, fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
                        <Button variant="contained" onClick={() => handleStart()}>Start Quiz</Button>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Home;