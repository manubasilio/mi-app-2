import './Modal.css'
import * as React from 'react';
//import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';



const Modal = ({handleClose, open, children}) => {

    
    return(
        <Dialog className='modal-style' onClose={handleClose} open={open}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal