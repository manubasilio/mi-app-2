import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import './CartWidget.css';
import Button from '@mui/material/Button';


const CartWidget = () => {

    return (     
            <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'><ShoppingCartTwoToneIcon className='color'/></Button>
            )
}

export default CartWidget
