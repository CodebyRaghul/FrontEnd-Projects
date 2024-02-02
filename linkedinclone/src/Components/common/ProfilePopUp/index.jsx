import React from 'react'
import { onLogOut } from '../../../api/AuthAPI'
import "./index.scss"

export default function ProfilePopUp() {
  return (
    <div className='popup-card'>
      <ul className='popup-option'>
          <li className='popup-option' onClick={onLogOut}> Profile</li>
      </ul>

      <ul className='popup-option'>
          <li className='popup-option' onClick={onLogOut}> LogOut</li>
      </ul>
        
    </div>
  )
}
