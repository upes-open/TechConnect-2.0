import React from 'react'
import Card from './components/card';

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer';
import './landing.css'

function Landing() {
    return (
        <>
            <Navbar />
            <div className='main-landing'>
                <div className="landing">
                    Techconnect
                    <hr />
                </div>
                <div id='cardlist'>
                    <Card title='Chapter' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum labore laborum omnis, 
                    quo consequuntur ullam ea saepe voluptate voluptates sed officiis temporibus fuga deserunt! Laboriosam perspiciatis ut dolorum at?'
                        link='/chapters' />
                    <Card title='Blog' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum labore laborum omnis, quo consequuntur ullam ea saepe voluptate voluptates sed officiis temporibus fuga deserunt! Laboriosam perspiciatis ut dolorum at?' />
                    <Card title='Opportunities' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum labore laborum omnis, quo consequuntur ullam ea saepe voluptate voluptates sed officiis temporibus fuga deserunt! Laboriosam perspiciatis ut dolorum at?' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Landing;