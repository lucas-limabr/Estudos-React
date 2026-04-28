import React, { useContext } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../contexts/CartContext'

export default function CartList() {

    const { cartItems } = useContext(CartContext)
    console.log('cartItems: ', cartItems)

    return (
        <div>
            <h2>Carrinho</h2>
            {cartItems && (
                cartItems.map((cartItem) =>
                    <CartItem key={cartItem.id} cartItem={cartItem} />)
            )}
        </div>
    )
}
