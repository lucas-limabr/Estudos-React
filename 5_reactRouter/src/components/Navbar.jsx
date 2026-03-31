import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/style/navbar.css'

export default function Navbar() {
  return (
    <nav className='menu'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/sobre"}>Sobre</NavLink>
        <NavLink to={"/contato"}>Contato</NavLink>
    </nav>
  )
}
