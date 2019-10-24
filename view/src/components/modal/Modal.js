import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal, {closeStyle} from 'simple-react-modal';
import Form from '../form/Form';

const ModalComponent = ({open, modalClose}) => {

    return ( 
        <React.Fragment>
            <Modal show={open} onClose={modalClose} transitionSpeed={100}>
                <Form />
            </Modal>
        </React.Fragment>
     );
}
 
export default ModalComponent;