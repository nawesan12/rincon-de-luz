import React from 'react'

import logo from '../static/images/logo.svg'

function AsideMenu({ volunteers, openBlogSection, openEventsSection, openVolunteersSection, openCommentsSection }) {
  return (
    <aside className="app_aside">
        <header className="aside_header">
            <img src={logo} alt="Rincon de Luz" />
            <h1>Rincon de Luz</h1>
        </header>

        <section className="settings_section">
            <ul className="list">
                <li className="item" onClick={openBlogSection}>+ Publicar Articulo</li>
                <li className="item" onClick={openEventsSection}>+ Crear Evento</li>
                <li className="item" onClick={openVolunteersSection}>Peticiones de Inscripcion <span>{volunteers.length}</span></li>
                <li className="item" onClick={openCommentsSection}>Ver comentarios</li>
            </ul>
        </section>

        <section className="aux_buttons">
            Aun no se que ira aca
        </section>
    </aside>
  )
}

export default AsideMenu