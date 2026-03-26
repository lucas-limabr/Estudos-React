import { useState } from 'react'
import './App.css'
import UserInfo from './components/UserInfo'

function App() {

  const user = {
    name: "Lucas",
    naturality: "JF"
  }
  
  return (
    <>
      <section id="center">
        <UserInfo user={user}/>
      </section>
    </>
  )
}

export default App
