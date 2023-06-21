import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({ item }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    console.log(isInCart(item.id))



    const handleAgregar = () => {
        const newItem =
        {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }



    return (

        <div>
            <h3>{item.nombre}</h3>
            <img src={item.foto} alt="Foto servicio" />
            <h3>Precio: {item.precio}</h3>
            <h3>Stock: {item.stock}</h3>
            <p>Subtotal: {item.precio * cantidad}</p>

            {isInCart(item.id) ?
                <Link to="/cart">Terminar Compra</Link>
                :
                <ItemCount stock={item.stock} item={item} setCantidad={setCantidad} agregarFn={handleAgregar} cantidad={cantidad} />
            }
        </div>
    )
}

export default ItemDetail