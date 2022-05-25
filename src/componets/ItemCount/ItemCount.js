import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useState } from 'react';


const ItemCount = () => {
    const [open, setOpen] = useState(false)
    const { count, setCount } = useState(0)
    const [stock, setStock] = useState(5)

    const handleClose = () => {
        setOpen(false)
    }
    const addCount = () => {
        setCount(count + 1)
    }
    const removeCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    <div className='count-item'>
    <Button onClick={removeCount}>-</Button>
    <p>{count}</p>
    <Button onClick={addCount}>+</Button>
    <Button variant={"contained"} onClick={() => setOpen(true)}>Agregar</Button>
</div>
}

export default ItemCount