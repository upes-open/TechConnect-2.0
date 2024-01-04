import React, { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Footer from "../footer/footer";

import createImg from "../../assets/img/chapters/chapterpost.png";

import "./createchapterpost.css";

const getCurrentDate = () => {
  return dayjs().format("YYYY-MM-DD");
};

export default function CreateChapterPost() {
  const [currentDate] = useState(dayjs(getCurrentDate()));

  const [formData, setFormData] = useState({
    chapterName: "",
    eventName: "",
    eventLocation: "",
    eventDescription: "",
    eventDate: "",
    eventPoster: "",
  });

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      chapterName: "",
      eventName: "",
      eventLocation: "",
      eventDescription: "",
      eventDate: "",
      eventPoster: "",
    });
  }

  function handleOnChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.id]: event.target.value,
    }));
  }

  return (
    <>
      <Navbar />
      <Header highlight="chapters" />

      <div className="chapters-content-box d-flex justify-content-center my-5">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={9} order={1}>
              <Container className="chapter-posts row d-flex justify-content-center">
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="w-75">
                    <img src={createImg} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="formbox1 text-center d-flex flex-column justify-content-center align-items-center py-3">
                    <h1 className="mt-3">Create A Post</h1>
                    <form className="form-group w-75" onSubmit={handleOnSubmit}>
                      <input type="text" className="form-control my-3" id="chapterName" placeholder="Name of Chapter" onChange={handleOnChange} value={formData.chapterName}/>
                      <input type="text" className="form-control my-3" id="eventName" placeholder="Event Name" onChange={handleOnChange} value={formData.eventName}/>
                      <input type="text" className="form-control my-3" id="eventLocation" placeholder="Event Location" onChange={handleOnChange} value={formData.eventLocation}/>
                      <input type="date" className="form-control my-3" id="eventDate" placeholder="Event Date" onChange={handleOnChange} value={formData.eventDate}/>
                      <input type="text" className="form-control my-3" id="eventPoster" placeholder="Event Poster" onChange={handleOnChange}/>
                      <textarea
                        className="form-control"
                        id="eventDescription"
                        rows="3"
                        placeholder="Enter Event Description"
                        onChange={handleOnChange}
                        value={formData.eventDescription}
                      ></textarea>
                      <button type="submit" className="btn btn-primary mt-3">
                        Post
                      </button>
                    </form>
                  </div>
                </div>
              </Container>
            </Grid>
            <Grid item xs={12} md={3} borderLeft={1} order={2}>
              <Grid className="calendar">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar defaultValue={currentDate} readOnly />
                </LocalizationProvider>
              </Grid>
              <Container className="events text-center">
                <h4 className="events-heading">Your week in preview</h4>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </div>

      <Footer />
    </>
  );
}
