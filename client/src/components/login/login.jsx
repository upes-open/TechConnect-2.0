import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import LoginImage from './loginimg.png'
import './login.css'
import axios from "axios"
import { useNavigate } from 'react-router';




export default function Login() {
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const navigate = useNavigate();

    const submit = () =>{
        axios.post("http://localhost:4000/auth/login",{username,password}).then(user=>{
            console.log(username,password);
            navigate("/chapters");
        }).catch(err =>{
            console.log("User does not exist",err);
        })
    }
    return (
        <>
            <Navbar />
            <div className='main-login'>
                <div className='left-login'>
                    <img src={LoginImage} className='login-image' alt="Left" />
                </div>
                <div className='right-login'>
                    <div className='login-box'>
                        <h1 className='login-title'>Login</h1>
                        <form action="/auth/login" className='login-form' method="post">
                            <div className='login-input'>                              
                                <div className='username'>
                                    <TextField id="outlined-basic" label="Username" variant="outlined" className='username-input' value={username}  
                                    onChange={(e)=>setUsername(e.target.value)}/>
                                </div>
                                
                                <div className='pass'>
                                    <TextField id="outlined-basic" label="Password" variant="outlined" className='password-input' type="password" value={password}
                                     onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                            </div>
                            {/* create a remember password checkbox */}
                            <div className='remember'>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                            </div>
                            <Button variant="contained" value="login" onClick={submit}>Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

