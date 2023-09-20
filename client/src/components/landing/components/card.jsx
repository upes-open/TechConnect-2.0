import React from "react";
import '../landing.css';
function Card(props) {
    return (
        <div className="card">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button>Know More</button>
        </div>
    );
}

export default Card;