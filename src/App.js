import './App.css';
import './test.css';
import NavBar from './componets/NavBar/NavBar';
import { useState } from 'react';
import ItemList from './componets/ItemList/ItemList';


function App() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)

 }
  return (
    <div className="App">
      <NavBar />
      <div className='general-container'>
        <ItemList title={'Nirnava'} />
      </div>
    </div>
  );
}

export default App;