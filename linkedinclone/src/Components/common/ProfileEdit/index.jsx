import React, { useState } from 'react'
import { editprofile } from '../../../api/firestoreAPI';
import './index.scss'

export default function ProfileEdit({ currentUser,OnEdit}) {
  const [EditInput , setEditInput ] = useState({});

  const getInput= (event)=>{
    let { name , value } = event.target;
    let input = { [name]: value};
    setEditInput(...EditInput , ...input);
  }
  console.log(EditInput)

  const profiledata = ()=>{
    editprofile(currentUser.id,EditInput);
  }
  return (
    <div className='Profile-card'>
      <div className='edit-btn-container'>
        <button onClick={OnEdit} className='edit-btn'> Go Back </button>
      </div>

      <div className='input-container'>

        <input 
          onChange={getInput}
          className='common-input' 
          placeholder='name'
          name='name'  />
        <input
          onChange={getInput} 
          className='common-input' 
          placeholder='headline'
          name='headline'  />
        <input 
          onChange={getInput}
          className='common-input' 
          placeholder='location'
          name='location'  />
        <input 
          onChange={getInput}
          className='common-input' 
          placeholder='campany'
          name='campany' />
        <input 
          onChange={getInput}
          className='common-input' 
          placeholder='collage'
          name='collage' />

      </div>

      <div className='save-btn-container'>
        <button className="sign-btn" onClick={profiledata}> Save </button>
      </div>

    </div>
  )
}
