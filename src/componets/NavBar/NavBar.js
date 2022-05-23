import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget'
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>



const NavBar = () => {

    return (
        <AppBar position="static" className='header-primary'>
            <Toolbar>
                <div className='container-logo'>
                    <img src="./cd.png" />
                </div>
                <ul className='navbar'>
                    <p>
                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Inicio</Button>
                    </p>
                    <p>
                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Productos</Button>
                    </p>
                    <p>
                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Preguntas Frecuentes</Button>
                    </p>
                    <p>
                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Contacto</Button>
                    </p>
                    <CartWidget />

                </ul>
            </Toolbar>

        </AppBar>
    )

}

export default NavBar