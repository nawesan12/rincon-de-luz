import React from 'react'
import { Link } from 'react-router-dom'

function Presentation() {
    return (
        <>
        <section className="presentation">
                <h1>Rincon de Luz</h1>
                <p>Hospitalidad, cariño y contencion.</p>
                <Link to="/donate">Actuar Ahora</Link>
            </section>
            <section className="collaborate">
                <article className="donatenow">
                    <p className="quote">
                        El largo camino para vencer la pobreza comienza con un niño.
                    </p>
                    <Link to="/donate"><b>Dona Ahora</b>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#ac3939" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="15" y1="16" x2="19" y2="12" />
                            <line x1="15" y1="8" x2="19" y2="12" />
                        </svg>
                    </Link>
                </article>
                <article className="collaboratewithus">
                    <p className="quote">
                        Ningun niño puede prosperar con el estomago vacio.
                    </p>
                    <Link to="/register"><b>Se Un Voluntario</b> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#ac3939" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="15" y1="16" x2="19" y2="12" />
                            <line x1="15" y1="8" x2="19" y2="12" />
                        </svg>
                    </Link>
                </article>
                <article className="childphoto"/>
            </section>
        </>
    )
}

export default Presentation;
