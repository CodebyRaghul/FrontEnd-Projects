import React, { useState } from 'react'
import { editprofile } from '../../../api/firestoreAPI';
import './index.scss'

export default function ProfileEdit({ currentUser,OnEdit}) {
  const [EditInput , setEditInput ] = useState({});

  // const getInput= (event)=>{ 
  //   // let { name , value } = event.target;
  //   // console.log(name,value)
  //   // let input = { [name]: value };
  //   // setEditInput(...EditInput,...{input})
  //   // console.log(...EditInput, [name], value);
  // }
  console.log(EditInput)

  const profiledata = ()=>{
    editprofile(currentUser?.id,EditInput)
    // editprofile(currentUser.id,EditInput);
  }
  return (
    <div className='Profile-card'>
      <div className='edit-btn-container'>
        <button onClick={OnEdit} className='edit-btn'> Go Back </button>
      </div>

      <div className='input-container'>

        <input 
          onChange={(event)=> 
            setEditInput( {...EditInput, name: event.target.value })
          }
          className='common-input' 
          placeholder='name'
          name='name'  />
        <input
          onChange={(event)=> 
            setEditInput( {...EditInput, headline: event.target.value })
          }
          className='common-input' 
          placeholder='headline'
          name='headline'  />
        <input 
          onChange={(event)=> 
            setEditInput( {...EditInput, location: event.target.value })
          }
          className='common-input' 
          placeholder='location'
          name='location'  />
        <input 
          onChange={(event)=> 
            setEditInput( {...EditInput, company: event.target.value })
          }
          className='common-input' 
          placeholder='company'
          name='company' />
        <input 
          onChange={(event)=> 
            setEditInput( {...EditInput, collage: event.target.value })
          }
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
