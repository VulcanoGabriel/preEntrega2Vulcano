import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import "./CartWidget.css"

function CartWidget () {



    return(
        <>
        <div className="divCart">
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        <p>0</p>
        </div>
        </>


    )
}

export default CartWidget