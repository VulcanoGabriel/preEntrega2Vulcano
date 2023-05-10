import { useState } from 'react'
import NavBar from './components/navbar/NavBar.jsx'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
  

function App() {

  return (

    <BrowserRouter>

  <NavBar/>

  {/* <ItemListContainer/> */}

    <Routes>
      
      <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda online"/>} />
      <Route path='productos/:categoriaId' element={<ItemListContainer/>} />
      <Route path='/detalle/:itemId' element={<ItemDetailContainer/>} />

    </Routes>



    </BrowserRouter>

  )
}

export default App
