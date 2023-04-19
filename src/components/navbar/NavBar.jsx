import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


function NavBar () {



    return (
<>
        <nav>
            <li>
                <ul><a href="*" >Inicio</a></ul>
                <ul><a href="*" >Productos</a></ul>
                <ul><a href="*" >Servicios</a></ul>
                <ul><a href="*" >Contacto</a></ul>
            </li>

        </nav>

        <CartWidget/>

</>
    )





}

export default NavBar