import React, { useState, useEffect } from 'react'

import { getData } from './services/getData'

import Volunteer from './Volunteer'

function VolunteersSection() {

  const [volunteers, setVolunteers] = useState([])

  useEffect(() => {
    getData('volunteers', setVolunteers)
  }, [])

  return (
    <section className="volunteers_section">
      <h1>Voluntarios a colaborar</h1>
      <section className="volunteers_container">
        {
          volunteers.map((volunteer, index) => (
            <Volunteer volunteer={volunteer} key={index} />
          ))
        }  
      </section>
    </section>
  )
}

export default VolunteersSection