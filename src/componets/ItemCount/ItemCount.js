import { useState } from 'react';
import { Button } from '@mui/material';
import Modal from '../Modal/Modal';




const ItemCount = () => {
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(0)

    const handleClose = () => {
        setOpen(false)
    }

    const addCount = () => {
        if(count < 5) {
        setCount(count + 1)
        }
    }

    const removeCount = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <div className='count-item'>
                <Button color="error" onClick={removeCount} disabled={count === 0}>-</Button>
                <p>{count}</p>
                <Button color="error" onClick={addCount} disabled={count === 5}>+</Button>
            </div>
            <Button color="error" variant={"contained"} onClick={() => setOpen(true)}>Detalle</Button>
            <div>
                <Modal handleClose={handleClose} open={open}>
                    <h2>Agregados</h2>
                </Modal>
            </div>
        </div>

    )
}

export default ItemCount