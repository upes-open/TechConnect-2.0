import React from 'react'

import './chapterpost.css';

export default function ChapterPost({ ...props }) {

    const mainclass = 'ch-post-main col col-5 ' + props.class;
    const mainstyle = {
        backgroundColor: props.bgColor
    }

    return (
        <div className={mainclass} style={mainstyle}>
            <div className="ch-post-title m-2">
                <img className="ch-post-author-img d-inline" src={props.authorImg} alt="title logo" />
                <div className='ch-post-author'>
                    <h6 className="ch-post-author-name d-inline">{props.author}</h6>
                    <div className='ch-post-author-info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                            <path d="M5.65873 9.08331H8.1911V11.0637H5.65873V9.08331ZM23.3853 4.13238V17.995C23.3853 19.0842 22.2458 19.9754 20.853 19.9754H3.12636C2.45474 19.9754 1.81062 19.7667 1.33571 19.3953C0.860797 19.0239 0.593994 18.5202 0.593994 17.995L0.606656 4.13238C0.606656 3.04317 1.7209 2.152 3.12636 2.152H4.39255V0.171631H6.92492V2.152H17.0544V0.171631H19.5868V2.152H20.853C22.2458 2.152 23.3853 3.04317 23.3853 4.13238ZM3.12636 6.11275H20.853V4.13238H3.12636V6.11275ZM20.853 17.995V8.09313H3.12636V17.995H20.853ZM15.7882 11.0637H18.3206V9.08331H15.7882V11.0637ZM10.7235 11.0637H13.2558V9.08331H10.7235V11.0637Z" fill="#555555" />
                        </svg>
                        <p className="ch-post-date">02 December 2022</p>
                    </div>
                </div>
            </div>
            <div className="ch-post-body">
                <img className="ch-post-body-img" src={props.postImg} alt="post img" />
                <div className='ch-post-body-content mt-2'>
                    <h5 className="ch-post-body-title">{props.title}</h5>
                    <p className="ch-post-body-text">{props.body}</p>
                </div>
            </div>
        </div>
    )
}
