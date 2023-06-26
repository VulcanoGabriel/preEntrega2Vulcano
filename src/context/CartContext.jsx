import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

//provedor de contexto para el app.jsx

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const agregarAlCarrito = (item) => {

        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const emptyCart = () => {

        setCart([])

    }

    const totalCantidad = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const totalCompra = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            emptyCart,
            totalCantidad,
            totalCompra,
            removeItem

        }}>
            {children}
        </CartContext.Provider>
    )

}