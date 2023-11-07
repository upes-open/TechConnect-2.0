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

import ChapterPost from "./chapterpost";

import logo from "../../assets/img/logo/logo.png";
import postImg0 from "../../assets/img/chapters/samplepost0.png";
import postImg1 from "../../assets/img/chapters/samplepost1.jpeg";
import postImg2 from "../../assets/img/chapters/samplepost2.png";
import postImg3 from "../../assets/img/chapters/samplepost3.png";
import postImg4 from "../../assets/img/chapters/samplepost4.jpeg";

import "./chapters.css";

const getCurrentDate = () => {
    return dayjs().format('YYYY-MM-DD');
};

export default function Chapters() {

    const colors = ['#affaff', '#FD7', '#FFB366'];
    const posts = [
        {
            author: "Open Community",
            authorImg: logo,
            postImg: postImg0,
            title: "OsoC 2023",
            body: "Open community is back with yet another exciting addition of OsoC23. It is promised to be better than ever.",
            class: "col-4"
        },
        {
            author: "Open Community",
            authorImg: logo,
            postImg: postImg1,
            title: "OsoC 2023",
            body: "Open community is back with yet another exciting addition of OsoC23. It is promised to be better than ever.",
            class: "col-4"
        },
        {
            author: "Open Community",
            authorImg: logo,
            postImg: postImg3,
            title: "OsoC 2023",
            body: "Open community is back with yet another exciting addition of OsoC23. It is promised to be better than ever.",
            class: "col-4"
        },
        {
            author: "Open Community",
            authorImg: logo,
            postImg: postImg2,
            title: "OsoC 2023",
            body: "Open community is back with yet another exciting addition of OsoC23. It is promised to be better than ever.",
            class: "col-4"
        },
        {
            author: "Open Community",
            authorImg: logo,
            postImg: postImg4,
            title: "OsoC 2023",
            body: "Open community is back with yet another exciting addition of OsoC23. It is promised to be better than ever.",
            class: "col-4"
        },

    ];

    const [currentDate] = useState(dayjs(getCurrentDate()));

    return (
        <>
            <Navbar />
            <Header highlight='chapters' />

            <div className="chapters-heading mt-3">
                <h1 className="head-text">Chapters & Clubs</h1>
            </div>

            <div className="chapters-content-box d-flex justify-content-center">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={9} order={1}>
                            <Container className="chapter-posts row d-flex justify-content-center">
                                {posts.map((post, index) => (
                                    <ChapterPost
                                        key={index}
                                        {...post}
                                        bgColor={colors[index % 3]}
                                    />
                                ))}
                            </Container>
                        </Grid>
                        <Grid item xs={12} md={3} borderLeft={1} order={2}>
                            <Grid className='calendar'>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateCalendar defaultValue={currentDate} readOnly />
                                </LocalizationProvider>
                            </Grid>
                            <Container className='events text-center mb-5'>
                                <h4 className='events-heading'>Create Chapter</h4>
                                <a className='btn btn-primary' href='/chapters/create'>Create</a>
                            </Container>
                        </Grid>
                    </Grid>
                </Box>
            </div>

            <Footer />
        </>
    );
}