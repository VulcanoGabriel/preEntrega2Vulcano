import { RiShoppingCartFill } from "react-icons/ri"
import "./CartWidget.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function CartWidget() {

    const { totalCantidad, cart } = useContext(CartContext)

    return (
        <>
            <Link to="/cart" className={`divCart ${cart.length > 0 ? "divCartActive" : ""}`}>
                <RiShoppingCartFill />
                <p>{totalCantidad()}</p>
            </Link>
        </>
    )
}

export default CartWidget