import React, { useState } from "react"
import "../Sass/RegisterComponents.scss"
import { RegisterAPI, GoogleAPI} from '../api/AuthAPI'
import { postUserData } from "../api/firestoreAPI"
import linkedinlogo from '../assets/linkedin.png'
import GoogleButton from 'react-google-button';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
import { getuniqueId } from "../helpers/uniqueId"

export default function RegisterComponents() {
  let naviGate = useNavigate();

  const[ credentails, setCretential ] = useState({});

  const register =async () =>{
    try{
      // postUserData({name:credentails.name,email:credentails.email});
      // toast.success("Account Created..!");
      let res =await RegisterAPI(credentails.email, credentails.password);
      naviGate("/Home");
      postUserData({
        useID: getuniqueId(),
        name:credentails.name,
        email:credentails.email});
      toast.success("Account Created..!");
      localStorage.setItem("userEmail", res.user.email);
    }
    catch(err){
      console.log(err.error);
      toast.error("Account can't be Created!!!");
    }
  }
  const googlesignin =()=>{
    try{
      GoogleAPI();
      toast.success("Google Sign In.!");
    }
    catch(err){
      console.log(err.error);
      toast.error("Google SignIn Failed.!!!");
    }
  }
  // console.log(credentails)

  return (
    <div className='Register-Container'>    
      <img src={linkedinlogo} className="Register-logo"/>

      <div className='Register-Container-inner'>  

        <h1 className="Signup-head">SignUp </h1>
        <h2 className="Signup-Content"> Make the most of your professional life</h2>

        <div className="Register-input-field">
        <p className="input-text">Your Name</p>
          <input 
            onChange={(event)=> 
              setCretential( {...credentails, name: event.target.value })
            }
            type="text"
            className="Register-common-input"  //.common-input in css file
            // placeholder="Email or Phone" // ::placeholder in css file
          />
          <p className="input-text">Email or Phone Number</p>
          <input 
            onChange={(event)=> 
              setCretential( {...credentails, email: event.target.value })
            }
            type="Email"
            className="Register-common-input"  //.common-input in css file
            // placeholder="Email or Phone" // ::placeholder in css file
          />
          <p className="input-text">Create Password ( 6 or more character )</p>    
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

            <p className="go-to-signin"> Already On Linkedin? {" "} 
              <span className="signin" onClick={ ()=> naviGate("/") } >Sign In</span></p>
      
      </div>
    </div>
  )
}

