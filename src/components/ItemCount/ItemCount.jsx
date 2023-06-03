import { useState } from "react";

const ItemCount = ({stock, agregarFn, setCantidad, cantidad}) => {


    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
      cantidad < stock &&  setCantidad(cantidad + 1)
    }


    return (
        <div>
            <button onClick={handleRestar}>-</button>
            <span>{cantidad}</span>
            <button onClick={handleSumar}>+</button>
            <button onClick={agregarFn} >Agregar al carrito </button>
        </div>
    )


}

export default ItemCount