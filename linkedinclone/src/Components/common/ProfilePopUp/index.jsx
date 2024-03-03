import React from 'react'
import { onLogOut } from '../../../api/AuthAPI'
import "./index.scss"
import { useNavigate } from 'react-router-dom'

export default function ProfilePopUp() {
  let navi = useNavigate()
  return (
    <div className='popup-card'>
      <ul className='Profile'>
          <li className='popup-option' onClick={()=>{
            navi('/Profile')
          }}> Profile</li>
      </ul>

      <ul className='LogOut'>
          <li className='popup-option' onClick={onLogOut}> LogOut</li>
      </ul>
        
    </div>
  )
}
