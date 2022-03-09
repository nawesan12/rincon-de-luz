import React from 'react'

import { doc, deleteDoc } from 'firebase/firestore'
import db from '../../database/firebase'

function Volunteer(props) {

    const v = props.volunteer

    const deleteVolunteer = async () => {
        await deleteDoc(doc(db, 'volunteers', v.id))
        alert('Persona eliminada!')
    }

  return (
    <article className="volunteer">
        <h3>{v.name + " " + v.surname}</h3>
        <p className='email'>{v.email}</p>
        <p>{v.dni}</p>
        <p>{v.localidad}</p>
        <p>{v.direccion}</p>

        <button onClick={deleteVolunteer}>INSCRIBIR VOLUNTARIO</button>
    </article>
  )
}

export default Volunteer