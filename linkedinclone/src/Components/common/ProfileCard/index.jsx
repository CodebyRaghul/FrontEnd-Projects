import React from 'react'
import {useMemo, useState }from 'react'
import PostCard from '../PostCard'; 
import './index.scss'
import { useLocation } from 'react-router-dom';

export default function ProfileCard({currentUser, OnEdit}) {
  let location = useLocation();
  const [Allstatus, setAllstatus] = useState([]);
  const [currenProfile, setcurrentProfile] = useState({});

  useMemo(()=>{
    
    if(location?.state?.id) {
      getSingleStatus(setAllstatus, location?.state?.id);
    }
    if(location?.state?.email){
      getSingleUser(setcurrentProfile, location?.state?.email);
    }
    },[])
  // console.log(currentUser.object.name)
  // Allstatus.map((post)=>{
  //   console.log(post)
  // })
  // console.log(currenProfile);
  return (
    <>
    <div className='Profile-info'>    
      <div className='edit-btn-container'>
        <button onClick={OnEdit} className='edit-btn'> Edit </button>
      </div>

      <div className='Profile'>
        <div className='left'>
          <h3 className='userName'>
            {Object.values(currenProfile).length===0 ? 
             currentUser.name : 
             currenProfile.name} </h3>
          <p className='heading'>
          {Object.values(currenProfile).length===0 ? 
             currentUser.headline : 
             currenProfile.headline}
             </p> 
          {/* Software Engineer | Content Creator | Nutrietion */}
          <p>
          {Object.values(currenProfile).length===0 ? 
             currentUser.location : 
             currenProfile.location}
             </p>
          {/* Tamilnadu */}
        </div>
          {/* <h3> D.Raghul</h3> */}
        <div className='right-info'>
          <p className='company'>
          {Object.values(currenProfile).length===0 ? 
             currentUser.company : 
             currenProfile.company}
             </p> 
          {/* Tata Consultancy and services */}
          <p className='collage'>
          {Object.values(currenProfile).length===0 ? 
             currentUser.collage : 
             currenProfile.collage}
             </p>
          {/* Anna University, tiruchirapalli */}
          
        </div> 
      </div>
    </div>
    
      <div className='posts-main'>
        <div className='posts'>

        {Allstatus.filter((item)=>{
          // console.log(localStorage.getItem('userEmail'))
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
