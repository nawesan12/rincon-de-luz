import React from 'react'
import './static/css/contact.css'
import mapa from './static/mapa.png'

function Contact() {
    return (
        <section className="contact">
            <article className="contact_list">
                <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                        </svg>Mail de Rincon de Luz</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>Telefono de Rincon de Luz</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="4" />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>Instagram de Rincon de Luz</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7" />
                        <line x1="9" y1="4" x2="9" y2="17" />
                        <line x1="15" y1="7" x2="15" y2="20" />
                        </svg>Ubicacion de Rincon de Luz</li>
                </ul> 
            </article>
            <section className="leaflet_map" id="leaflet_map">
                <img src={mapa} alt="Ubicacion de Rincon de Luz"/>
            </section>
        </section>
    )
}

export default Contact;
