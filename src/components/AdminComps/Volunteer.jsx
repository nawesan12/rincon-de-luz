import React, { useState, useEffect } from 'react'

import { uploadData } from './services/uploadData'
import { handleInput } from './services/handleInput'

function Volunteer(props) {

    const [user, setNewUser] = useState({
      email: ''
    })
    const [openUserform, setOpenUserform] = useState(false)

    const v = props.volunteer

    useEffect(() => {
      setNewUser({
        email: v.email
      })
    }, [v.email]);

    const submitNewUser = async () => {
      await uploadData(user, 'users', () => {
        setNewUser({})
        alert('Usuario subido con exito!')
        closeUserForm()
      })
    }

    const openUserForm = () => {
        setOpenUserform(true)
    }

    const closeUserForm = () => {
        setNewUser({})
        setOpenUserform(false)
    }

  return (
    <>
    <article className="volunteer">
        <p><span>Nombre:</span> {v.name + " " + v.surname}</p>
        <p className='email'><span>Email:</span> {v.email}</p>
        <p><span>DNI:</span> {v.dni}</p>
        <p><span>Localidad:</span> {v.localidad}</p>
        <p><span>Direccion:</span> {v.direccion}</p>

        <button onClick={openUserForm}>INSCRIBIR VOLUNTARIO</button>
    </article>

    <article className={openUserform === true ? "volunteer_form open-form" : "volunteer_form"}>
      <div>
        <span onClick={closeUserForm}>X</span>
        <h2>Formulario de persona</h2>
        <form>  
            <label>Nombre:</label>
            <input type="text" name="name" onChange={(value) => handleInput('username', value, setNewUser, user)} />
            <label>Contraseña:</label>
            <input type="text" name="surname" onChange={(value) => handleInput('password', value, setNewUser, user)} />
        </form>
        <button onClick={submitNewUser}>CREAR USUARIO</button>
      </div>
    </article>
    </>
  )
}

export default Volunteer