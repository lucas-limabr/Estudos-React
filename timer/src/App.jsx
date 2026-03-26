import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Timer } from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Timer/>
      </section>
    </>
  )
}

export default App
