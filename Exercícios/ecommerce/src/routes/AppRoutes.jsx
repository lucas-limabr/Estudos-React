import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CatalogPages from '../pages/CatalogPage'
import CartPage from '../pages/CartPage'
import ThankYouPage from '../pages/ThankYouPage'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<CatalogPages />} />
            <Route path='cart' element={<CartPage />} />
            <Route path='thank-you' element={<ThankYouPage />} />
        </Routes>
    )
}
