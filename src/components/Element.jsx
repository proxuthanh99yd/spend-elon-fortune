// import React from "react";
import PropTypes from "prop-types";

function Element({ products, carts, onBuy, onSell }) {
    return products.map((product) => {
        const { id, name, price, image } = product;
        const cart = carts.find((cart) => cart.productId === id);
        return (
            <div key={id} className="element">
                <img src={"./images/" + image} alt={name} />
                <p id="name">{name}</p>
                <span id="price">USD {price}</span>
                <div className="buyAndSellContainer" data-price={price}>
                    <button
                        onClick={() => onSell(id)}
                        className="btn-sell"
                        id="sell"
                    >
                        Sell
                    </button>
                    <span id="amount">{cart?.quantity || 0}</span>
                    <button
                        onClick={() => onBuy(id)}
                        className="btn-buy"
                        id="buy"
                    >
                        Buy
                    </button>
                </div>
            </div>
        );
    });
}

Element.propTypes = {
    products: PropTypes.array,
    carts: PropTypes.array,
};

export default Element;
