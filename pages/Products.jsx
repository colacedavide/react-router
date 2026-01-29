import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
                <div className="container col-4" key={prodotto.id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={prodotto.image} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{prodotto.title}</Card.Title>
                            <Card.Text> {prodotto.price} $</Card.Text>
                            <Card.Text> {prodotto.id}</Card.Text>
                            <Button variant="primary" href="/">Dettaglio</Button>
                        </Card.Body>
                    </Card>
                </div>))}
        </div>

    )
}
