import NavBar from '../components/navbar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer.jsx';
import Nf404 from '../components/Nf404/Nf404.jsx';
import Cart from "../components/Cart/Cart.jsx"
import LoginScreen from "../components/LoginScreen/LoginScreen"
import RegisterScreen from '../components/RegristerScreen/RegisterScreen.jsx';
import { AuthContext } from "../context/AuthContext"
import { useContext } from 'react';
import Checkout from '../components/Checkout/Checkout';
import Footer from "../components/Footer/Footer"
import "../approuter/approuter.css"

const AppRouter = () => {

  const { user } = useContext(AuthContext)

  return (

    <BrowserRouter>

      {
        user.logged
          ?


          <div className='logueadoTodo'>
            <div className='navBarTodo'>  <NavBar />
            </div>
            <div className='contenidoTodo'>
              <Routes>
                <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda online" />} />
                <Route path='productos/:categoriaId' element={<ItemListContainer />} />
                <Route path='/detalle/:itemId' element={<ItemDetailContainer />} />
                <Route path='*' element={<Nf404 />} />
                <Route path='/*' element={<Nf404 />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
              </Routes>
            </div>
            <div className='footer'> <Footer /></div>
          </div>

          :
          <Routes>
            <Route path='*' element={<LoginScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/registerScreen" element={<RegisterScreen />} />
          </Routes>

      }
    </BrowserRouter>

  )
}

export default AppRouter