import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contato from '../pages/Contato'
import Sobre from '../pages/Sobre'
import NotFound from '../pages/NotFound'
import Produtos from '../pages/Produtos'
import Produto from '../pages/Produto'

export default function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/*' element={<NotFound />}/>
            <Route path='/produtos' element={<Produtos />} />
            <Route path='/produtos/:id' element={<Produto/>}/>
        </Routes>
    )
}
