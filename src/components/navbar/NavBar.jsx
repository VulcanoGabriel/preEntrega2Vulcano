import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import Brand from "../Brand/Brand.jsx"
import {Link} from "react-router-dom"


function NavBar () {



    return (
<>
        <nav>
                <Link to="/" >Inicio</Link>
                <Link to="/productos/semipermanente" >Esmaltado Semipermanente</Link>
                <Link to="/productos/tratamiento" >Capping</Link>
                <Link to="/productos/esmaltadotradicional" >Esmaltado Tradicional</Link>

        </nav>

        <CartWidget/>

        
    <Brand titulo="JadeNails" />

</>
    )





}

export default NavBar