import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import ("../Cart/cart.css")

const Cart = () => {

    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)

    if (cart < 1) {
        return (
            <Link to="/" >Carrito Vacio volver a inicio</Link>
        )
    }

    return (
        <div className="gridCart">
            <div className="cart">
            <h2>Tu compra</h2>
            <hr />
            {
                cart.map((item) =>
                    <div key={item.id}>
                        <p>{item.nombre}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Subtotal: {item.cantidad * item.precio}</p>
                        <div className="divBorrado">
                        <p>Eliminar producto</p>
                        <button onClick={() => removeItem(item.id)}>X</button>
                        </div>
                        <button onClick={emptyCart}>Vaciar carrito</button>
                        <hr />
                    </div>
                )
            }
          
            <div><p>Total: $ {totalCompra()}</p></div>
            <Link to="/checkout">Ir al Checkout</Link>
            </div>
        </div>
    )
}

export default Cart