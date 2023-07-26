// import { useState } from "react";
import { useState } from "react";
import Container from "./components/Container";
import Element from "./components/Element";
import Header from "./components/Header";
import Receipt from "./components/Receipt";
import Total from "./components/Total";
import products from "./products";

function App() {
    const [cash, setCash] = useState(217000000000);
    const [carts, setCarts] = useState([]);

    const handleBuy = (id) => {
        const product = products.find((product) => product.id === id);

        if (carts.find((cart) => cart.productId === id)) {
            setCarts((prevCart) => {
                return [
                    ...prevCart.map((item) => {
                        if (item.productId === id) {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                                total: item.total + product.price,
                            };
                        }
                        return item;
                    }),
                ];
            });
            setCash((prevCash) => prevCash - product.price);
        } else {
            setCarts((prevCart) => [
                ...prevCart,
                {
                    id: Date.now(),
                    productId: id,
                    quantity: 1,
                    total: product.price,
                },
            ]);
            setCash((prevCash) => prevCash - product.price);
        }
    };

    const handleSell = (id) => {
        const product = products.find((product) => product.id === id);
        if (carts.find((cart) => cart.productId === id && cart.quantity <= 1)) {
            setCarts((prevCart) => [
                ...prevCart.filter((item) => item.productId !== id),
            ]);
            setCash((prevCash) => prevCash + product.price);
        } else if (carts.find((cart) => cart.productId === id)) {
            setCarts((prevCart) => {
                return [
                    ...prevCart.map((item) => {
                        if (item.productId === id) {
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                                total: item.total - product.price,
                            };
                        }
                        return item;
                    }),
                ];
            });
            setCash((prevCash) => prevCash + product.price);
        }
    };

    return (
        <>
            <Header />
            <Total cash={cash} spent={cash} />
            <Container>
                <Element
                    onBuy={handleBuy}
                    onSell={handleSell}
                    carts={carts}
                    products={products}
                />
            </Container>
            <Receipt products={products} carts={carts} />
        </>
    );
}

export default App;
