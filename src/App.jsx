// import { useState } from 'react'
// import NavBar from './components/navbar/NavBar.jsx'
import './App.css'
// import { CartContext } from './context/CartContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import  AppRouter  from "../src/approuter/AppRouter.jsx";
import  {AuthProvider}  from "./context/AuthContext.jsx";

  

function App() {


  return (
    <AuthProvider>
      <CartProvider>
        <AppRouter/>            
      </CartProvider>
    </AuthProvider>

    

  );
}

export default App
