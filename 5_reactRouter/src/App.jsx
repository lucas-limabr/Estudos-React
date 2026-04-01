import Container from './components/Container'
import './App.css'
import Navbar from './Navbar'

import AppRoutes from './router/AppRoutes'

function App() {

  return (
    <>
      <Navbar />
     
      <Container>
        <AppRoutes />
      </Container>

    </>
  )
}

export default App
