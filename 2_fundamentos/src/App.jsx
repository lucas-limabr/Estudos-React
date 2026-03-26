import './App.css'
import Welcome from './components/Welcome.jsx'
import BomDia from './components/BomDia.jsx'
import Descricao from './components/Descricao.jsx'
import ClickCalculator from './components/ClickCalculator.jsx'
import SimpleForm from './components/SimpleForm.jsx'
import ParentFunction from './components/ParentFunction.jsx'
import RenderConditional from './components/RenderConditional.jsx'
import RenderConditionalTernario from './components/RenderConditionalTernario.jsx'
import Warning from './components/Warning.jsx'
import NumberList from './components/NumberList.jsx'
import { botãoVerMais } from './assets/js/botãoVerMais.jsx'
import './assets/css/botaoVerMais2.css'

function App() {

  let userInfo = {
    "name": "Lucas",
    "naturalidade": "Brasileiro"
  }

  return (
    <>
      <section id="center">
        <Welcome />
        <BomDia />
        <Descricao />
        <ClickCalculator />
        <SimpleForm />
        <ParentFunction />
        <RenderConditional user={userInfo} />
        <RenderConditionalTernario loggedIn={false} />

        <Warning warning="This is a warning message" />

        <NumberList numbers={[1, 2, 3, 4]} />

        <p style={{ color: 'red', fontSize: '23px' }}>Aplicando CSS inline em uma tag</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={botãoVerMais}>Aplicando CSS com um objeto de estilo importado</button>
          <button className='botao-ver-mais2'>Aplicando CSS através de um arquivo CSS e identificando essa tag de forma mais específica</button>
        </div>
      </section>
    </>
  )
}

export default App
