import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function DashboardLayout() {
    return (
        <div>
            <nav className='menu'>
                <NavLink to='perfil'>Perfil</NavLink>
                <NavLink to='posts'>Posts</NavLink>
            </nav>

            <br />
            <Outlet />
        </div>
    )
}
