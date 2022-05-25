import './App.css';
import './test.css';
import NavBar from './componets/NavBar/NavBar';
import CardList from'./componets/CardList/CardList'
import Modal from './componets/Modal/Modal';
import { useState } from 'react';


function App() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)

 }
  return (
    <div className="App">
      <NavBar />
      <div className='general-container'>
        <CardList title={'Nirnava'} />
      </div>
      
      
      <button onClick={() => setOpen(true) }>Abrir modal</button>
      <Modal handleClose={handleClose} open={open}>
        <h2>Contacto</h2>
        <input type={'text'} placeholder={'nombre'} />
        <input type={'text'} placeholder={'apellido'} />
        <button>Enviar</button>
      </Modal>
    </div>
  );
}

export default App;