import React, { Component } from 'react'
import { getById } from './carsData/carsDataRes';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';



import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

export class carS extends Component {

    state = {
        shippingPrice: 1354,
        loading: true,
        product: {}
    }

    componentDidMount() {
        var RandomNumber = Math.floor(Math.random() * 1000) + 500;
        const id = this.props.match.params.id;
        getById(id)
            .then(product => {
                setTimeout(() => {
                    this.setState({
                        product,
                        loading: false
                    });
                }, RandomNumber);
            })

        Aos.init();




    }



    render() {

        if (this.state.loading)
            return <div class="mt-5 pt-5 pb-5 mb-5" ><div className="mt-5 pt-5 loader text-center m-auto"></div></div>;
        return (
            <div className="mt-5 pt-5">
                <div className="container mb-5 mt-5">
                    <div className="row">
                        <img data-aos="fade-right" className="col-lg-5" src={this.state.product.img} alt={this.state.product.name} />
                        <div className="col-lg-7">
                            <p className="mt-4">Model : {this.state.product.Model}</p>

                            <h2>{this.state.product.name}</h2>
                            <h4>${parseInt(this.state.product.price)}</h4>

                            <BasicRating rate={this.state.rated} />

                            <Link className="buySingleCar-btn" to={"/Cart_Car_Audi/" + this.state.product.id } >Buy Now</Link>
                            <p>Shipping : {"$" + this.state.shippingPrice}</p>
                        </div>
                    </div>



                    <div className="row">
                        <div className="mt-5 p-2 card col-lg-4 mr-4">
                            <h3 className="mb-3">Car Details :</h3>
                            <h5>Exterior color : {this.state.product.Exterior_color}</h5>
                            <h5>Interior color : {this.state.product.Interior_color}</h5>
                            <h5>Drivetrain : {this.state.product.Drivetrain}</h5>
                            <h5>MPG : {this.state.product.MPG}</h5>
                            <h5>Fuel type : {this.state.product.Fuel_type}</h5>
                            <h5>Transmission : {this.state.product.Transmission}</h5>
                            <h5>Engine : {this.state.product.Engine}</h5>
                            <h5>VIN : {this.state.product.VIN}</h5>
                            <h5>Stock : {this.state.product.Stock}</h5>
                            <h5>Mileage : {this.state.product.Transmission}</h5>
                            <h5>Vehicle history : {this.state.product.Vehicle_history}</h5>
                        </div>

                        <div className="mt-5 p-2 card col-lg-7">
                            <h3 className="mb-3">OverView :</h3>
                            <p>{this.state.product.OverView}</p>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}



function BasicRating() {
    const [value, setValue] = React.useState(2);



    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend">Rate This Car :</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </Box>
    );
}

export default carS
