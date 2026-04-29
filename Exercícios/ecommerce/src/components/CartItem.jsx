import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import { toast } from 'react-toastify'

export default function CartItem({ cartItem }) {

  const { removeItem, updateItemQuantity } = useContext(CartContext)

  const handleUpdate = (e) => {
    const value = e.target.value
    updateItemQuantity(cartItem.id, value)
    toast.info(`Quantidade do item ${cartItem.name} atualizada no carrinho`)
  }

  const handleDelete = (id) => {
    removeItem(id)
    toast.info(`Item ${cartItem.name} excluído do carrinho`)
  }

  return (
    <div className='cartItem'>
      <h3>{cartItem.name}</h3>
      <p>R$ {cartItem.price}</p>
      <div>
        <input type="text" name="quantity" id="quantity" defaultValue={cartItem.quantity} onBlur={handleUpdate} />
        <button className='remover' onClick={() => handleDelete(cartItem.id)}>Remover</button>
      </div>
    </div>
  )
}
