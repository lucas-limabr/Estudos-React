import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import { toast } from 'react-toastify'
import { formatCurrencyBRL } from '../utils/formata_moeda'

export default function ProductCard({ product }) {

  const { addItem, isItemInCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState("")

  const handleAdd = (product) => {
    addItem(product, quantity)

    if (isItemInCart(product.id)) {
      toast.info(`Quantidade do item ${product.name} atualizada no carrinho`)
    }
    else {
      toast.success(`Item ${product.name} adicionado ao carrinho com sucesso`)
    }
  }

  return (
    <div className='productCard'>
      <img width={180} src={product.urlImage} alt="Imagem do produto" />
      <p>{product.name}</p>
      <p>{formatCurrencyBRL(product.price)}</p>
      <div className='actions-product'>
        <div>
          <input type="number" id='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <div>
          <button className='add-to-cart' onClick={() => handleAdd(product)}>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  )
}
