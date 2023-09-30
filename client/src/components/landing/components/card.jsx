import React from "react";
import '../landing.css';
function Card(props) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <a className="cardlink" href={props.link}>
                <button>
                    Know More
                </button>
            </a>

        </div>
    );
}

export default Card;