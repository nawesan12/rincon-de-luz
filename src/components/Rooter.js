import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import logo from './static/images/logo.svg'

export default function Rooter() {

    const [isOpen, setIsOpen] = useState(false);
    const [isNecessary, setNecessary] = useState(false);

    const scrollHandle = () => {
        if (window.scrollY > 300) {
            setNecessary(true);
        } else {
            setNecessary(false);
        }
    }

    window.onscroll = () => scrollHandle();

    const scrollToTop = () => { 
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        })
        setIsOpen(false);
    }

    return (
        <>
            <header className="app-header">
                <Link onClick={() => { scrollToTop() }} to="/"><img src={logo} className="app-logo" alt="logo" /></Link>
                <nav className={ isOpen ? 'menu open' : 'menu closed' }>
                    <ul className="menu-list">
                        <Link onClick={() => { scrollToTop() }} to="/">INICIO</Link>
                        <Link onClick={() => { scrollToTop() }} to="/donate">DONAR</Link>
                        <Link onClick={() => { scrollToTop() }} to="/blog">BLOG</Link>
                        <Link onClick={() => { scrollToTop() }} to="/events">EVENTOS</Link>
                        <Link onClick={() => { scrollToTop() }} to="/contact">CONTACTO</Link>
                    </ul>
                    <ul className="menu-list right">
                        <Link onClick={() => { scrollToTop() }} to="/register" className="register">REGISTRARSE</Link>
                        <Link onClick={() => { scrollToTop() }} to="/login" className="login">ACCEDER</Link>
                    </ul>
                </nav>
                <span className="burger" onClick={ () => setIsOpen(!isOpen) }>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </span>
            </header>
            <div 
                className={isNecessary === true ? "go-upside" : " "}
                onClick={() => { scrollToTop() }}
                >🔺</div>
            <Outlet/>
        </>
    )
}