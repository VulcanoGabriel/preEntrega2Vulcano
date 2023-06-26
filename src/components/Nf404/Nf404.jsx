import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import "../Nf404/nf404.css"

function Nf404() {

    const navigate = useNavigate()

    useEffect(() => {
        setInterval(() => {
            navigate("/")
        }, 3000);
    }, [])


    return (
        <div>
            <h2>Redireccionando</h2>
            <div className="spinner"></div>
        </div>
    )
}

export default Nf404