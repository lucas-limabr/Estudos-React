import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../contexts/MeuContexto'

const ValorDoContexto = () => {
  
    const {mensagem} = useContext(MyContext)
  
    return (
    <div>O valor do contexto é: {mensagem}</div>
  )
}

export default ValorDoContexto