import React, { useContext } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../contexts/CartContext'
import { formatCurrencyBRL } from '../utils/formata_moeda'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function CartList() {

    const navigate = useNavigate()
    const { cartItems, cartTotal, clearCart, cartCount } = useContext(CartContext)

    function finalizarCompra() {
        if(cartItems.length > 0){
            
            let state = {
                saleItems: cartItems,
                cartTotal: cartTotal,
                cartCount: cartCount
            }
            clearCart()
            toast.success('Compra finalizada com sucesso')
            navigate('/thank-you', {state})
        }
    }
   
    return (
        <div>
            <div>
                <h2>Carrinho</h2>
                {cartItems && (
                    cartItems.map((cartItem) =>
                        <CartItem key={cartItem.id} cartItem={cartItem} />)
                )}
            </div>

            <div>
                <p className='cart-total'>Total: {formatCurrencyBRL(cartTotal)}</p>
                <div>
                    <button className='finalizar-compra' onClick={finalizarCompra}>Finalizar compra</button>
                    </div>
            </div>
        </div>

    )
}
