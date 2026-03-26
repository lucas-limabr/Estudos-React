import React from 'react'

export default function Container({children}) {
  return (
    <div className='container'>
    <header>
        <h1>Cabeçalho</h1>
    </header>
    <nav>Menu de navegação</nav>
    <main id='main'>{children}</main>
    <sidebar>Coluna lateral</sidebar>
    <footer>Rodapé</footer>
    </div>
  )
}
