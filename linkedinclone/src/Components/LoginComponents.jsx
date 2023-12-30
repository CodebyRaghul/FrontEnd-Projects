import React from 'react'
import "../Sass/LoginComponent.scss"
import { LoginAPI } from '../api/AuthAPI'

function LoginComponents() {

  const login = () =>{
    console.log( LoginAPI() );
  }

  return (
    <div>
        <h1>LoginComponents</h1>
        <button onClick={login} className='login-btn'> Login into LinkedIn</button>
    </div>
  )
}

export default LoginComponents