import { BrowserRouter } from "react-router-dom"
import Navbar from "./layout/Navbar"
import AppRoutes from "./routes/AppRoutes"
import { CartContextProvider } from "./contexts/CartContext"
import Footer from "./components/Footer"
import {ToastContainer} from 'react-toastify'
import './App.css'

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <CartContextProvider>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
          />
          <AppRoutes />
        </CartContextProvider>
      </BrowserRouter>
      
      <Footer />
    </div>

  )
}

export default App
