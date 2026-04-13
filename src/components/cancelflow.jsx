import React from 'react';
import { Button, Modal } from 'react-bootstrap';

// Notice we accept show, handleClose, and the actual action (onConfirm) as props
export function CancelOrderConfirm({ show, handleClose, onConfirm }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Clear Cart?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to cancel your order?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Not Yet
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    <i className="fa-solid fa-trash-can me-2"/>Yes, Clear Everything
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export function SubmitOrderConfirm({ show, handleClose, onConfirm }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Your Order</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Not Yet
                </Button>
                <Button variant="success" onClick={onConfirm}>
                    <i className="fa-solid fa-check me-2"/>Submit Order
                </Button>
            </Modal.Footer>
        </Modal>
    );
}