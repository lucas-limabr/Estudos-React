import React, { useContext } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../contexts/CartContext'
import { formatCurrencyBRL } from '../utils/formata_moeda'

export default function CartList() {

    const { cartItems, cartTotal } = useContext(CartContext)

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
                Total: {formatCurrencyBRL(cartTotal)}
            </div>
        </div>

    )
}
