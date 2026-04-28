import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import CartList from "../components/CartList"

export default function CartPage() {
  
    return (
      <div>
        <CartList/>
      </div>
  )
}
