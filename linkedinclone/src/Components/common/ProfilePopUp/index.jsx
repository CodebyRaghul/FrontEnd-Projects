import React from 'react'
import { onLogOut } from '../../../api/AuthAPI'
import "./index.scss"
import { useNavigate } from 'react-router-dom'

export default function ProfilePopUp() {
  let navi = useNavigate()
  return (
    <div className='popup-card'>
      <ul className='popup-option'>
          <li className='popup-option' onClick={()=>{
            navi('/Profile')
          }}> Profile</li>
      </ul>

      <ul className='popup-option'>
          <li className='popup-option' onClick={onLogOut}> LogOut</li>
      </ul>
        
    </div>
  )
}
