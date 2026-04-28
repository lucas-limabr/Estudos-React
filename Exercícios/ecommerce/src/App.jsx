import { BrowserRouter } from "react-router-dom"
import Navbar from "./layout/Navbar"
import AppRoutes from "./routes/AppRoutes"
import { CartContextProvider } from "./contexts/CartContext"
import Footer from "./components/Footer"
import {ToastContainer} from 'react-toastify'

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
      <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      />
    </div>

  )
}

export default App
