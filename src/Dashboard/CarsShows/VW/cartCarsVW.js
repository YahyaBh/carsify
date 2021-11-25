import React, { Component } from 'react'
import { getById } from './carsData/carsDataRes';





export class carS extends Component {

    state = {
        shippingPrice: 1354,
        loading: true,
        product: {}
    }

    componentDidMount() {
        var RandomNumber = Math.floor(Math.random() * 500) + 200;
        const id = this.props.match.params.id;
        getById(id)
            .then(product => {
                setTimeout(() => {
                    this.setState({ product, loading: false });
                }, RandomNumber);
            })
    }





    render() {


        const RandomFeesNum = Math.floor(Math.random() * 2) + .9;


        if (this.state.loading)
            return <div class="mt-5 pt-5 pb-5 mb-5" ><div class="loader text-center m-auto"></div></div>;
        return (
            <div>
                <div className="container mb-5 mt-5">
                    <div className="row">
                        <div className="col-lg-7 mt-5 mb-5 text-center car-card">
                            <h2>{this.state.product.name}</h2>
                            <h4>${parseInt(this.state.product.price)}</h4>
                            <img className="homeMimg" src={this.state.product.img} alt={this.state.product.name} width="400px" style={{ borderRadius: "3px" }} />
                        </div>
                        <div className="col-lg-5 mt-5 mb-5 card p-3">
                            <p>Shipping Price : ${this.state.shippingPrice}</p>
                            <h5>Car Price : $ {this.state.product.price}</h5>
                            <p>Fees : $ {RandomFeesNum}</p>
                            <hr />
                            <h4 >Total Price : <span style={{ color: "green" }}>${parseInt(this.state.product.price) + this.state.shippingPrice + RandomFeesNum}</span></h4>
                        </div>
                    </div>
                    <div className="mt-5 pt-5">
                        <form action="/action_page.php">

                            <div class="row">
                                <div class="col-5">
                                    <h3>Billing Address</h3>
                                    <label className="cc-label" for="fname"><i class="fa fa-user"></i> Full Name</label>
                                    <input className="cc-input" type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                                    <label className="cc-label" for="email"><i class="fa fa-envelope"></i> Email</label>
                                    <input className="cc-input" type="text" id="email" name="email" placeholder="john@example.com" />
                                    <label className="cc-label" for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                                    <input className="cc-input" type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                                    <label className="cc-label" for="city"><i class="fa fa-institution"></i> City</label>
                                    <input className="cc-input" type="text" id="city" name="city" placeholder="New York" />

                                    <div class="row">
                                        <div class="col-5">
                                            <label className="cc-label" for="state">State</label>
                                            <input className="cc-input" type="text" id="state" name="state" placeholder="NY" />
                                        </div>
                                        <div class="col-5">
                                            <label className="cc-label" for="zip">Zip</label>
                                            <input className="cc-input" type="text" id="zip" name="zip" placeholder="10001" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-5">
                                    <h3>Payment</h3>
                                    <label className="cc-label" for="fname">Accepted Cards</label>
                                    <div class="icon-container">
                                        <i class="fa fa-cc-visa" style={{color:"navy;"}}></i>
                                        <i class="fa fa-cc-amex" style={{color:"blue;"}}></i>
                                        <i class="fa fa-cc-mastercard" style={{color:"red;"}}></i>
                                        <i class="fa fa-cc-discover" style={{color:"orange;"}}></i>
                                    </div>
                                    <label className="cc-label" for="cname">Name on Card</label>
                                    <input className="cc-input" type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                    <label className="cc-label" for="ccnum">Credit card number</label>
                                    <input className="cc-input" type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                    <label className="cc-label" for="expmonth">Exp Month</label>
                                    <input className="cc-input" type="text" id="expmonth" name="expmonth" placeholder="September" />

                                    <div class="row">
                                        <div class="col-5">
                                            <label className="cc-label" for="expyear">Exp Year</label>
                                            <input className="cc-input" type="text" id="expyear" name="expyear" placeholder="2018" />
                                        </div>
                                        <div class="col-5">
                                            <label className="cc-label" for="cvv">CVV</label>
                                            <input className="cc-input" type="text" id="cvv" name="cvv" placeholder="352" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <label className="cc-label">
                                <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                            </label>
                            <input type="submit" value="Continue to checkout" class="cc-btn" />
                        </form>
                    </div>

                </div>


            </div>
        )
    }
}




export default carS
