import React, { useEffect, useState } from 'react';
import { getData } from './AdminComps/services/getData'

import './static/css/blogarticle.css'

const UpcomingEvents = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        getData('events', setEvents)
    }, [])


    return (
        <>
        {
            events.map((e, index) => (
                <article key={index} className="blog-article" style={{width:'50vw'}}>
                    <header><h3>{e.titulo}</h3></header>
                    <div className="img-container">
                        <img src={e.image} alt={e.titulo}/>
                    </div>
                    <p>{e.description}</p>
                    <span>{e.fecha}</span>
                </article>
            ))
        }
        </>
    )
    
}

export default UpcomingEvents