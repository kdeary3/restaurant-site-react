import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";

const RestaurantNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-sm" sticky="top">
            <Container fluid className="px-5">
                <Navbar.Brand as={Link} to="/">Steaming Bulldog KBBQ</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                        <Nav.Link as={Link} to="/reservations">Reservations</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default RestaurantNavbar;