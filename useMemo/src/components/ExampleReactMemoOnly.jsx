import React from 'react'

const ExampleReactMemoOnly = React.memo(({teste}) => {
    
    console.log('Componente ExampleReactMemoOnly re-renderizado')

    return (
        <div>Componente filho: ID: {teste.id}</div>
    )
})

export default ExampleReactMemoOnly