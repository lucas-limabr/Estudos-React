import React from 'react'

//o componente filho está dentro da função memo do React, isso garante que mesmo que o pai se ja re--renderizado, o filho não será re-renderizado de novo. Neste caso, onde um re--render no pai não gera numa consequência no filho, não está passando nenhuma props, por exemplo, essa solução é mais eficiente e é a ideal, desde que seja custoso re-renderizar este componente novamente, caso contrário, é dispensável o memo
export const Filho = React.memo(() => {

    console.log('Re-render no componente filho')

    return (
        <div>Componente filho</div>
    )
})
