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
import CadastroPost from '../pages/dashboard/CadastroPost'

export default function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='contato' element={<Contato />} />
            {/* SE eu tenho um layout em comum para todas as rotas aninhadas dentro deste grupo de rota dashboard, eu renderizo um componente, que neste caso é o DashboardLayout, e dentro dele utilizo o Outlet para posicionar o conteúdo de cada rota aninhada */}
            <Route path='dashboard' element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path='perfil' element={<Perfil />} />
                <Route path='posts'>
                    <Route index element={<Posts/>}/>
                    <Route path=':id' element={<Post />} />
                    <Route path='cadastrar' element={<CadastroPost />} />
                </Route> 
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
