import React, { useState } from 'react'

const Filho = React.memo(({ dobrarValor }) => {

    console.log('Filho re-renderizou')

    return (
        <>
            <div>Componente filho</div>
            <button onClick={dobrarValor}>Dobrar o atual valor de count</button>
        </>
    )
}
)
export default Filho
