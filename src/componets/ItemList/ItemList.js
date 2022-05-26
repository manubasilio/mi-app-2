import { useState, useEffect } from 'react';
import CardItem from '../Card/CardItem';
import { Grid } from '@mui/material';


const ItemList = ({ title }) => {
    const [products, setProducts] = useState([])
    const productos = [
        {
            title: 'Nevermind',
            price: 1059,
            image: 'nevermind.jpg',
            description: 'Nirvana - Nevermind',
            stock: 5,
            id: 1,
        },
        {
            title: 'In Utero',
            price: 1290,
            image: 'inutero.jpg',
            description: 'Nirvana - In Utero',
            stock: 5,
            id: 2,
        },
        {
            title: 'Bleach',
            price: 3500,
            image: 'bleach.jpg',
            description: 'Nirvana - Bleach',
            stock: 5,
            id: 3,
        },
        {
            title: 'Unplugged',
            price: 1150,
            image: 'unplugged.png',
            description: 'Nirvana - Unplugged',
            stock: 5,
            id: 4,
        },
    ]

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
            // console.log("Then: Respuesta Promesa: ", response)
            setProducts(response)
        })
        .catch((err) => {
            // console.log("Catch: Fallo la llamada.", err)
        })
        .finally(() => {
            // console.log("Finally: Termino la promesa")
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


    return (
        <>
            <h2>{title}</h2>
            <Grid container spacing={2} className='general-container'>
                {
                    products.map( ({title, price, image, id}) => {
                        return(
                <Grid item md={3} key={id}>
                    <CardItem title={title} price={price} image={image} />
                </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default ItemList