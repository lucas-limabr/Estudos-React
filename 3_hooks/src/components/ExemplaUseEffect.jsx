import React, { useEffect, useState } from 'react'

export default function ExemplaUseEffect() {
  
    const[cont, setCont] = useState(0)
    
    //toda mudança de estado de um useState causa re--renderização, e o useEffect por default age como efeito colateral a cada uma das re-renderizações 
    
    useEffect(() => {
        document.title = `Contador: ${cont}`
    })
  
    return (
    <>
    <div>ExemplaUseEffect</div>
    <button onClick={() => setCont(cont + 1)}>Aumentar o contador</button>
    </>
  )
}