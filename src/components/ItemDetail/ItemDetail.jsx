import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../helpers/pedirDatos"


const ItemDetail = ({item}) => {
 
    return(

        <div>

            <h3>{item.nombre}</h3>
            <h3>{item.precio}</h3>

            <button>agregar al carrito</button>
        </div>
    )



}

export default ItemDetail