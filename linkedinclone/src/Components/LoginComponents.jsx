import React, { useState } from "react"
import "../Sass/LoginComponent.scss"
import { LoginAPI } from '../api/AuthAPI'
import linkedinlogo from '../assets/linkedin.png'
import GoogleButton from 'react-google-button';

export default function LoginComponents() {

  const[ credentails, setCretential ] = useState({});
  const login = () =>{
    console.log( LoginAPI() );
  }

  return (
    <div className='login-Container'>    
      <img src={linkedinlogo} className="logo"/>

      <div className="content">
        <h1 className="Signin-head">Sign In</h1>
        <p class="sub-head"> Stay updated on your profossional world.</p>
      </div>

      <div className='login-Container-inner'>  
        <div className="input-field">
          <input 
            onChange={(event)=> 
              setCretential( {...credentails, email: event.target.value })
            }
            className="common-input"  //.common-input in css file
            placeholder="Email or Phone" // ::placeholder in css file
          />
                
          <input 
            onChange={(event)=> 
              setCretential( {...credentails, password: event.target.value })
            }
            className="common-input"
            placeholder="Password"
          />
        </div>

        <button onClick={login} 
          className='sign-btn'> Sign in</button>

        <hr className="hr-text" data-content="OR"/>

        <div className="google-btn-container">
          <GoogleButton className="google-btn"
            onclick={ () => {
              console.log('Google Button Clicked')
            }}/>

            <p className="go-to-signup"> New to Linkedin? 
              <span className="join-now">Join Now</span></p>
        </div> 

      </div>
    </div>
  )
}

