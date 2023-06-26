import { useEffect } from "react"
import { useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import "../ItemListContainer/ItemListContainer.css"

function ItemListContainer({ greeting }) {

    //lugar donde se cargan los productos
    const [productos, setProductos] = useState([])

    //maneja la carga de los productos
    const [carga, setCarga] = useState(false)

    //Filtra por categoria los productos valor referencia desde el app.jsx
    const { categoriaId } = useParams()


    useEffect(() => {
        setTimeout(() => {

            const productosRef = collection(db, "servicios")

            const q = categoriaId
                ? query(productosRef, where("categoria", "==", categoriaId))
                : productosRef

            getDocs(q)
                .then((res) => {
                    const docs = res.docs.map((doc) => {
                        return {
                            ...doc.data(),
                            id: doc.id
                        }

                    })
                    setProductos(docs)

                })
            setCarga(true)

        }, 3000)




        //aunque naveguemos en el mismo componente hace que lo recargue en pantalla con los datos actualizados
    }, [categoriaId])

    return (
        <div className="itemListContainer" >
            <h2>{greeting}</h2>
            <div className={`spinner ${carga === true ? "spinnerHidden" : ""}`}></div>
            {
                carga
                    ?
                    <ItemList items={productos} />
                    :
                    <h2>Cargando</h2>
            }
        </div>
    )
}

export default ItemListContainer