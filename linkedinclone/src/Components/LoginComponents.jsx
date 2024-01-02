import React, { useState } from "react"
import "../Sass/LoginComponent.scss"
import { LoginAPI, GoogleAPI} from '../api/AuthAPI'
import linkedinlogo from '../assets/linkedin.png'
import GoogleButton from 'react-google-button';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"

export default function LoginComponents() {
  let naviGate = useNavigate();

  const[ credentails, setCretential ] = useState({});
  const login =async () =>{
    try{
      let res =await LoginAPI(credentails.email, credentails.password);
      toast.success("Sign In LinkedIn.!");
    }
    catch(err){
      console.log(err.error);
      toast.error("Please check your Crendentials!!!");
    }
  }
  const googlesignin =()=>{
    try{
      console.log(GoogleAPI());
      toast.success("Google Sign In.!");
    }
    catch(err){
      console.log(err.error);
      toast.error("Google SignIn Failed.!!!");
    }
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
            type="Email"
            className="common-input"  //.common-input in css file
            placeholder="Email or Phone" // ::placeholder in css file
          />
                
          <input 
            onChange={(event)=> 
              setCretential( {...credentails, password: event.target.value })
            }
            type="Password"
            className="common-input"
            placeholder="Password"
          />
        </div>

        <button onClick={login} 
          className='sign-btn'> Sign in</button>

        <hr className="hr-text" data-content="OR"/>

        <div className="google-btn-container">
          <GoogleButton onclick={googlesignin}
              className="google-btn" />

            <p className="go-to-signup"> New to Linkedin? 
              <span className="join-now" onClick={ ()=> naviGate("/Register") } >Join Now</span></p>
        </div> 

      </div>
    </div>
  )
}

