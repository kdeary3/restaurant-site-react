import React from 'react';
import {Alert, Container} from 'react-bootstrap';

const AddToCartModal = ({show, handleClose, item}) => {

    React.useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                handleClose();
            }, 2000); // disappear after 2 seconds
            return () => clearTimeout(timer);
        }
    }, [show, handleClose]);

    if (!show) return null;

    return (
        <>
            <div className="fixed-top mt-5 pt-3" style={{zIndex: 2000}}>
                <Container>
                    <Alert key='success' variant='success' onClose={handleClose} dismissible
                           className="shadow-lg border-2">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-circle-check fs-4 me-3"></i>
                            <div>
                                <Alert.Heading className="h6 mt-2">{item?.quantity}x {item?.name} has been
                                    added.</Alert.Heading>
                            </div>
                        </div>
                    </Alert>
                </Container>
            </div>
        </>
    );
};

export default AddToCartModal;