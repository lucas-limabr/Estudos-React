import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getProdutos from '../../jsonFake/getProdutos'

export default function Produto() {

    const { id } = useParams()

    const [nome, setNome] = useState()
    const [preco, setPreco] = useState()

    

    useEffect(() => {
        
        

        setPreco(produtos)
    }, [])

    return (
        <div>
            <h2>Detalhes do produto</h2>
            <p>Nome: {nome}</p>
            <p>Preço: {preco}</p>
        </div>
    )
}
