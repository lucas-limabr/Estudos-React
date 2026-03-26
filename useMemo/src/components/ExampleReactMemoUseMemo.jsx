import React from 'react'

//React.memo para não permitir que esse componente seja re-renderizado caso o pai seja re-renderizado. Quando ele recebe uma props, pode ser que ela precise ser um useMemo no elemento pai para não ser re-renderizado
export const ExampleReactMemoUseMemo = React.memo(({ teste2 }) => {
    
    console.log('Componente ExampleReactMemoUseMemo re-renderizado')

    return (
        <div>Componente filho: ID: {teste2.id}</div>
    )
})

export default ExampleReactMemoUseMemo