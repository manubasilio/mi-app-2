import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavBar = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
                <div className='logoImg'>
                <img src='./logo192.png'></img>
                </div>
                <ul class= 'navbar'>
                    <li>
                        <button>Home</button>
                    </li>
                    <li>
                        <button>Productos</button>
                    </li>
                    <li>
                        <button>Contacto</button>
                    </li>
                    <li>
                        <button>Preguntas</button>
                    </li>
                </ul>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }



export default NavBar