import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import Brand from "../Brand/Brand.jsx"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"


function NavBar() {

    const { user, logOut } = useContext(AuthContext)

    return (
        <div className="todoNavBar">
            <nav className="navBar">
                <Link to="/" >Inicio</Link>
                <Link to="/productos/esmaltadosemi" >Esmaltado Semipermanente</Link>
                <Link to="/productos/tratamiento" >Capping</Link>
                <Link to="/productos/color" >Esmaltado Tradicional</Link>

            </nav>
            <div className="carritoNav">
                <CartWidget />
            </div>
            <div className="usuarioNav">
                <p>Bienvenido {user.email}</p>
                <button onClick={logOut}>Desloguear</button>
            </div>
            <div className="brand"><Brand titulo="JADENAILS" /></div>
        </div>
    )
}

export default NavBar