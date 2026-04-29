import React, { useEffect, useState } from 'react'
import mockProducts from '../../mock/products'
import ProductCard from './ProductCard'

export default function ProductList() {
  
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(mockProducts)
    }, [])
  
    return (
    <div>
        <h2 className='title-catalog'>Catálogo de produtos</h2>
        <div className='product-list'>
            {products && (
                products.map((product) =>
                <ProductCard key={product.id} product={product}/>)
            )}
        </div>
    </div>
  )
}
