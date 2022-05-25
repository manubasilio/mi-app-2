import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

const CardItem = ({ image, title, price }) => {


    return (

        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className='card-item'>
                    <div><img src={`./${image}`} /></div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <ItemCount/>
                    <Button variant={"contained"} color="error" >Comprar</Button>
                </div>
                
            </CardContent>
        </Card>
    )
}



export default CardItem