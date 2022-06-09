import './NavBar.css'
import { Link } from 'react-router-dom'
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
                        <Button
                            disableRipple
                            style={{ backgroundColor: 'transparent' }}
                            variant='text'
                            className='navbar__btn'>
                            <Link to="/inicio">Inicio</Link>
                        </Button>
                    </p>
                    <p>
                        <Button
                            disableRipple
                            style={{ backgroundColor: 'transparent' }}
                            variant='text'
                            className='navbar__btn'>
                            <Link to="/productos">Productos</Link>
                        </Button>
                    </p>
                    <p>
                        <Button
                            disableRipple
                            style={{ backgroundColor: 'transparent' }}
                            variant='text'
                            className='navbar__btn'>
                            <Link to="/preguntas">Preguntas frecutes</Link>
                        </Button>
                    </p>
                    <p>
                        <Button
                            disableRipple
                            style={{ backgroundColor: 'transparent' }}
                            variant='text'
                            className='navbar__btn'>
                            <Link to="/contacto">Contacto</Link>
                        </Button>
                    </p>
                    <CartWidget />

                </ul>
            </Toolbar>

        </AppBar>
    )

}

export default NavBar