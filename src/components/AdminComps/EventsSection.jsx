import React, { useState } from 'react'
import { uploadData } from './services/uploadData'
import { handleInput } from './services/handleInput'

function EventsSection() {

  const [data, setData] = useState({})

  const uploadEvent = () => {
    uploadData(data, 'events', () => {
      setData({})
      alert("Evento subido con exito!")
    })
  }

  return (
    <section className="events_section">
      <h1>Crear Evento</h1>

      <form>
        <input type="text" onChange={(value) => handleInput('title', value, setData, data)} placeholder='Titulo' required/>
        <textarea type="text" onChange={(value) => handleInput('description', value, setData, data)} placeholder='Escribe la descripcion...' required/>
        <input type="text" onChange={(value) => handleInput('image', value, setData, data)} placeholder='Pega link de imagen' />
        <input type="text" onChange={(value) => handleInput('fecha', value, setData, data)} placeholder='Que dia es el evento?' />
      </form>

      <button onClick={uploadEvent} style={{padding:'1rem 2rem', border:'none', outline:'none', background:'#a5a5ff', cursor:'pointer', }}>
        SUBIR
      </button>  
    </section>
  )
}

export default EventsSection