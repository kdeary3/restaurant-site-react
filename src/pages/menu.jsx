import React, {useState} from 'react';
import MENU_ITEMS from '../data/menudata.jsx';
import {SpiceLevel, getPriceDisplay} from "../helpers/menu_helpers.jsx";

const Menu = () => {
    const [filter, setFilter] = useState("all");

    const filteredItems = MENU_ITEMS.filter(item => {
        if (filter === "all") return true;
        return item.priceCategory === filter;
    });

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Our Menu</h1>

            <div className="row justify-content-center mb-5">
                <div className="col-md-4">
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
                                    <select className="form-select">
                                        {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                                    </select>
                                </div>

                                <button className="btn btn-success w-100">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;