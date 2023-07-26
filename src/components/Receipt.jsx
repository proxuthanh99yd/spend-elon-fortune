// import React from 'react'
import PropTypes from "prop-types";

function Receipt({ carts, products }) {
    const total = carts.reduce((total, currentCart) => {
        return total + currentCart.total;
    }, 0);
    return (
        <>
            <div className="receipt">
                <h1>Receipt</h1>
                {products.map((product) => {
                    const { id, name, price } = product;
                    const cart = carts.find((cart) => cart.productId === id);

                    if (id === cart?.productId) {
                        return (
                            <p key={id}>
                                {name} x <strong>{cart?.quantity}</strong>
                                ..............$ {price * cart?.quantity}
                            </p>
                        );
                    }
                })}
                <p className="totalRecipt">
                    Total is: ${" "}
                    {total
                        .toString()
                        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
                </p>
            </div>
            <a className="btn-print">
                <button>Print Receipt</button>
            </a>
            <div className="coffe-link">
                <small>
                    Clone by LeeTam
                    <br />
                </small>
            </div>
        </>
    );
}

Receipt.propTypes = {
    carts: PropTypes.array,
    products: PropTypes.array,
};

export default Receipt;
