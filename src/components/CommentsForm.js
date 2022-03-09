import React, { useState } from 'react'
import db from '../database/firebase'
import { addDoc, collection } from 'firebase/firestore'

import './static/css/commentsForm.css'

function CommentsForm() {

    const [datos, setDatos] = useState({
        comment: '',
        name: '',
        email: '',
        website: '',
        date: new Date().toLocaleString()
    });

    const handleChangeText = (name, event) => {
        setDatos({...datos, [name]: event.target.value})
    }

    async function saveNewComment() {
        if (datos.comment === '' || datos.name === '' || datos.email === '') {
            alert('Debes completar todos los campos!');
        } else {
            try {
                const comentario = await addDoc(collection(db, 'comentarios'), {
                    comment: datos.comment,
                    name: datos.name,
                    email: datos.email,
                    website: datos.website,
                    date: datos.date
                });
                console.log("Documento escrito con el id de: ", comentario.comment);
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
                alert('Gracias por tu comentario!')
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <section className="to-comment-form">
            <h3>Danos Tu Opinion</h3>
            <form>
                <textarea onChange={(value) => handleChangeText('comment', value)} className="text-area" placeholder="Escribe tu comentario*" required/>
                <input onChange={(value) => handleChangeText("name", value)} className="name" type="text" placeholder="Nombre*" required/>
                <input onChange={(value) => handleChangeText("email", value)} className="email" type="text" placeholder="Email*" required/>
                <input onChange={(value) => handleChangeText("website", value)} className="website" placeholder="Website"/>
                <div><input type="checkbox" className="savemyblablabla"/> Guardar mi nombre, email, and website en este navegador para mis futuros comentarios</div>
            </form>
            <button onClick={() => saveNewComment()}>ENVIAR COMENTARIO</button>            
        </section>
    )
}

export default CommentsForm;
