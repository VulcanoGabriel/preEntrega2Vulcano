import { Link } from "react-router-dom";

const ItemCard = ({item}) => {

    return(
        <div >
        <h3>{item.nombre}</h3>
        <p>{item.descripcion}</p>
        <Link to={`/detalle/${item.id}`}>Ver mas</Link>
        
    </div>




    )






}

export default ItemCard;