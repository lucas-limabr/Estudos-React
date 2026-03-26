import React from 'react'
import { useState } from 'react'

const ClickCalculator = () => {
  
    const[clicks, setClick] = useState(0);

    return (
    <>
    <div>ClickCalculator</div>
    <p>Você clicou {clicks} vezes</p>
    <button onClick={() => setClick(clicks + 1)}>Aumentar</button>
    </>
  )
}

export default ClickCalculator