import React from 'react'
import './index.scss'

export default function ProfileCard({currentUser}) {
  return (

    <div className='Profile-card'> 
      {currentUser.object.name}
    </div>
  )
};
