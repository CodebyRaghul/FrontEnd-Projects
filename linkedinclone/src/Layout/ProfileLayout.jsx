import React, { useMemo, useState } from 'react'
import Profile from '../Pages/Profile'
import TopBar from '../Components/TopBar'
import { getCurrentUser } from '../api/firestoreAPI'
export default function ProfileLayout() {
  const [ currentUser, setcurrentUser] = useState({});
  
  useMemo(()=>{
    getCurrentUser({setcurrentUser});
  },[])
  
  return (
    <div> 
        <TopBar/>
        <Profile currentUser={currentUser}/> 
    </div>
  )
}
