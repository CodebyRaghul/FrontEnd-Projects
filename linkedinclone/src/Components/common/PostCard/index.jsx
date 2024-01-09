import React from 'react'
import "./index.scss";
export default function PostCard({post}) {
  return (
    <div className='post-card'>
      <p className='status'>
        { JSON.stringify(post.object.status)
            .replaceAll("\"","")    }
      </p>
        
    </div>
  )
};