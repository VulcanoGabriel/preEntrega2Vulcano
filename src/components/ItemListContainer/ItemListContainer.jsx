import { useEffect } from "react"
import { useState } from "react"
import {pedirDatos} from "../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
// import { useProductos } from "../hooks/useProfuctos"
// import {useProductos} from "../hooks/useProfuctos"



function ItemListContainer({greeting}) {

        // const [carga, productos] = useProductos()
    
    //lugar donde se cargan los productos
    const [productos, setProductos] = useState([])

    //maneja la carga de los productos
    const [carga, setCarga] = useState(true)

    //Filtra por categoria los productos valor referencia desde el app.jsx
    const {categoriaId} = useParams()

    console.log(categoriaId)

    useEffect(() => {

        setCarga(true)

        //pide todo los productos

        pedirDatos()
        .then((data) => {
            //define que sino hay cargada una categoria de productos carga el total de ellos
            if (!categoriaId) {
                setProductos(data)
            } else {
                //filtra por categoria de los productos y el valor del useParams
                setProductos(data.filter((el) => el.categoria === categoriaId ) )
            }
        })
        //atrapa los errores 
        .catch((error) => {
            console.log(error)
            .finally(() => setCarga(false))
        })
        //aunque naveguemos en el mismo componente hace que lo recargue en pantalla con los datos actualizados
    },[categoriaId])



    return (
<div>
        <h2>{greeting}</h2>
        {
                //se lleva los productos cargados en el useState a itemlist bajo el nombre de items
                    <ItemList items={productos}/>
        }








        </div>
    )
}

export default ItemListContainer