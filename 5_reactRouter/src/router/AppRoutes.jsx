import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contato from '../pages/Contato'
import Sobre from '../pages/Sobre'
import NotFound from '../pages/NotFound'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../pages/dashboard/Dashboard'
import Posts from '../pages/dashboard/Posts'
import Post from '../pages/dashboard/Post'
import Perfil from '../pages/dashboard/Perfil'

export default function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='contato' element={<Contato />} />
            <Route path='dashboard' element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path='perfil' element={<Perfil />} />
                <Route path='posts' element={<Posts />} />
                <Route path='posts/:id' element={<Post />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
