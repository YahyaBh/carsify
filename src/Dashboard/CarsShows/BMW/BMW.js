import React from "react";
import ProductItem from "./ProductItem";
import ProductsApi from "./carsData/carsDataRes";

export default class Products extends React.Component {

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


                <div className="container mt-5 pt-5">

                    <h1 className="mt-2 mb-2">Latest BMW cars :</h1>

                    {this.state.products.map(product =>
                        <div className={'col-12'} key={product.id}>
                            <ProductItem product={product} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
