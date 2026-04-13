import React, {useState, useEffect} from 'react';
import {Container, ListGroup, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {money, calculateTotals} from '../helpers/helpers.jsx';

const Cart = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [partySize, setPartySize] = useState(1);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("userCart")) || [];
        setCart(savedCart);
    }, []);

    const updateCart = (newCart) => {
        setCart(newCart);
        localStorage.setItem("userCart", JSON.stringify(newCart));
        localStorage.setItem("userCart", JSON.stringify(newCart));
    };

    const removeItem = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        updateCart(newCart);
    };

    const handleClearCart = () => {
        updateCart([]);
        navigate('/menu');
    };

    const handleConfirmOrder = () => {
        updateCart([]);
        alert(`Your order has been confirmed!`);
    };

    const totals = calculateTotals(cart, partySize);

    if (cart.length === 0) {
        return (
            <Container className="mt-5 text-center">
                <h3>Your cart is empty</h3>
                <Button variant="primary" onClick={() => navigate('/menu')}>Back to Menu</Button>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <h2 className="mb-4">Your Order</h2>
            <Row>
                <Col lg={8}>
                    <ListGroup variant="flush" className="shadow-sm rounded">
                        {cart.map((item, index) => (
                            <ListGroup.Item key={`${item.id}-${index}`}
                                            className="d-flex justify-content-between align-items-center py-3">
                                <div>
                                    <div className="fw-bold">{item.name}</div>
                                    <small className="text-muted">(x{item.quantity}) | {item.priceCategory} Menu Item</small>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="fw-bold">
                                        {item.priceCategory === "Premium" ?
                                            <span className="badge bg-warning text-dark me-1">Premium</span> :
                                            ""}
                                        {item.base_price > 0 ?
                                            <>
                                                <span className="badge bg-danger text-dark ms-1">Not Included</span>
                                                <span className="ms-1"></span>${item.base_price}
                                            </> :
                                            ""}
                                        {item.priceCategory === "Not Included" ?
                                            "" :
                                            <span className="badge bg-info text-dark me-2">Included</span>}

                                    </div>

                                    <Button variant="outline-danger" size="sm" onClick={() => removeItem(index)}>
                                        <i className="fa-solid fa-trash-can"></i>
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>

                <Col lg={4}>
                    <Card className="shadow-sm border-0 bg-light p-3">
                        <h6 className="fw-bold mb-3 text-center">Order Summary</h6>

                        <Form.Group className="mb-3">
                            Party Size
                            <Form.Select value={partySize} onChange={(e) => setPartySize(Number(e.target.value))}>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => <option key={num} value={num}>{num}</option>)}
                            </Form.Select>
                        </Form.Group>

                        <div className="d-flex justify-content-between mb-1 small">
                            <span>{totals.menuType} Menu ({money.format(totals.ratePerPerson)}/per):</span>
                            <span>{money.format(totals.partyBaseCost)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-1 small">
                            <span>Add-ons:</span>
                            <span>{money.format(totals.addonsTotal)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-1 small">
                            <span>Tax (8.25%):</span>
                            <span>{money.format(totals.taxAmount)}</span>
                        </div>
                        <hr/>
                        <div className="d-flex justify-content-between fw-bold text-success fs-5">
                            <span>Total:</span>
                            <span>{money.format(totals.grandTotal)}</span>
                        </div>

                        <Button variant="success" className="w-100 mt-3" onClick={handleConfirmOrder}>
                            <i className="fa-solid fa-check me-2"></i>Submit Order
                        </Button>
                        <Button variant="danger" className="w-100 mt-1" onClick={handleClearCart}>
                            <i className="fa-solid fa-trash-can me-2"></i>Clear Cart
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;