import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
    const { product } = props;

    return (
        <Link key={product.id} to={"/BMW/" + product.id} className="row cars-sel mb-1" style={{ textDecoration: 'none' }}>
            <img src={product.img} alt={product.name} style={{ borderBottomLeftRadius: '8px', borderTopLeftRadius: '8px' }} className="col-lg-4" />
            <div className="col-lg-8">
                <h3><b>{product.name}</b></h3>
                <p>Price : ${product.price}</p>
                <p>Rating : {product.Reviews}</p>
            </div>
        </Link>
    );
}