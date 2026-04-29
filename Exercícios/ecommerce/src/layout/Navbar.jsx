import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='menu'>
        <NavLink to={'/'}>Catalog</NavLink>
        <NavLink to={'/cart'}>Cart</NavLink>
    </div>
  )
}
