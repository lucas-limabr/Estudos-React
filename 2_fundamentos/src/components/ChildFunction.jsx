import React from 'react'

function ChildFunction({onChildClick}) {
  return (
    <>
          <div>Função filha</div>
          <button onClick={() => onChildClick(1)}>Clique aqui</button>
    </>
   
  )
}

export default ChildFunction