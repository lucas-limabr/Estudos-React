import ProductList from '../components/ProductList'
import { ToastContainer, toast } from 'react-toastify'

export default function CatalogPage() {
  return (
    <div className='catalog'>
      <ProductList />
    </div>
  )
}
