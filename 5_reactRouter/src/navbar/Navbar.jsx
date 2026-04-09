import { NavLink } from 'react-router-dom'
import '../assets/style/navbar.css'
import { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {

  const [openDashboard, setOpenDashboard] = useState(false)

  //isActive é um objeto definido do componente NavLink, portanto, eu tenho que utilizá-lo usando exatamente este nome no parâmetro da minha arrow function 
  const getNavLinkClass = ({ isActive }) => isActive ? 'nav-link-active' : 'nav-link-inactive'

  return (

    <header>
      <nav>
        <ul className='menu'>
          <li>
            <NavLink to="/" end className={getNavLinkClass}>Home</NavLink>
          </li>

          <li>
            <NavLink to="/sobre" className={getNavLinkClass}>Sobre</NavLink>
          </li>

          <li>
            <NavLink to="/contato" className={getNavLinkClass}>Contato</NavLink>
          </li>

          {/* dashboard collapse */}
          <li onClick={() => setOpenDashboard(!openDashboard)}>
            <NavLink to="/dashboard" className={getNavLinkClass}>Dashboard <IoMdArrowDropdown /></NavLink>
          </li>
        </ul>

        {/* submenus de dashboard */}
        {
          openDashboard && (
            <ul className='sub-menu-dashboard'>
              <li>
                <NavLink to={"/dashboard/perfil"} className={getNavLinkClass}>Perfil</NavLink>
              </li>

              <li>
                <NavLink to={"/dashboard/posts"} className={getNavLinkClass}>Posts</NavLink>
              </li>
            </ul>
          )}
      </nav>
    </header >
  )
}
