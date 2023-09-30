import React from "react";

import Navbar from "../navbar/navbar";
import Header from "../header/header";

import "./chapters.css";

export default function Chapters() {
    return (
        <>  
            <Navbar />
            <Header highlight='chapters'/>
            
            <div className="chapters-heading mt-5">
                <div>
                    <h1 className="head-text">Chapters & Clubs</h1>
                </div>
            </div>

            <div className="chapters-content-box">
                <div className="chapters-content">
                    
                </div>
            </div>
            
        </>
    );
}