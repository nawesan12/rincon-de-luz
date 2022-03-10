import React, { useState } from 'react'
import { uploadData } from './AdminComps/services/uploadData' 
import { handleInput } from './AdminComps/services/handleInput'

import './static/css/commentsForm.css'

function CommentsForm() {

    const [datos, setDatos] = useState({
        date: new Date().toLocaleString()
    });

    async function saveNewComment() {
        if (datos.comment === '' || datos.name === '' || datos.email === '') {
            alert('Debes completar todos los campos!');
        } else {
            try {
                uploadData(datos, 'comentarios', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                    alert('Gracias por tu comentario!')
                });
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <section className="to-comment-form">
            <h3>Danos Tu Opinion</h3>
            <form>
                <textarea onChange={(value) => handleInput('comment', value, setDatos, datos)} className="text-area" placeholder="Escribe tu comentario*" required/>
                <input onChange={(value) => handleInput('name', value, setDatos, datos)} className="name" type="text" placeholder="Nombre*" required/>
                <input onChange={(value) => handleInput('email', value, setDatos, datos)} className="email" type="text" placeholder="Email*" required/>
                <input onChange={(value) => handleInput('website', value, setDatos, datos)} className="website" placeholder="Website"/>
                <div><input type="checkbox" className="savemyblablabla"/> Guardar mi nombre, email, and website en este navegador para mis futuros comentarios</div>
            </form>
            <button onClick={() => saveNewComment()}>ENVIAR COMENTARIO</button>            
        </section>
    )
}

export default CommentsForm;
