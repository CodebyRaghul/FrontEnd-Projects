import React, { useState } from 'react'
import './index.scss'

export default function ProfileEdit({ OnEdit}) {
  const [EditInput , setEditInput ] = useState({});

  const getInput= (event)=>{
    let { name , value } = event.target;
    let input = { [name]: value};
    setEditInput(...EditInput , ...input);
  }
  // console.log(EditInput)
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
          name='name'  />
        <input 
          onChange={getInput}
          className='common-input' 
          placeholder='location'
          name='name'  />
        <input 
          onChange={getInput}
          className='common-input' 
          placeholder='campany'
          name='name' />
        <input 
          onChange={getInput}
          className='common-input' 
          placeholder='collage'
          name='name' />

      </div>

      <div className='save-btn-container'>
        <button className="sign-btn"> Save </button>
      </div>

    </div>
  )
}
