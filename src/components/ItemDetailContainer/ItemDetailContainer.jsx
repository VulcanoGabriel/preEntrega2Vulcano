import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase"

function ItemDetailContainer() {

    const [item, setItem] = useState(null)

    const [carga, setCarga] = useState(true)

    const { itemId } = useParams()
    console.log(itemId)

    useEffect(() => {
        setCarga(true)

        const docRef = doc(db, "servicios", itemId)

        getDoc(docRef)
            .then((doc) => {
                const _item = {
                    id: doc.id,
                    ...doc.data()
                }
                setItem(_item)

            })
            .catch(e => console.log(e))
            .finally(() => setCarga(false))
    }, [])

    return (
        <div>
            {
                carga
                    ? <h2>Cargando</h2>
                    : <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer