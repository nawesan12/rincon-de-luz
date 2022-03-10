import React from 'react'
import logo from './static/images/logo.svg';

export default function Footer() {
    return (
        <footer className="app-footer">
            <section className="container">
                <article className="first article">
                    <img src={logo} alt="Rincon de Luz Logo" />
                    <label>Rincon de Luz</label>
                    <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, </p>
                    <div className="social">
                        <a href="https://facebook.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffffff" fill="#fff" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <line x1="8" y1="11" x2="8" y2="16" />
                                <line x1="8" y1="8" x2="8" y2="8.01" />
                                <line x1="12" y1="16" x2="12" y2="11" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg>
                        </a>
                        <a href="https://twitter.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffffff" fill="#fff" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg>
                        </a>
                    </div>
                </article>
                <article className="second article">
                    <h3>Contacto</h3>
                    <div className="locationcontainer">
                        <p className="location">Gascon 7532</p>
                        <p className="location">Tierra del Fuego 3219</p>
                        <p className="location">Mar del Plata</p>
                    </div>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ac3939" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg><strong> Mar del Plata</strong>: 2235123465</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ac3939" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg><strong> Barrigas Llenas</strong>: 2235845256</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ac3939" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <polyline points="3 7 12 13 21 7" />
                        </svg><a href="mailto:nahueltecnicomdp@gmail.com">nahueltecnicomdp@gmail.com</a></span>
                </article>
                <article className="third article">
                    <h3>Links Utiles</h3>
                    <ul>
                        <li><a href="github">{`> Nuestra Organizacion`}</a></li>
                        <li><a href="github">{`> Vuelvete Un Voluntario`}</a></li>
                        <li><a href="github">{`> Casos`}</a></li>
                        <li><a href="github">{`> Sponsors`}</a></li>
                        <li><a href="github">{`> Preguntas Frecuentes`}</a></li>
                    </ul>
                </article>
                <article className="fourth article">
                    <strong>Ayudanos a mejorar el mundo.</strong>
                </article>
            </section>
            <section className="foot">
                <p><a href="https://github.com/">Politicas | Privacidad</a></p>
                <p>Copyright 2021 - Nahuel Santillan <br/> Todos los derechos reservados</p>
            </section>
        </footer>
    )
}