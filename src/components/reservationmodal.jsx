import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export function ReservationSubmissionConfirmation({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Reservation Submitted <i className="fa-solid fa-check me-2"></i>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                See you soon!
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}