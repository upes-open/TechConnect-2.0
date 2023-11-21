import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import LoginImage from './loginimg.png'
import './login.css'
import Axios from "axios"


export default function Login() {
    const [name,setName]=useState();
    const [password,setPassword]=useState();
    const navigate = useNavigate();
const login = () => {
    Axios({
        method: "POST",
        url: "http://localhost:4000/login",
        data: {
          username: name,
          password: password,
        },
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 200) {
            // Successful authentication, handle redirection here
            // Use react-router-dom or other routing mechanisms
            console.log("User logged in"); // Example redirection
          } else {
            // Handle errors, display error message to the user
            console.log(res.data.error);
          }
        })
        .catch((error) => {
          console.error("Networkk error:", error.message);
        });
      
    };
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
                        <form className='login-form'>
                            <div className='login-input'>                              
                                <div className='email'>
                                    <TextField id="outlined-basic" label="Username" variant="outlined" className='username-input'  
                                    onChange={(e)=>setName(e.target.value)}/>
                                </div>
                                
                                <div className='pass'>
                                    <TextField id="outlined-basic" label="Password" variant="outlined" className='password-input' 
                                     onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                            </div>
                            {/* create a remember password checkbox */}
                            <div className='remember'>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                            </div>
                            <Button variant="contained"onClick={login}>Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}