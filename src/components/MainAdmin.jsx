import React, { useEffect, useState } from 'react'
import AsideMenu from './AdminComps/AsideMenu'
import './static/css/MainAdmin.css'

import { getData } from './AdminComps/services/getData'

import BlogSection from './AdminComps/BlogSection'
import EventsSection from './AdminComps/EventsSection'
import VolunteersSection from './AdminComps/VolunteersSection'
import CommentsSection from './AdminComps/CommentsSection'

function MainAdmin() {
    const [volunteers, setVolunteers] = useState([])

    //eslint-disable-next-line
    const [showBlogSection, setShowBlogSection] = useState(false);
    //eslint-disable-next-line
    const [showEventsSection, setShowEventsSection] = useState(false);
    //eslint-disable-next-line
    const [showVolunteersSection, setShowVolunteersSection] = useState(false);
    //eslint-disable-next-line
    const [showCommentsSection, setShowCommentsSection] = useState(false);

    const openBlogSection = () => {
        setShowBlogSection(true);
        setShowEventsSection(false);
        setShowVolunteersSection(false);
        setShowCommentsSection(false);
    }

    const openEventsSection = () => {
        setShowBlogSection(false);
        setShowEventsSection(true);
        setShowCommentsSection(false);
        setShowVolunteersSection(false);
    }

    const openVolunteersSection = () => {
        setShowBlogSection(false);
        setShowEventsSection(false);
        setShowCommentsSection(false);
        setShowVolunteersSection(true);
    }

    const openCommentsSection = () => {
        setShowBlogSection(false);
        setShowEventsSection(false);
        setShowVolunteersSection(false);
        setShowCommentsSection(true);
    }

    useEffect(() => {
        getData('volunteers', setVolunteers)
    }, [])

    return (
        <section className="wrapper">
            <AsideMenu 
                volunteers={volunteers} 
                openBlogSection={openBlogSection} 
                openEventsSection={openEventsSection} 
                openVolunteersSection={openVolunteersSection} 
                openCommentsSection={openCommentsSection}    
            />
            <section className="outlet">
                {  
                   showBlogSection === false && 
                   showCommentsSection === false && 
                   showEventsSection === false && 
                   showVolunteersSection === false ? 
                   (<h1>Selecciona una accion</h1>) : 
                   (<></>)
                }
                {showBlogSection && <BlogSection />}
                {showEventsSection && <EventsSection />}
                {showVolunteersSection && <VolunteersSection />}
                {showCommentsSection && <CommentsSection />}
            </section>
        </section>
    )
}

export default MainAdmin