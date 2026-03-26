import React from 'react'
import useWindowSize from '../hook/useWindowSize'

export default function DisplayWindowSize() {

    const { width, height } = useWindowSize()

    return (
        <>
            <p>O tamanho da largura da tela é: {width}</p>
            <p>O tamanho da altura da tela é: {height}</p>
        </>
    )
}
