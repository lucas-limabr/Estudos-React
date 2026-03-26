import React from 'react'
import ChildFunction from './ChildFunction'

function ParentFunction() {

    const handleChildClick = (codigo) => {
        console.log('Clique no elemento filho da função passada como props. Código: ' + codigo)
    }

    return (
        <ChildFunction onChildClick={handleChildClick} />
    )
}

export default ParentFunction