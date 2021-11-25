import React from "react";
import CartItem from "./CartItem";
import ProductsApi from "../carsData/carsDataRes";

export default class CarOnCart extends React.Component {

    state = {
        products: [],
    };

    componentDidMount() {
        ProductsApi.getAll()
            .then(data => {
                this.setState({
                    products: data
                })
            });
    }

    render() {
        return (
            <div>


                <div className="container">

                    <h1 className="mt-2 mb-2">Latest Audi cars :</h1>

                    {this.state.products.map(product =>
                        <div className={'col-12'} key={product.id}>
                            <CartItem product={product} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
