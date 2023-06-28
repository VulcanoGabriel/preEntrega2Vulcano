import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebase/firebase"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: null,
        logged: false
    })

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch(e => alert("Usuario incorrecto"))
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .catch(e => alert("Datos incorrectos completar email y contraseña"))
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    logged: true
                })

            } else {
                setUser({
                    email: null,
                    logged: false
                })
            }

        })

    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            login,
            register,
            logOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
}