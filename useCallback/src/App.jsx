import { useCallback, useState } from 'react'
import './App.css'
import Filho from './components/Filho'

function App() {
  const [count, setCount] = useState(0)

  //useCallback é útil quando eu estou passando uma função como props, e utilziando no componente filho um React.memo, ou seja, eu não quero que ela re-renderizado quando o pai é re-renderizado, para garantir isso, quando a props é uma função, é preciso que ela seja um useCallback()
  const dobrarValor = useCallback(() => {
    console.log('Dobra valor')
  }, [])

  return (
    <>
      <section id="center">
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <p>Count: {count}</p>
        <Filho dobrarValor={dobrarValor} />
      </section>

    </>
  )
}

export default App
