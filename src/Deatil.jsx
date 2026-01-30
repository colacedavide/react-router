

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Deatil() {
    const { id } = useParams();
    const [detProd, setDetProd] = useState([]);
    const endpoint = `https://fakestoreapi.com/products/${id}`;
    useEffect(() => {
        axios.get(endpoint)
            .then(response => { setDetProd(response.data) })


    }, [id])

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={detProd.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{detProd.title}</h5>
                <p className="card-text">{detProd.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{detProd.title}</li>
                <li className="list-group-item">{detProd.price} $</li>
                <li className="list-group-item"></li>
            </ul>

        </div>
    )
}