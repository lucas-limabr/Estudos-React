import './App.css'
import Container from './components/Container'
import Section1 from './components/Section1'
import Section2 from './components/Section2'

function App() {

  return (
    <>
      <section id="center">
        <Container>
          <Section1 />
          <Section2 />
        </Container>
      </section>
    </>
  )
}

export default App
