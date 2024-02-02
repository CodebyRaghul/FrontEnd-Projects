import React from 'react'
import "./index.scss";
export default function PostCard({post}) {
  return (
    <div className='post-card'>

      <p className='name'>{post.object.userName}</p>

      <p className='date-time'>{post.object.date}</p>
      
      <p className='status'>
        {post.object.status}
      </p>
        
    </div>
  )
};