import React, { useState } from 'react'

export default function ProductCard({product}) {
  
    const [quantity, setQuantity] = useState("")
  
    return (
    <div className='productCard'>
          <img width={180} src={product.urlImage} alt="Imagem do produto" />
          <p>{product.name}</p>
          <p>{product.price}</p>
          <div className='actions-product'>
            <input type="number" id='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            <button className='add-to-cart'>Adicionar ao carrinho</button>
          </div>
    </div>
  )
}
