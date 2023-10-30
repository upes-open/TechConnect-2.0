import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import LoginImage from './loginimg.png'
import './login.css'

export default function Login() {
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
                                    <TextField id="outlined-basic" label="E-Mail" variant="outlined" className='email-input' />
                                </div>
                                <div className='pass'>
                                    <TextField id="outlined-basic" label="Password" variant="outlined" className='password-input' />
                                </div>
                            </div>
                            {/* create a remember password checkbox */}
                            <div className='remember'>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                            </div>
                            <Button variant="contained">Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}