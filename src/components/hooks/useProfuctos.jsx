import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";

export const useProductos = () => {

    const [productos, setProductos] = useState([])
    const [carga, setCarga] = useState(true)

    useEffect(() => {
        setCarga(true)

        pedirDatos()
        .then((data) => setProductos(data))
        .catch((error) => console.log(error))
        .finally(() => setCarga(false))
    },[])

    return ({
        productos,
        carga
})


}