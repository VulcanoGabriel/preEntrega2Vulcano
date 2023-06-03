import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { pedirDatos } from "../helpers/pedirDatos"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({item}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)
 
    const [cantidad, setCantidad] = useState (1)

    console.log(isInCart(item.id))

    

    const handleAgregar = () => {
    const newItem =
        {...item,
        cantidad
        }

        agregarAlCarrito(newItem)
    }



    return(

        <div>

            <h3>{item.nombre}</h3>
            <h3>{item.precio}</h3>
            <h3>{item.stock}</h3>

            <p>Subtotal: {item.precio * cantidad }</p>

            
       { isInCart(item.id)? 
        <Link to="/cart">Terminar Compra</Link>
        :  
           <ItemCount stock={item.stock} item={item} setCantidad={setCantidad} agregarFn={handleAgregar} cantidad={cantidad} />
}
            </div>
    )



}

export default ItemDetail