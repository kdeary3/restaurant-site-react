import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const AddToCartAlert = ({ notifications, removeNotification }) => {
    return (
        <div
            className="fixed-top mt-5 d-flex flex-column align-items-center"
            style={{ zIndex: 9999, pointerEvents: 'none' }}
        >
            {notifications.map((note) => (
                <NotificationItem
                    key={note.id} // React uses this to keep track of which is which
                    note={note}
                    removeNotification={removeNotification}
                />
            ))}
        </div>
    );
};

const NotificationItem = ({ note, removeNotification }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            removeNotification(note.id);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="col-11 col-md-6 mt-2"
            style={{ pointerEvents: 'auto' }}
        >
            <Alert
                variant="success"
                onClose={() => removeNotification(note.id)}
                dismissible
                className="shadow-lg border-2 m-0"
            >
                <div className="d-flex align-items-center">
                    <i className="fa-solid fa-circle-check fs-4 me-3"></i>
                    <div>
                        <Alert.Heading className="h6 mb-0">
                            {note.quantity}x {note.name} added to order.
                        </Alert.Heading>
                    </div>
                </div>
            </Alert>
        </div>
    );
};

export default AddToCartAlert;