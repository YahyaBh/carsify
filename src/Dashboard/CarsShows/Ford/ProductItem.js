import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
    const { product } = props;

    return (
        <Link key={product.id} to={"/Ford/" + product.id} className="row cars-sel mb-1" style={{ textDecoration: 'none' }}>
            <img src={product.img} alt={product.name} style={{ borderBottomLeftRadius: '8px', borderTopLeftRadius: '8px' }} className="col-lg-4" />
            <div className="col-lg-8">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.Reviews}</p>
            </div>
        </Link>
    );
}