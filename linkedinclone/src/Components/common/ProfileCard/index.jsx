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
  // Allstatus.map((post)=>{
  //   console.log(post)
  // })
  return (
    <>
    <div className='Profile-info'>    
      <div className='edit-btn-container'>
        <button onClick={OnEdit} className='edit-btn'> Edit </button>
      </div>

      <div className='Profile'>
        <div className='left'>
          <h3 className='userName'> {currentUser.name}</h3>
          <p className='heading'>{currentUser.headline}</p> 
          {/* Software Engineer | Content Creator | Nutrietion */}
          <p>{currentUser.location}</p>
          {/* Tamilnadu */}
        </div>
          {/* <h3> D.Raghul</h3> */}
        <div className='right-info'>
          <p className='company'>{currentUser.company}</p> 
          {/* Tata Consultancy and services */}
          <p className='collage'>{currentUser.collage}</p>
          {/* Anna University, tiruchirapalli */}
          
        </div> 
      </div>
    </div>
    
      <div className='posts-main'>
        <div className='posts'>

        {Allstatus.filter((item)=>{
          return item.object.userEmail === localStorage.getItem('userEmail')
            }).map((post)=>{
            // const myobj = ; 
          return ( <PostCard  post={post}/> );
            })} 
          </div>   
        </div>
        {/* <div>
          <p>{currentUser.object.name}</p>
          <p>{currentUser.object.name}</p>
          <p>{currentUser.object.name}</p>
          <p>{currentUser.object.name}</p>
        </div> */}

    </>
  )
};
