import React from 'react'
import './static/css/login.css'

export default function Login() {
    return (
        <section className="login-page" style={{paddingTop:'15vh', textAlign:'center'}}>
            <h1>INGRESAR</h1>
            <input type="text" placeholder="Usuario"/>
            <input type="text" placeholder="Contraseña"/>
            <button>INGRESAR</button>
        </section>
    )
}
