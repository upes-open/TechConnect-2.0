import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import LoginImage from './loginimg.png'
import './register.css'
import Axios from "axios"



export default function Register() {
    const [name,setName]=useState();
    const [password,setPassword]=useState();
    const register = () => {
    Axios({
        method: "POST",
        url: "http://localhost:4000/register",
        data: {
          username: name,
          password: password,
        },
        withCredentials: true,
      })
        .then((res) => console.log(res))
        .catch((error) => {
          if (error.response) {
            console.error("Response data:", error.response.data);
          } else {
            console.error("Network error:", error.message);
          }
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
                        <h1 className='login-title'>Register Now</h1>
                        <form className='login-form'>
                            <div className='login-input'>
                                <div className='name'>
                                    <TextField id="outlined-basic" label="Name" variant="outlined" className='name-input' 
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
                            <Button variant="contained" onClick={register}>Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
