import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./index.scss";
export default function PostCard({post}) {
  let navigate = useNavigate();
  // console.log("Raghul");
  return (
    <div className='post-card'>

      <p className='name'
        onClick={ ()=> navigate("/profile", 
          { state : {id: post?.userID , email: post?.userEmail}})}
        >{post.object.userName}</p>

      <p className='date-time'>{post.object.date}</p>
      
      <p className='status'>
        {post.object.status}
      </p>
        
    </div>
  )
};