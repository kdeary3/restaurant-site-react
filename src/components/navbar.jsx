// dependency imports
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Container, Nav, Navbar} from "react-bootstrap";

// page imports
import Home from "../pages/home.jsx";
import Menu from "../pages/menu.jsx";
import Cart from "../pages/cart.jsx";
import Reservations from "../pages/reservations.jsx";


const RestaurantNavbar = () => {
    return (
        <Router>
            <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
                <Container fluid className="px-5">
                    <Navbar.Brand as={Link} to="/home">Steaming Bulldog KBBQ</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                            <Nav.Link as={Link} to="/reservations">Reservations</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid className="px-5">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/reservations" element={<Reservations />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default RestaurantNavbar;