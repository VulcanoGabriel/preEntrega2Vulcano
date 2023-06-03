import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"

const Checkout = () => {
    //Estado para conectar los valores del formulario para que se guarden
    const[values, setValues] = useState({
        nombre: "",
        email: "",
        direccion: ""
    })

    const {cart, totalCompra} = useContext(CartContext)

    //Funcion para controlar la recarga del formulario
const handleSubmit = (e) => {
    e.preventDefault()
    
    const orden = {
        client: values,
        items: cart.map(item => ({id: item.id, nombre: item.nombre, cantidad: item.cantidad}) ),
        total: totalCompra(),
        fyh: new Date
    }

    console.log(orden)

}

//29min

const handleInput = (e) => {
    setValues ({
        ...values,

        //esto hace que por ejemplo estamos escribiendo en el formulario direccion, toma el name de la misma y lo modifica en el value
        [e.target.name]: e.target.value

    })
}






    return(
        <div>
        <h2>checkout</h2>

        <form onSubmit={handleSubmit}>
            <input 
            //valor para el useState para guardar los datos
            value={values.nombre}
            //tipo de formulario
            type="text" 
            //Lugar donde se escribe el texto
            placeholder="nombre"
            //
            name="nombre"
            onChange={handleInput}
            />

            <input 
            value={values.direccion}
            type="text" 
            placeholder="direccion"
            name="direccion"
            onChange={handleInput}
            />

            <input 
            value={values.email}
            type="text" 
            placeholder="email"
            name="email"
            onChange={handleInput}
            />

            <button type="submit">enviar</button>
        



        </form>

        </div>
    )
}

export default Checkout