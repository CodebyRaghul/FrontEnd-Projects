import React from 'react'
import {useMemo, useState }from 'react'
import {GetStatus} from '../../../api/firestoreAPI';
import PostCard from '../PostCard'; 
import './index.scss'

export default function ProfileCard({currentUser, OnEdit}) {
  const [Allstatus, setAllstatus] = useState([]);

  useMemo(()=>{
    GetStatus(setAllstatus);
    },[])
  // console.log(currentUser.object.name)
  return (

    <div className='Profile-card'>    
      <div className='edit-btn-container'>
        <button onClick={OnEdit} className='edit-btn'> Edit </button>
      </div>

      <div className='Profile-info'>
        <div className='left'>
          <h3 className='userName'> {currentUser.object.name}</h3>
          <p className='heading'>Software Engineer | Content Creator | Nutrietion</p>
          <p>Tamilnadu</p>
        </div>
          {/* <h3> D.Raghul</h3> */}
        <div className='right-info'>
          <p className='company'>Tata Consultancy and services</p>
          <p className='collage'>Anna University, tiruchirapalli</p>
          
          <p></p>
        </div> 
      </div>
      <div className='posts'>
        {Allstatus.map((post)=>{
                // const myobj = ; 
        return ( <PostCard post={post}/> );
          })}    
        </div>
    </div>
  )
};
