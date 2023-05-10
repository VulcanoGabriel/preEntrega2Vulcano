import { useState, useEffect } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer  ()  {

    const [item, setItem] = useState(null)

    const[carga, setCarga] = useState(true)

    const {itemId} = useParams()
    console.log(itemId)

    useEffect(() => {
        setCarga(true)

        pedirDatos()
        .then((data) => setItem(data.find((el) => el.id === Number(itemId))))
        .catch(error => console.log(error))
        .finally(() => setCarga(false))

    },[])


    return (
        <div>

            {
                carga
                        ?<h2>cargando</h2>
                        : <ItemDetail item={item}/>
            }
        </div>
    )

}

export default ItemDetailContainer