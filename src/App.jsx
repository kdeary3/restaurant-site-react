import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Component/Page Imports
import RestaurantNavbar from "./components/navbar.jsx";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Reservations from "./pages/Reservations";

function App() {
    return (
        <Router>
            <RestaurantNavbar />

            <Container fluid className="px-5 mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/reservations" element={<Reservations />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;