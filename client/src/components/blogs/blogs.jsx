import React, { useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Navbar from '../navbar/navbar'
import Header from '../header/header'
import Footer from "../footer/footer";

import BlogPost from './blogpost';

import postImg1 from "../../assets/img/blogs/blog1.png";
import postImg2 from "../../assets/img/blogs/blog2.png";
import postImg3 from "../../assets/img/blogs/blog3.png";

const getCurrentDate = () => {
  return dayjs().format('YYYY-MM-DD');
};

export default function Blogs() {

  const [currentDate] = useState(dayjs(getCurrentDate()));

  const posts = [
    {
      date: '12/12/2023',
      title: 'Research Paper',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh ex, pretium sit amet finibus sit amet, ornare vitae dolor. Sed risus ligula, placerat at imperdiet non, viverra eu quam. Maecenas pellentesque pharetra neque.',
      img: postImg1,
      author: 'Open Community'
    },
    {
      date: '12/12/2023',
      title: 'Research Paper',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh ex, pretium sit amet finibus sit amet, ornare vitae dolor. Sed risus ligula, placerat at imperdiet non, viverra eu quam. Maecenas pellentesque pharetra neque.',
      img: postImg2,
      author: 'Open Community'
    },
    {
      date: '12/12/2023',
      title: 'Research Paper',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh ex, pretium sit amet finibus sit amet, ornare vitae dolor. Sed risus ligula, placerat at imperdiet non, viverra eu quam. Maecenas pellentesque pharetra neque.',
      img: postImg3,
      author: 'Open Community'
    },
    {
      date: '12/12/2023',
      title: 'Research Paper',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh ex, pretium sit amet finibus sit amet, ornare vitae dolor. Sed risus ligula, placerat at imperdiet non, viverra eu quam. Maecenas pellentesque pharetra neque.',
      img: postImg1,
      author: 'Open Community'
    }
  ];

  return (
    <>
      <Navbar />
      <Header highlight='blogs' />

      <div className="chapters-heading mt-3">
        <h1 className="head-text">Blogs & Publications</h1>
      </div>

      <div className="chapters-content-box d-flex justify-content-center">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item md={3} order={{ md: 1 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Container className="chapter-posts row d-flex justify-content-center">
                <h2 className='mb-5 text-center'>Blogs to Checkout</h2>
                {posts.map((post, index) => (
                  <BlogPost
                    key={index}
                    {...post}
                  />
                ))}
              </Container>
            </Grid>
            <Grid item xs={12} md={6} borderLeft={{ md: 2 }} borderRight={{ md: 2 }} order={2} padding={{ md: 2 }}>
              <Container className="chapter-posts row d-flex justify-content-center">
                {posts.map((post, index) => (
                  <BlogPost
                    key={index}
                    {...post}
                  />
                ))}
              </Container>
            </Grid>
            <Grid item xs={12} md={3} order={3}>
              <Grid className='calendar'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar defaultValue={currentDate} readOnly />
                </LocalizationProvider>
              </Grid>
              <Container className='events text-center mb-5'>
                <h4 className='events-heading'>Create Blog</h4>
                <a className='btn btn-primary' href='/chapters/create'>Create</a>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </div>

      <Footer />
    </>
  )
}
