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

export const calculateTotals = (cart, partySize) => {
    const TAX_RATE = 0.0825;

    // Determine if the party qualifies for Premium or Regular rate
    const hasPremiumItem = cart.some(item => item.priceCategory === "Premium");
    const ratePerPerson = hasPremiumItem ? 38.95 : 28.95;
    const menuType = hasPremiumItem ? "Premium" : "Regular";

    const partyBaseCost = partySize * ratePerPerson;

    // Calculate Add-ons (items "Not Included" in the base price)
    const addonsTotal = cart.reduce((total, item) => {
        if (item.priceCategory === "Not Included") {
            return total + (item.base_price * item.quantity);
        }
        return total;
    }, 0);

    const subtotal = partyBaseCost + addonsTotal;
    const taxAmount = subtotal * TAX_RATE;
    const grandTotal = subtotal + taxAmount;

    return {
        menuType,
        ratePerPerson,
        partyBaseCost,
        addonsTotal,
        taxAmount,
        grandTotal
    };
};