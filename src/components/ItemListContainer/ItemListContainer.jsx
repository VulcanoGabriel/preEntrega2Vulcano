import { useEffect } from "react"
import { useState } from "react"
import "../ItemListContainer/itemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams} from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import {db} from "../../firebase/firebase"
// import "../../index.css"
// import { useProductos } from "../hooks/useProfuctos"
// import {useProductos} from "../hooks/useProfuctos"



function ItemListContainer({greeting}) {

        // const [carga, productos] = useProductos()
    
    //lugar donde se cargan los productos
    const [productos, setProductos] = useState([])

    //maneja la carga de los productos
    const [carga, setCarga] = useState(true)

    // const [searchParams] = useSearchParams()

        // const search = searchParams.get("search")

    //Filtra por categoria los productos valor referencia desde el app.jsx
    const {categoriaId} = useParams()


    useEffect(() => {

        const productosRef = collection(db,"servicios")

        const q = categoriaId
                            ? query(productosRef, where("categoria", "==", categoriaId))
                            :productosRef



        getDocs(q)
        
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return{
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(docs)

            })



        setCarga(true)
  

        //aunque naveguemos en el mismo componente hace que lo recargue en pantalla con los datos actualizados
    },[categoriaId])

// const listado = search
//                         ? productos.filter((el) => el.nombre.toLowerCase().includes(search,toLowerCase()))
//                         :productos
    return (
<div className="itemListContainer" >
        <h2>{greeting}</h2>
        {
            carga
            ?  <ItemList items={productos}/>
            :
                //se lleva los productos cargados en el useState productos a itemlist bajo el nombre de items
                <h2>Cargando</h2>
        }
        </div>
    )
}

export default ItemListContainer