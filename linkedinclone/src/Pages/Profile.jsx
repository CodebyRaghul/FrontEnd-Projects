import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import ProfileComponents from '../Components/ProfileComponents'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseConfig';
import Loader from '../Components/common/Loader'; 

export default function Profile({currentUser}) {

  const [loading, setloading] = useState(true);

  let navigate = useNavigate();
    useEffect( ()=>{
      onAuthStateChanged(auth, (res)=>{
        if(!res?.accessToken ){
          navigate("/")
        }
        else { 
          setloading(false);
        }
      })
    }
      ,[]); 

    // console.log(currentUser.object.name)
  return (loading? <Loader/> : <ProfileComponents currentUser={currentUser}/> );
}

