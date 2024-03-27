import React, { useState } from 'react'
import ProfileCard from './common/ProfileCard'
import ProfileEdit from './common/ProfileEdit'
export default function ProfileComponents({currentUser}) {
  const [isEdit , setisEdit] = useState('false')
  const OnEdit =()=>{
    setisEdit(!isEdit);      //revert the Boolean Value
  }
  // console.log(currentUser.object.name)
  return (
    <div>
        { 
        
        isEdit? ( <ProfileCard currentUser={currentUser} OnEdit={OnEdit}/>) :
            (<ProfileEdit currentUser={currentUser} OnEdit={OnEdit}/> )
        //  ( <ProfileCard currentUser={currentUser} OnEdit={OnEdit}/>)
          
          }
    </div>
  )
}

