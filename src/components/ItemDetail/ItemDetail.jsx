import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import("../ItemDetail/itemDetail.css")

const ItemDetail = ({ item }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

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
            <h3>{item.descripcion}</h3>
            <h3>Precio: {item.precio}</h3>
            <h3 className={`Stock ${item.stock < 1 ? "noStock" : ""}`} >Stock: {item.stock}</h3>
            <p className={`activo ${item.stock === 0 ? "pInactivo" : ""}`}>Subtotal: {item.precio * cantidad}</p>

            {
                cantidad > item.stock ?
                    <>
                        <h2 className="noStock">
                            Producto sin stock
                        </h2>
                        <Link className="botonItemDetail" to="/">Volver al inicio</Link>
                    </>
                    :
                    ""
            }

            {isInCart(item.id) ?
                <Link to="/cart">Terminar Compra</Link>
                :
                <ItemCount
                    stock={item.stock} item={item} setCantidad={setCantidad} agregarFn={handleAgregar} cantidad={cantidad} />
            }

            {/* {
                item.stock === 0?
                <h3 className={`itemCountHid ${item.stock > 1 ? "" : ""}`} >Sin stock del producto</h3>
                :
                ""
            } */}
        </div>
    )
}

export default ItemDetail