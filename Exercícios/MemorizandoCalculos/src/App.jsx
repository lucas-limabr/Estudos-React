import { useState } from 'react'
import './App.css'
import FuncaoFibonacci from './components/FuncaoFibonacci'

function App() {
  const[termo, setTermo] = useState(0)
  const[count, setCount] = useState(0)
  
  return (
    <>
      <section id="center">
        {/* useState de count apenas para disparar um re-render nesse componente pai, que por default faz um re-render no componente filho, mas nele tem uma função que utiliza o useMemo, assim seu valor será retornado do cache e ela não será processada novamente */}
        <button onClick={() => setCount(count + 1)}>Incrementar contador</button>
        <p>Count: {count}</p>
        
        <label htmlFor="inputTermo">Digite o termo da sequência de Fibonacci para obter seu valor:</label>
        <input onChange={(e) => setTermo(e.target.value)} type="number" value={termo} name="" id="inputTermo" />
        
        <FuncaoFibonacci termoFibonacci={termo}/>
      </section>
    </>
  )
}

export default App
