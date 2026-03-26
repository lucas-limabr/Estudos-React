import React, { useContext } from 'react'
import { MyContext } from '../contexts/MeuContexto'

export default function SetMessage() {

  const { mensagem, setMensagem } = useContext(MyContext)

  return (
    <div>
      <button onClick={() => setMensagem("Mensagem alterada")}>Alterar mensagem</button>
      <p>{mensagem}</p>
    </div>
  )
}
