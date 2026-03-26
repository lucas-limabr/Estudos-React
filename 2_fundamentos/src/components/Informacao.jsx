import React from 'react'

const Informacao = ({nome, idade}) => {
  return (
    <div>
        <h2>Olá {nome}, você tem {idade} anos</h2>
    </div>
  )
}

export default Informacao