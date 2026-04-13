import React, {useState} from 'react';
import MENU_ITEMS from '../data/menudata.jsx';
import {SpiceLevel, getPriceDisplay} from "../helpers/helpers.jsx";
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import AddToCartAlert from "../components/addtocartalert.jsx";

const Menu = () => {
    const navigate = useNavigate();

    const [filter, setFilter] = useState("all");

    const filteredItems = MENU_ITEMS.filter(item => {
        if (filter === "all") return true;
        return item.priceCategory === filter;
    });

    const addToCart = (item, quantity) => {
        let cart = JSON.parse(localStorage.getItem("userCart")) || [];

        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        const qty = parseInt(quantity);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += qty;
        } else {
            cart.push({
                id: item.id,
                name: item.name,
                priceCategory: item.priceCategory,
                base_price: item.base_price,
                quantity: qty
            });
        }

        localStorage.setItem("userCart", JSON.stringify(cart));

        // alert(`${item.name} added to cart!`);
    };

    const viewCart = () => {
        navigate('/cart')
    }

    const [notifications, setNotifications] = useState([]);

    const handleAddToCart = (item, qty) => {
        addToCart(item, qty);

        const newNotification = {
            id: Math.random(),
            name: item.name,
            quantity: qty
        };

        setNotifications(prev => [...prev, newNotification]);
    };

    const removeNotification = (id) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };


    return (
        <>
            <AddToCartAlert
                notifications={notifications}
                removeNotification={removeNotification}
            />

            <div className="container mt-5">
                <h1 className="text-center mb-4">Our Menu</h1>

                <div className="row justify-content-center mb-4">
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center mb-2">
                            <Button variant="primary" onClick={viewCart}>View Cart</Button> <br/>
                        </div>
                        <select
                            className="form-select"
                            onChange={(event) => setFilter(event.target.value)}
                            value={filter}
                        >
                            <option value="all">All Items</option>
                            <option value="Regular">Regular Menu</option>
                            <option value="Premium">Premium Menu</option>
                            <option value="Not Included">Add-ons</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    {filteredItems.map(item => (
                        <div className="col-md-4 mb-4" key={item.id}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={`/images/menu_item_images/${item.item_image}.png`}
                                    className="card-img-top card-img-standard"
                                    alt={item.name}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text text-muted small">{item.description}</p>
                                    <p className="fw-bold text-danger mb-1">
                                        {getPriceDisplay(item)}
                                    </p>

                                    <SpiceLevel level={item.spice_level}/>

                                    <div className="input-group my-3">
                                        <span className="input-group-text">Qty</span>
                                        <select className="form-select" id={`qty-${item.id}`}>
                                            {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                                        </select>
                                    </div>

                                    <button
                                        className="btn btn-success w-100"
                                        onClick={() => {
                                            const qty = document.getElementById(`qty-${item.id}`).value;
                                            handleAddToCart(item, qty);
                                        }}
                                    ><i className="fa-solid fa-check me-2"/>Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Menu;