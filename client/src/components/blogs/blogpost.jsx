import React from 'react'

import "./blogpost.css";

export default function BlogPost(props) {
    return (
        <div className='blogbox w-100 d-flex flex-column justify-content-center align-items-center'>
            <div className="blogcontent mb-3">
                <div className="blogimg w-100 d-flex justify-content-center align-items-center">
                    <img src={props.img} alt="blogimg" />
                </div>
                <div className="blogtext my-3">
                    <p className="blogdate mb-1 text-muted">{props.date}</p>
                    <h3 className="blogtitle">{props.title}</h3>
                    <p className="blogbody mb-2">{props.body}</p>
                    <em className="blogauthor text-muted">- {props.author}</em>
                </div>
            </div>
        </div>
    )
}
