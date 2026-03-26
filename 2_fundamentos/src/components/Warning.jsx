import React from 'react'

export default function Warning({warning}) {
  
    // é preferível que a condicional, aqui, para validar se a props não é null, seja feita fora do return de uma função do React, para não misturar com tags do HTML. Se for null, ele retorna, e nada será renderizado
    if(!warning)
    {
        return null;
    }
  
    return (
    <div>
        <p>Warning: {warning}</p>
    </div>
  )
}
