import ProductList from '../components/ProductList'
import { ToastContainer, toast } from 'react-toastify'

export default function CatalogPage() {
  return (
    <div className='catalog'>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
      <ProductList />
    </div>
  )
}
