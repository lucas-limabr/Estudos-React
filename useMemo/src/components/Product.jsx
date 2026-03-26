import React from 'react'
import { useMemo } from 'react'
import { getProdutos } from '../utils/getProdutos'
import { useState } from 'react'

//produtos são buscados em uma API mas aqui para exemplificar vou definir um objeto produto já existente
const produtos = getProdutos()

//a props serve só para exemplificar que mesmo quando ela for passada, smp acontece um re-render, porém a função produtosFiltrados não será executada novamente, seu valor estará em cache e será retornado quando for necessário. Apenas quando as dependências do useMemo mudar, que a função será executada. Isso é melhor do que usar o useEffect
export default function Product({ anyProps }) {

    console.log('Componente Product re-renderizado')
    
    const [busca, setBusca] = useState("")

    //o COMPONENTE re-renderiza, mas as funções que utilizam o useMemo não será recriada, e quando ela for chamada, não será executada novamente, mas sim, seu valor que está em cache, será retornado
    const produtosFiltrados = useMemo(() => {

        console.log("Filtrando...")
        return produtos.filter((p) => {
            return p.nome.toLowerCase().includes(busca.toLowerCase())
        })

    }, [busca, produtos])

    return (
        <div>
            <label htmlFor="busca">Pesquise por um produto: </label>
            <input type="text" id='busca' value={busca} onChange={(e) => setBusca(e.target.value)} />
            <ul>
                {produtosFiltrados.map((p) =>
                    <li key={p.id}> {p.nome} </li>
                )}
            </ul>
        </div>
    )
}
