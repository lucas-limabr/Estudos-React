import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    function addItem(item, quantity = 1) {
        setCartItems((prevItems) => {
            const hasItem = prevItems.find((i) => i.id == item.id)

            quantity = Number(quantity)
            if (hasItem) {
                return prevItems.map((i) =>
                    i.id == item.id ?
                        //estou add um novo atributo ao objeto item, que é quantity
                        { ...i, quantity: i.quantity + quantity }
                        : i
                )
            }
            //estou add um novo objeto ao array prevItems, e para este objeto eu ainda estou add um novo atributo, que é quantity
            return [...prevItems, { ...item, quantity: quantity }]
        })
    }

    function removeItem(id) {
        setCartItems((prevItems) => {
            return prevItems.filter((i) =>
                i.id != id)
        })
    }

    function updateItemQuantity(id, quantity) {

        quantity = Number(quantity)
        setCartItems((prevItems) => {
            return prevItems.map((i) =>
                (i.id == id) ?
                    { ...i, quantity: quantity }
                    : i
            )
        })
    }

    function clearCart() {
        setCartItems([])
    }

    const cartTotal = cartItems.reduce((total, item) =>
        total + (item.price * item.quantity), 0
    )

    const cartCount = cartItems.length

    function isItemInCart(id) {
        return cartItems.some((i) => i.id == id)
    }

    const contextValue = {
        cartItems,
        addItem,
        removeItem,
        updateItemQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isItemInCart
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
