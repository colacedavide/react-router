import { useEffect, useState } from "react";

export default function Products() {
    const [prodotti, setProdotti] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProdotti(data))
    }, [])
    return (
        <div className="container">
            <h1> Ecco i prodotti</h1>
            {prodotti.map(prodotto => (
                <div className="container" key={prodotto.id}>
                    <h3>{prodotto.title}</h3>
                    <p>{prodotto.price}$</p>
                </div>))}
        </div>
    )
}
