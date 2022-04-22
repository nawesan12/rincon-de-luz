import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { addDoc, collection } from 'firebase/firestore'
import db from '../database/firebase'

import './static/css/register.css'

export default function Register() {

    const navigate = useNavigate()

    const [datos, setDatos] = useState({
        name: '',
        surname: '',
        dni: '',
        localidad: '',
        direccion: '',
        email: ''
    });

    const handleChangeText = (name, event) => {
        setDatos({...datos, [name]: event.target.value})
    }

    async function saveNewVolunteer() {
        if (datos.name === '' || datos.dni === '' || datos.email === '') {
            alert('Debes completar todos los campos!');
        } else {
            try {
                const comentario = await addDoc(collection(db, 'volunteers'), {
                    name: datos.name,
                    surname: datos.surname,
                    email: datos.email,
                    dni: datos.dni,
                    localidad: datos.localidad,
                    direccion: datos.direccion
                });
                console.log("Documento escrito con el id de: ", comentario.comment);
                navigate('/')
                alert('Gracias por inscribirte!')
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <section className="register-page" style={{paddingTop:'15vh', textAlign:'center'}}>
            <h1>Quieres ser parte?</h1>
            <h2>Envianos tu info!</h2>

            <p>Llena los siguientes campos y en los proximos dias nos encargaremos de contactarte para poder conocerte y brindarte una clave de acceso y usuario propios! Estaremos encantados de que seas parte de nuestra comunidad, a por un mundo mas gentil!</p>

            <form className='form-container'>
                <input onChange={(value) => handleChangeText('name', value)} className="text-area" placeholder="Nombre" required/>
                <input onChange={(value) => handleChangeText("surname", value)} className="name" type="text" placeholder="Apellido" required/>
                <input onChange={(value) => handleChangeText("dni", value)} className="email" type="text" placeholder="DNI" required/>
                <input onChange={(value) => handleChangeText("localidad", value)} className="website" placeholder="Localidad" required/>
                <input onChange={(value) => handleChangeText("direccion", value)} className="website" placeholder="Direccion" required/>
                <input onChange={(value) => handleChangeText("email", value)} className="website" placeholder="Email" required/>
            </form>
            <button onClick={() => saveNewVolunteer()}>INSCRIBIRME</button>            
        </section>
    )
}