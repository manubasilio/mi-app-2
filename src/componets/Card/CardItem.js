import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ItemCount from '../ItemCount/ItemCount';

const CardItem = ({ image, title, price, stock}) => {

    return (

        <Card sx={{ minWidth: 275 }} className='card-item-container'>
            <CardContent>
                <div className='card-item'>
                    <div>
                        <img src={`./${image}`} alt={"producto"} />
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                </div>
                <div><ItemCount stock = {stock} /></div>
            </CardContent >
        </Card >
    )
}



export default CardItem