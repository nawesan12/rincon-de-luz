import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore'
import db from '../database/firebase'

import './static/css/blogarticle.css'

const BlogsContainer = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const getBlogs = async () => {
            const blog = await getDocs(collection(db, 'blogs'))
            const blogs = []

            blog.forEach((doc) => {
                const { createdAt, title, content, image } = doc.data()
                blogs.push({ createdAt, title, content, image })
            })

            setBlogs(blogs)
        }

        getBlogs()
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
