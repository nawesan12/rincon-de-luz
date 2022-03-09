import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore'
import db from '../database/firebase'

import './static/css/blogarticle.css'

const UpcomingEvents = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        const getEvents = async () => {
            const event = await getDocs(collection(db, 'events'))
            const events = []
            
            event.forEach((doc) => {
                const { fecha, titulo, description, image } = doc.data()
                events.push({fecha, titulo, description, image})
            })

            setEvents(events)
            console.log('dentro: ', events)
        }
        getEvents()
    }, [])

    console.log('fuera: ', events)


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