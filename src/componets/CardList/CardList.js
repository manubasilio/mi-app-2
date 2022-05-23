import CardItem from '../Card/Card';
import { Grid } from '@mui/material';

const CardList = ({title}) => {
    return (
        <>
        <h2>{title}</h2>
        <Grid container className='general-container'>
            <Grid item md={3}>
                <CardItem title={"Nevermind"} price={1059} image={"nevermind.jpg"} />
            </Grid>
            <Grid item md={3}>
                <CardItem title={"In Utero"} price={1290} image={"inutero.jpg"} />
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Bleach"} price={3500} image={"bleach.jpg"} />
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Unplugged "} price={1150} image={"unplugged.png"} />
            </Grid>
        </Grid>
        </>
    )
}

export default CardList