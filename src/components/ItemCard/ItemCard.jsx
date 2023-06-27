import "./itemCard.css"
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {

    return (
        <div className="tarjeta" >
            <h3 className="tarjetaNombre">{item.nombre}</h3>
            <p className="tarjetaDescripcion">{item.descripcion}</p>
            <img className="cardImg" src={item.foto} alt="Foto servicio" />
            <Link className="tarjetaVer" to={`/detalle/${item.id}`}>Ver mas</Link>
        </div>
    )
}

export default ItemCard;