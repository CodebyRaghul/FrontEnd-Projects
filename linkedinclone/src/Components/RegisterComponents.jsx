import React, { useState } from "react"
import "../Sass/RegisterComponents.scss"
import { RegisterAPI, GoogleAPI} from '../api/AuthAPI'
import linkedinlogo from '../assets/linkedin.png'
import GoogleButton from 'react-google-button';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"

export default function RegisterComponents() {
  let naviGate = useNavigate();

  const[ credentails, setCretential ] = useState({});
  const register =async () =>{
    try{
      let res =await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account Created..!");
    }
    catch(err){
      console.log(err.error);
      toast.error("Account can't be Created!!!");
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
    <div className='Register-Container'>    
      <img src={linkedinlogo} className="Register-logo"/>

      <div className='Register-Container-inner'>  

        <h1 className="Signup-head">SignUp </h1>
        <h2 className="Signup-Content"> Make the most of your professional life</h2>

        <div className="Register-input-field">
          <p className="input-text">Email or Phone Number</p>
          <input 
            onChange={(event)=> 
              setCretential( {...credentails, email: event.target.value })
            }
            type="Email"
            className="Register-common-input"  //.common-input in css file
            // placeholder="Email or Phone" // ::placeholder in css file
          />
          <p className="input-text">Password ( 6 or more character )</p>    
          <input 
            onChange={(event)=> 
              setCretential( {...credentails, password: event.target.value })
            }
            type="Password"
            className="Register-common-input"
            // placeholder="Password"
          />
        </div>

        <button onClick={register} 
          className='signup-btn'> Sign Up </button>

        <hr className="Register-hr-text" Register-content="OR"/>

        {/* <div className="Register-google-btn-container"> */}
          <GoogleButton onclick={googlesignin}
              className="Register-google-btn" />

            <p className="go-to-signin"> New to Linkedin? 
              <span className="signin" onClick={ ()=> naviGate("/") } >Sign In</span></p>
      
      </div>
    </div>
  )
}

