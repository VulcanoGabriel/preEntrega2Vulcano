import { useState } from 'react'
import NavBar from './components/navbar/NavBar.jsx'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Brand from './components/Brand/Brand.jsx'

function App() {

  return (

    <div>
   

    <Brand titulo="JadeNails" />
    <NavBar/>
    <ItemListContainer greeting="Bienvenido a nuestra tienda online"/>

    </div>
  )
}

export default App
