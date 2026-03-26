import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DisplayWindowSize from './components/DisplayWindowSize'

function App() {
 
  return (
    <>
      <section id="center">
        <DisplayWindowSize/>
      </section>
    </>
  )
}

export default App
