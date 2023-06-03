import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const LoginScreen = () => {

    const {login} = useContext(AuthContext)

    const[values, setValues] = useState({
        email:"",
        password:""
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
    return(

        <div>
            <div>
                <h2>Login</h2>
                <hr/>

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
                         <Link to="/registerScreen">Registrarme</Link>
                </form>
                




            </div>
        </div>
    )
}

export default LoginScreen