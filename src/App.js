import './App.css';
import './test.css';
import { BrowserRouter, RouteProps, Routes , Route } from 'react-router-dom'
import NavBar from './componets/NavBar/NavBar';
import { useEffect, useState, } from 'react';
import Home from './pages/Inicio';
import Contacto from './pages/Contacto';



function App() {
  {

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users',)
        .then((response) => {
          return response.json()
        })
        .then((res) => {
          console.log("Respuesta: ", res)
        })
    }, [])


  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/inicio' element={<Home/>}/>
          <Route exact path='/productos' element={<h1></h1>}/>
          <Route exact path='/preguntas' element={<h1>PREGUNTAS FRECUENTES</h1>}/>
          <Route exact path='/contacto' element={<Contacto/>}/>
          <Route exact path='*' element={<Home/>}/>
          <Route exact path='/productos/:id' element={<h1>Detalle productos</h1>}/>

        
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;