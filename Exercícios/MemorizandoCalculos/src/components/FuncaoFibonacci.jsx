import React from 'react'
import { useMemo } from 'react'

function calculoFibonacci(termoFibonacci) {

    if (termoFibonacci <= 1) {
        return termoFibonacci
    }

   let prev = 0
   let current = 1

    for (let i = 2; i <= termoFibonacci; i++) {
        let next = prev + current
        prev = current
        current = next
    }

    return current
}

export default function FuncaoFibonacci({ termoFibonacci }) {

    const calculoFibonacciUseMemo = useMemo(() => {
        console.log('Executou useMemo')
        return calculoFibonacci(termoFibonacci)
    }, [termoFibonacci])

    console.log('Re-renderiza o componente')

    return (
        <>
            <div>FuncaoFibonacci</div>
            <p>O valor do {termoFibonacci}º termo da sequência de Fibonacci é: {calculoFibonacciUseMemo}</p>
        </>
    )
}
