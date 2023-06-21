import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import "../Nf404/nf404.css"

function Nf404() {

    const [tiempo, setTiempo] = useState(3)

    const navigate = useNavigate()

    if (tiempo <= 0) navigate(-1) || navigate("/")

    useEffect(() => {
        setInterval(() => {
            setTiempo((state) => state - 1)
        }, 3000);
    }, [])


    return (        
        <div>
            <h2>Pagina no encontrada redireccionando</h2>
            <div className="spinner"></div>
         </div>
    )
}

export default Nf404