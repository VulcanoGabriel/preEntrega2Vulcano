import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import("../RegristerScreen/registerScreen.css")

const RegisterScreen = () => {
    const { register } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)

    }

    return (

        <div className="boxCenter">
            <div className="box1">
                <h2>Registrar usuario</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input type="email"
                        placeholder="email"
                        value={values.email}
                        name="email"
                        onChange={handleInput}
                    />
                    <input
                        value={values.password}
                        type="password"
                        placeholder="contraseña"
                        name="password"
                        onChange={handleInput}
                    />
                    <button type="submit">Registrarme</button>
                    <Link className="link" to="/Login">Ya estoy registrado</Link>
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen