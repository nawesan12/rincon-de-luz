import React from 'react';
import '../components/static/css/home.css';

import Presentation from '../components/Presentation';
import HomeStaff from '../components/HomeStaff';

export default function Home() {
    return (
        <section className="home">
            <Presentation/>
            <HomeStaff />       
        </section>
    )
}
