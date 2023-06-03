import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function Nf404  () {

    const [tiempo, setTiempo] = useState(3) 

    const navigate = useNavigate()

    if (tiempo <= 0) navigate (-1) || navigate("/")

    useEffect (() => {

        setInterval(() => {
            setTiempo((state) => state - 1)

        }, 3000);



    },[])


    return (

        <div>
            <h2>Tiempo de espera {tiempo}</h2>
        </div>

    )


}

export default Nf404