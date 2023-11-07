import React, { useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Footer from "../footer/footer";

import createImg from "../../assets/img/chapters/chapterpost.png";

import "./createchapterpost.css";

const getCurrentDate = () => {
    return dayjs().format('YYYY-MM-DD');
};

export default function CreateChapterPost() {

    const [currentDate] = useState(dayjs(getCurrentDate()));

    return (
        <>
            <Navbar />
            <Header highlight='chapters' />


            <div className="chapters-content-box d-flex justify-content-center my-5">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={9} order={1}>
                            <Container className="chapter-posts row d-flex justify-content-center">
                                <div className="col-md-6 d-flex justify-content-center">
                                    <div className="w-75">
                                        <img src={createImg} alt="" className='w-100' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="formbox text-center d-flex flex-column justify-content-center align-items-center py-3">
                                        <h1 className="mt-3">Create A Post</h1>
                                        <form className="form-group w-75">
                                            <input type="text" className="form-control my-3" id="nameofchapter" placeholder="Enter Name of Chapter" />
                                            <input type="text" className="form-control my-3" id="eventname" placeholder="Enter Event Name" />
                                            <input type="text" className="form-control my-3" id="eventlocation" placeholder="Enter Event Location" />
                                            <input type="date" className="form-control my-3" id="eventdate" placeholder="Enter Event Date" />
                                            <input type="text" className="form-control my-3" id="eventposter" placeholder="Enter Event Poster" />
                                            <textarea className="form-control" id="eventdescription" rows="3" placeholder="Enter Event Description"></textarea>
                                            <button type="submit" className="btn btn-primary mt-3">Post</button>
                                        </form>
                                    </div>
                                </div>
                            </Container>
                        </Grid>
                        <Grid item xs={12} md={3} borderLeft={1} order={2}>
                            <Grid className='calendar'>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateCalendar defaultValue={currentDate} readOnly />
                                </LocalizationProvider>
                            </Grid>
                            <Container className='events text-center'>
                                <h4 className='events-heading'>Your week in preview</h4>
                            </Container>
                        </Grid>
                    </Grid>
                </Box>
            </div>

            <Footer />
        </>
    );
}