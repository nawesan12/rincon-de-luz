import React, { useEffect, useState } from 'react';
import { getData } from './AdminComps/services/getData'

import './static/css/blogarticle.css'

const BlogsContainer = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        getData('blogs', setBlogs)
    }, [])

    return (
        <>
        {
            blogs.map((e, index) => (
                <article key={index} className="blog-article">
                    <header><h3>{e.title}</h3></header>
                    <div className="img-container">
                        <img src={e.image} alt={e.title} title={e.title} />
                    </div>
                    <p>{e.content}</p>
                    <span>{e.createdAt}</span>
                </article>
            ))
        }
        </>
    )
    
}

export default BlogsContainer;
