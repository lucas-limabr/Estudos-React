import './App.css'
import ExemplaUseEffect from './components/ExemplaUseEffect'
import SetMessage from './components/SetMessage'
import { Timer } from '../../timer/src/components/Timer'
import ValorDoContexto from './components/ValorDoContexto'
import { MyContextProvider } from './contexts/MeuContexto'
import UserFetch from './components/UserFetch'

function App() {

  return (
    <section id="center">
      <ExemplaUseEffect />
      <MyContextProvider>
        <ValorDoContexto />
        <SetMessage />
      </MyContextProvider>

      <UserFetch userId={4}/>

    </section>
  )
}

export default App
