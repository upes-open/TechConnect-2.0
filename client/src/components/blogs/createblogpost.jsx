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

import createImg from "../../assets/img/blogs/blogpost.png";

const getCurrentDate = () => {
  return dayjs().format("YYYY-MM-DD");
};

export default function CreateBlogPost() {
  const [currentDate] = useState(dayjs(getCurrentDate()));

  const [userType, setUserType] = useState("user"); // ["admin", "user"

  const [formData, setFormData] = useState({
    blogTitle: "",
    writerName: "",
    writerYOE: "",
    blogContent: "",
  });

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      blogTitle: "",
      writerName: "",
      writerYOE: "",
      blogContent: "",
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
      <Header highlight="blogs" />

      <div className="chapters-content-box d-flex justify-content-center my-5" style={{minHeight: '60vh'}}>
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
                  <div className="formbox2 text-center d-flex flex-column justify-content-center align-items-center py-3">
                    {userType==="user" && <h1 className="mt-3">Submit A Blog</h1>}
                    {userType==="admin" && <h1 className="mt-3">Publish A Blog</h1>}
                    <form className="form-group w-75" onSubmit={handleOnSubmit}>
                      <input type="text" className="form-control my-3" id="blogTitle" placeholder="Blog Title" onChange={handleOnChange} value={formData.blogTitle}/>
                      <input type="text" className="form-control my-3" id="writerName" placeholder="Your Name" onChange={handleOnChange} value={formData.writerName}/>
                      <input type="text" className="form-control my-3" id="writerYOE" placeholder="Your Year of Education" onChange={handleOnChange} value={formData.writerYOE}/>
                      <textarea
                        className="form-control"
                        id="blogContent"
                        rows="3"
                        placeholder="Add Blog Content"
                        onChange={handleOnChange}
                        value={formData.blogContent}
                      ></textarea>
                      <button type="submit" className="btn btn-primary mt-3">
                        Submit
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
