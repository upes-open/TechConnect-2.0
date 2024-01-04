import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Footer from "../footer/footer";

import createImg from "../../assets/img/chapters/chapterpost.png";

export default function CreateChapterAdmin() {
  const [formData, setFormData] = useState({
    chapterName: "",
    chapterLogo: "",
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
      chapterLogo: "",
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
            <Grid item xs={12} md={12} order={1}>
              <Container className="chapter-posts row d-flex justify-content-center">
                <div className="col-md-4 d-flex justify-content-center">
                  <div className="w-100">
                    <img src={createImg} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="formbox1 text-center d-flex flex-column justify-content-center align-items-center py-3">
                    <h1 className="mt-3">Create A Post</h1>
                    <form className="form-group" style={{ width: "90%" }} onSubmit={handleOnSubmit}>
                      <p className="mb-2 text-start">Chapter Details</p>
                      <div className="row">
                        <input type="text" className="form-control col mx-1" id="chapterName" placeholder="Name of Chapter" value={formData.chapterName} onChange={handleOnChange}/>
                        <input
                          type="file"
                          className="form-control col mx-1"
                          id="chapterLogo"
                          placeholder="Chapter Logo"
                          accept="image/png, image/jpg, image/jpeg"
                          onChange={handleOnChange}
                        />
                      </div>
                      <p className="mt-4 mb-2 text-start">Event Details</p>
                      <div className="row row-cols-1 row-cols-md-2">
                        <input type="text" className="form-control my-1 col" id="eventName" placeholder="Event Name" value={formData.eventName} onChange={handleOnChange}/>
                        <input type="text" className="form-control my-1 col" id="eventLocation" placeholder="Event Location" value={formData.eventLocation} onChange={handleOnChange}/>
                        <textarea className="form-control col my-1 mx-0" id="eventDescription" rows="3" placeholder="Event Description" value={formData.eventDescription} onChange={handleOnChange}></textarea>
                        <input type="date" className="form-control my-1 col" id="eventDate" placeholder="Event Date" value={formData.eventDate} onChange={handleOnChange}/>
                        <input
                          type="file"
                          className="form-control my-1 col"
                          id="eventPoster"
                          placeholder="Event Poster"
                          accept="image/png, image/jpg, image/jpeg"
                          onChange={handleOnChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary mt-3">
                        Post
                      </button>
                    </form>
                  </div>
                </div>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </div>

      <Footer />
    </>
  );
}
