export const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

export const getPriceDisplay = (item) => {
    if (item.name === "Cat Meat") return money.format(9999.99);
    if (item.priceCategory === "Regular") return "Regular";
    if (item.priceCategory === "Premium") return "Premium";
    if (item.priceCategory === "Not Included") {
        return `${money.format(item.base_price)}`;
    }    return item.price;
};

export const SpiceLevel = ({ level }) => {
    return (
        <div className="spice-container">
            {[...Array(level)].map((_, i) => (
                <i key={i} className="fa-solid fa-pepper-hot text-danger me-1"></i>
            ))}
        </div>
    );
};