import React from 'react'
import { formatCurrencyBRL } from '../utils/formata_moeda'

export default function SaleItem({ item }) {
  return (
    <li>
      {item.name} - {item.quantity} x {formatCurrencyBRL(item.price)}
    </li>
  )
}
