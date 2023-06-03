import { useRef } from "react";
import {useSearchParams} from "react-router-dom"

const Buscador = () => {

    const [, setSearchParams] = useSearchParams()

    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
    

    const value = inputRef.current.value

    setSearchParams({
        search: value
    })

    }


return (
    <form onSubmit={handleSubmit}>
    <input ref={inputRef}  type="text" />
    <button type="submit">Buscar</button>
    </form>

)

}

export default Buscador