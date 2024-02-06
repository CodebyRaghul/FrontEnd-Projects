import React from 'react'
import './index.scss'

export default function ProfileCard({currentUser, OnEdit}) {
  // console.log(currentUser.object.name)
  return (

    <div className='Profile-card'>    
      <div className='edit-btn-container'>
        <button onClick={OnEdit} className='edit-btn'> Edit </button>
      </div>

      <h3 className='userName'> {currentUser.object.name}</h3>
      {/* <h3> D.Raghul</h3> */}
    </div>
  )
};
