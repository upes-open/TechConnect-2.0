import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Footer from "../footer/footer";

import createImg from "../../assets/img/chapters/chapterpost.png";

export default function CreateBlogAdmin() {
  const [userType, setUserType] = useState("user"); // ["admin", "user"

  const [formData, setFormData] = useState({
    blogTitle: "",
    writerName: "",
    writerYOE: "",
    writerDesignation: "",
    blogContent: "",
  });

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      blogTitle: "",
      writerName: "",
      writerYOE: "",
      writerDesignation: "",
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
                  <div className="formbox2 text-center d-flex flex-column justify-content-center align-items-center py-3">
                    {userType==="user" && <h1 className="mt-3">Submit A Blog</h1>}
                    {userType==="admin" && <h1 className="mt-3">Publish A Blog</h1>}
                    <form className="form-group" style={{ width: "90%" }} onSubmit={handleOnSubmit}>
                      <p className="mb-2 text-start">Blog Details</p>
                      <div className="row mb-2">
                        <input
                          type="text"
                          className="form-control col mx-1"
                          id="blogTitle"
                          placeholder="Title of Blog"
                          value={formData.blogTitle}
                          onChange={handleOnChange}
                        />
                        <input
                          type="text"
                          className="form-control col mx-1"
                          id="writerName"
                          placeholder="Name of Writer"
                          onChange={handleOnChange}
                          value={formData.writerName}
                        />
                      </div>
                      <div className="row">
                        <input
                          type="text"
                          className="form-control col mx-1"
                          id="writerYOE"
                          placeholder="Year of Education"
                          onChange={handleOnChange}
                          value={formData.writerYOE}
                        />
                        <input
                          type="text"
                          className="form-control col mx-1"
                          id="writerDesignation"
                          placeholder="Writer Designation"
                          onChange={handleOnChange}
                          value={formData.writerDesignation}
                        />
                      </div>
                      <p className="mt-4 mb-2 text-start">Event Details</p>
                      <div className="row row-cols-1 row-cols-md-2">
                        <textarea
                          className="form-control col my-1 mx-0"
                          id="blogContent"
                          rows="3"
                          placeholder="Blog Content"
                          value={formData.blogContent}
                          onChange={handleOnChange}
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary mt-3">
                        Submit
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
