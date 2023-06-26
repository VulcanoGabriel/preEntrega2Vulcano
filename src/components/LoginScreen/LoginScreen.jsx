import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"


const LoginScreen = () => {
    import("../LoginScreen/loginscreen.css")
    const { login } = useContext(AuthContext)

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
        login(values)

    }
    return (

        <div className="boxCenter">
            <div className="box1">
                <h2>Login</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input type="email"
                        value={values.email}
                        placeholder="email"
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
                    <button type="submit">login</button>
                    <div className="link" >
                        <Link to="/registerScreen">Registrarme</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen