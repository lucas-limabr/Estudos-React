import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PostCard({post}) {
  return (
    <div>
      <h1>ID do usuário que publicou: ${post.id}</h1>
      <NavLink to={`/post/${id}`}>
        Ver mais
      </NavLink>
    </div>
  )
}
