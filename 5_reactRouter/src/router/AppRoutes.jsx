import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contato from '../pages/Contato'
import Sobre from '../pages/Sobre'
import NotFound from '../pages/NotFound'
import { dashboardRoutes } from './DashboardRoutes'

export default function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/contato' element={<Contato />} />
            {dashboardRoutes}
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
