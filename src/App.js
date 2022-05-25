import './App.css';
import './test.css';
import NavBar from './componets/NavBar/NavBar';
import CardList from'./componets/CardList/CardList'
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
    </div>
  );
}

export default App;