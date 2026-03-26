import { useState } from 'react'
import './App.css'
import { Filho } from './components/Filho'


function App() {
  
  //useState para forçar um re-render no componente pai
  const[cont, setCont] = useState(0)
  console.log('Re-render no componente pai')
  
  return (
    <>
      <section id="center">
        <p>Contador: {cont}</p>
        <button onClick={() => setCont(cont + 1)}>Incrementar +</button>
        <Filho/>
      </section>
    </>
  )
}

export default App
