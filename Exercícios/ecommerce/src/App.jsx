import { BrowserRouter } from "react-router-dom"
import Navbar from "./layout/Navbar"
import AppRoutes from "./routes/AppRoutes"
import { CartContextProvider } from "./contexts/CartContext"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <CartContextProvider>
          <AppRoutes />
        </CartContextProvider>
      </BrowserRouter>
      <Footer />
    </div>

  )
}

export default App
