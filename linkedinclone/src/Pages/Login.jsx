import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import LoginComponents from '../Components/LoginComponents'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseConfig';
import Loader from "../Components/common/Loader";

export default function Login() {
  const [ loading, setloading ] =useState(true);
  let navigate = useNavigate();
  useEffect( ()=>{
    onAuthStateChanged(auth, (res)=>{
      if( res?.accessToken ){
        navigate("/Home");
      }
      else{
        setloading(false);
      }
    })
  }
    ,[]);

  return (loading? <Loader/> : <LoginComponents/>);
}