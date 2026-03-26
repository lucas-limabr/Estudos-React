import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import ExampleReactMemoUseMemo from './components/ExampleReactMemoUseMemo'
import ExampleReactMemoOnly from './components/ExampleReactMemoOnly'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const obj = { id: 1 }

  //o valor de obj2, por ser passado como props e ser um objeto está dentro de um useMemo. Isso garante que quando esse componente for re-renderizado, obj2 não será reconstruído, não mudará seu valor, assim o componente filho que recebe a props não será re-renderizado
  const obj2 = useMemo(() => {
    return { id: 2 }
  }, [])

  console.log('Componente App re-renderizado')

  return (
    <>
      <section id="center">
        <Product key={"anyProps"} />
        <button onClick={() => setCount(count + 1)}>Incrementar +</button>

        {/* quando a props passada é do tipo objeto, array ou função, quando o componente pai re-renderiza, mesmo que no componente filho tenha um React.memo ele também será re-renderizado, pois, quando o pai re-renderiza por default todas as variáveis são recriadas, e se ela é do tipo objeto, por exemplo, vai ser criado uma nova instância desse objeto, mesmo que o seu valor não seja alterado, mas isso já vai acusar que o valor da props mudou propAntiga.teste === propNova.teste é false. Já se a props for do tipo primitivo, não será considerado uma mudança no valor da props */}
        <ExampleReactMemoOnly teste={obj} />

        <ExampleReactMemoUseMemo teste2={obj2} />

      </section>
    </>
  )
}

export default App
