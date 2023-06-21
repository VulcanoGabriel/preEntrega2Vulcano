import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)

    if (cart < 1) {
        return (
            <Link to="/" >Carrito Vacio volver a inicio</Link>
        )
    }

    return (
        <div>
            <h2>Tu compra</h2>
            <hr />
            {
                cart.map((item) =>
                    <div key={item.id}>
                        <p>{item.nombre}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>subtotal: {item.cantidad * item.precio}</p>
                        <button onClick={() => removeItem(item.id)}>X</button>
                        <button onClick={emptyCart}>Vaciar carrito</button>
                        <Link to="/checkout">ir al Checkout</Link>
                    </div>
                )
            }
            <div><p>Total: {totalCompra()}</p></div>
        </div>
    )
}

export default Cart