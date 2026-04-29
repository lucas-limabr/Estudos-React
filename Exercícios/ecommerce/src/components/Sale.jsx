import React from 'react'
import SaleItem from '../components/SaleItem'
import { formatCurrencyBRL } from '../utils/formata_moeda'
import { NavLink } from 'react-router-dom'

export default function Sale({ items }) {

    return (
        <div>
            {items && (
                <div>
                    <h2>Obrigado por sua compra!</h2>
                    <p>Seu pedido foi concluído com sucesso</p>
                    <ul>
                        {items.saleItems.map((i) =>
                                <SaleItem key={i.id} item={i} />
                        )}
                    </ul>
                    <p>Total de itens: {items.cartCount}</p>
                    <p className='sale-total'>Valor total: {formatCurrencyBRL(items.cartTotal)}</p>
                    <NavLink to={"/"}>
                        <button className='back-catalogo'>Voltar ao catálogo</button>
                    </NavLink>
                </div>
            )}
        </div>
    )
}
