import React from 'react'
import './static/css/login.css'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

import { getData } from '../components/AdminComps/services/getData'
import { handleInput } from '../components/AdminComps/services/handleInput'

export default function Login() {

    const [users, setUsers] = useState([])
    const [userData, setUserData] = useState({})
    
    const navigation = useNavigate()

    useEffect(() => {
      getData('users', setUsers)
    }, [])
    
    const isValidUser = users.some(user =>
        user.username === userData.enteredUsername && user.password === userData.enteredPassword
    )

    const handleLogin = () => {
        if (isValidUser) {
            alert('You are logged in!')
            navigation('/admin')
        } else {
            alert('Invalid username or password')
        }
    }

    return (
        <section className="login-page" style={{paddingTop:'15vh', textAlign:'center'}}>
            <h1>INGRESAR</h1>
            <input type="text" placeholder="Usuario" onChange={(value) => handleInput('enteredUsername', value, setUserData, userData)} />
            <input type="text" placeholder="Contraseña" onChange={(value) => handleInput('enteredPassword', value, setUserData, userData)}/>
            <button onClick={handleLogin}>INGRESAR</button>
        </section>
    )
}
