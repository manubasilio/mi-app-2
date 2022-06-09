import './App.css';
import './test.css';
import NavBar from './componets/NavBar/NavBar';
import { useEffect, useState, } from 'react';
import ItemList from './componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';



function App() {{

useEffect( () => {
fetch('https://jsonplaceholder.typicode.com/users', )
.then((response) => {
  return response.json()
})
.then( (res) => {
  console.log("Respuesta: ", res)
})
},[])

    
 }
  return (
    <div className="App">
      <NavBar />
      <div className='general-container'>
        <ItemList title={'Nirnava'} />
      </div>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;