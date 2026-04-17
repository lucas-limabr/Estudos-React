import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
  
    const[cartItems, setCartItems] = useState([])

    function addItem(item) {
        return "add item"
    }

    function removeItem(id) {
        return "removido item"
    }

    function updateItemQuantity(id, quantity)
    {
        return "update item"
    }

    function clearCart()
    {
        return "clear item"
    }

    function cartTotal() {
        return "cart total"
    }

    function cartCount() {
        return "cart count"
    }
    
    const contextValue = {
        cartItems,
        addItem,
        removeItem,
        updateItemQuantity,
        clearCart,
        clearCart,
        cartTotal,
        cartCount
    }
    
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
  )
}
