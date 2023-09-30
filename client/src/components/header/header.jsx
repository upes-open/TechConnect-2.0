import React from 'react';

import './header.css';

export default function Header(props) {

    const chaptersBoxClass = ' links col-sm-12 col-md-4' + (props.highlight === 'chapters' ? ' highlight' : '');
    const blogsBoxClass = 'links col-sm-12 col-md-4' + (props.highlight === 'blogs' ? ' highlight' : '');
    const oppsBoxClass = 'links col-sm-12 col-md-4' + (props.highlight === 'opportunities' ? ' highlight' : '');

    return (
        <>

            <div className="header-box mt-5">
                <div className="header">
                    <div className="links-box row">
                        <div className={chaptersBoxClass}>
                            <div className='link-box px-3'>
                                <a href="/chapters" className='link'>Chapters</a>
                            </div>
                        </div>
                        <div className={blogsBoxClass}>
                            <div className='link-box px-3'>
                                <a href="/blogs" className='link'>Blogs</a>
                            </div>
                        </div>
                        <div className={oppsBoxClass}>
                            <div className='link-box px-3'>
                                <a href="/opportunities" className='link'>Opportunities</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='header-box'>
                <div className="header">
                    <div className='boxes'>
                        <div className={chaptersBoxClass}>
                            <div className="link-box">
                                <a href="/chapters" className='link'>
                                    Chapters
                                </a>
                            </div>
                        </div>
                        <div className={blogsBoxClass}>
                            <div className="link-box">
                                <a href="/blogs" className='link'>
                                    Blogs
                                </a>
                            </div>
                        </div>
                        <div className={oppsBoxClass}>
                            <div className="link-box">
                                <a href="/opportunities" className='link'>
                                    Opportunities
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}