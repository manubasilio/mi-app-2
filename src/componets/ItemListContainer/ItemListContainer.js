import { useState, useEffect } from 'react';
import CardItem from '../Card/CardItem';
import { Grid } from '@mui/material';
import productos from '../ItemList/ItemList';

const ItemList = ({ title }) => {
    const [products, setProducts] = useState([])
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    }

    useEffect( () => {
    getProducts()
        .then((response) => {
         console.log("Then: Respuesta Promesa: ", response)
            setProducts(response)
        })
        .catch((err) => {
         console.log("Catch: Fallo la llamada.", err)
        })
        .finally(() => {
         console.log("Finally: Termino la promesa")
        })
}, [])

    //    async function getProductsAsincrono() {
    //        try {
    //            const productos = await getProducts()
    //           console.log("Productos asincronos: ", productos)
    //       } catch (err) {
    //            console.log("Fallo la llamada")
    //        }
    //    }
    //    getProductsAsincrono()

    useEffect( () => {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            response.json()
        })
        .then((res) => {
            return console.log("respuesta: ",res)
        })
        }, [])


    
    return (
        <>
            <h2>{title}</h2>
            <Grid container spacing={2} className='general-container'>
                {
                    products.map( ({title, price, image, id, stock}) => {
                        return(
                <Grid item md={3} key={id}>
                    <CardItem title={title} price={price} image={image} stock = {stock}/>
                </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default ItemList