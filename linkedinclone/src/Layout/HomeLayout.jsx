import React, { useMemo, useState } from 'react'
import Home from '../Pages/Home'
import TopBar from '../Components/TopBar'
import { getCurrentUser } from '../api/firestoreAPI'
export default function HomeLayout() {
  const [ currentUser, setcurrentUser] = useState({});
  
  useMemo(()=>{
    getCurrentUser(setcurrentUser);
  },[])
  
  return (
    <div> 
        <TopBar/>
        <Home currentUser={currentUser}/> 
    </div>
  )
}
