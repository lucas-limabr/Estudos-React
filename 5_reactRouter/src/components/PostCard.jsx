import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PostCard({post}) {
  return (
    <div className='postCard-item'>
      <p>ID do usuário que publicou: {post.userId}</p>
      <NavLink to={`${post.id}`}>
        <button className='btn-ver-mais'>Ver mais</button>
      </NavLink>
    </div>
  )
}
