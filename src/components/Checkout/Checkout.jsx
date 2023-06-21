import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import { Link } from "react-router-dom"


const Checkout = () => {
    const { cart, totalCompra, emptyCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)

    //Estado para conectar los valores del formulario para que se guarden
    const [values, setValues] = useState({
        nombre: "",
        email: user.email,
        direccion: "",
        telefono: ""
    })

    const [orderId, setOrderId] = useState(null)

    //Funcion para controlar la recarga del formulario
    const handleSubmit = (e) => {
        e.preventDefault()

        const { nombre, direccion, email, telefono } = values

        if (nombre.length < 3 ) {
            alert("nombre demaciado corto")
            return
        }
        if (direccion.length < 3) {
            alert("direccion invalida")
            return
        }
        if (email.length < 3 ) {
            alert("email incorrecto")
            return
        }
        if (telefono.length < 3) {
            alert("telefono incorrecto")
            return
        }

        const orden = {
            client: values,
            items: cart.map(item => ({ id: item.id, nombre: item.nombre, cantidad: item.cantidad })),
            total: totalCompra(),
            fyh: new Date
        }

        orden.items.forEach((item) => {
            const itemRef = doc(db, "servicios", item.id)

            getDoc(itemRef)
                .then((doc) => {
                    if (doc.data().stock >= item.cantidad) {
                        updateDoc(itemRef, {
                            stock: doc.data().stock - item.cantidad
                        })
                    } else {
                        alert("no hay stock de " + item.nombre)
                    }
                })


        })

        const orderRef = collection(db, "orders")

        addDoc(orderRef, orden)

            .then((doc) => {

                setOrderId(doc.id)
                emptyCart()

            }
            )
    }

    if (orderId) {
        return (
            <div>
                <h3>compra con exito</h3>
                <h4>Tu numero de orden es {orderId}</h4>
                <Link to="/">Volver a inicio</Link>
            </div>

        )
    }

    const handleInput = (e) => {
        setValues({
            ...values,

            //esto hace que por ejemplo estamos escribiendo en el formulario direccion, toma el name de la misma y lo modifica en el value
            [e.target.name]: e.target.value

        })
    }


    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
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
                    value={values.telefono}
                    type="text"
                    pattern="[0-9]+"
                    placeholder="telefono"
                    name="telefono"
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