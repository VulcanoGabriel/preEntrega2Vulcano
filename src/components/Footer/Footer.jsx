import("../Footer/footer.css")
import { Link } from "react-router-dom"

const Footer = () => {

    return (
        <div className="footer">
            <nav className="footBar">
                <Link to="/" >Inicio</Link>
                <Link to="/productos/esmaltadosemi" >Esmaltado Semipermanente</Link>
                <Link to="/productos/tratamiento" >Capping</Link>
                <Link to="/productos/color" >Esmaltado Tradicional</Link>
            </nav>
            <div className="redesFooter">
                <Link to="https://wa.me/5492494359783?text=Hola,quisiera%20tener%20mas%20informacion" target="_blank"><img className="footerImg" src="\img\whatsapp.png" alt="logowhatsapp" /></Link>
                <Link to="https://instagram.com/jade.nailss?igshid=YmM0MjE2YWMzOA==" target="_blank"><img className="footerImg" src="\img\instagram.png" alt="logoinstagram" /></Link>
                <Link to="https://www.facebook.com/profile.php?id=100013284339674&mibextid=ZbWKwL" target="_blank"><img className="footerImg" src="\img\facebook.png" alt="logofacebook" /></Link>
            </div>

        </div>
    )
}

export default Footer