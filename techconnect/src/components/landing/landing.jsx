import Card from './components/card';
import Navbar from '../navbar/navbar'
import './landing.css'
import React from 'react'
function Landing() {
    return (
        <div className='main'>
            <Navbar />
            <div className="landing">Techconnect</div>
            <hr />
            <div id='cardlist'>
                <Card title='Chapter' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum labore laborum omnis, quo consequuntur ullam ea saepe voluptate voluptates sed officiis temporibus fuga deserunt! Laboriosam perspiciatis ut dolorum at?' />
                <Card title='Blog' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum labore laborum omnis, quo consequuntur ullam ea saepe voluptate voluptates sed officiis temporibus fuga deserunt! Laboriosam perspiciatis ut dolorum at?' />
                <Card title='Opportunities' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum labore laborum omnis, quo consequuntur ullam ea saepe voluptate voluptates sed officiis temporibus fuga deserunt! Laboriosam perspiciatis ut dolorum at?' />
            </div>
        </div>
    )
}

export default Landing