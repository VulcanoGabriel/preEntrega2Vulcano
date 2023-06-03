import { useState } from "react"
import { Link } from "react-router-dom"

const RegisterScreen = () => {
    const[values, setValues] = useState({
        email:"",
        password:""
    })

    const handleInput = (e) => {
        setValues([
            ...values,
            [e.target.name], e.target.value
        ])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)

    }






    return(
        
        <div>
            <div>
                <h2>Login</h2>
                <hr/>

                <form onSubmit={handleSubmit}>

                        <input type="email" 
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

                         <Link to="/Login">Ya estoy registrado</Link>
                         
                </form>
                




            </div>
        </div>



    )




}

export default RegisterScreen