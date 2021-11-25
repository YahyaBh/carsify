import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export class Home extends Component {
    render() {
        return (
            <div className="mt-5 pt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="hr-right col-lg-12">
                            <div data-aos="fade-in" data-aos-duration="1800" className="hr-left col-lg-5">
                                <h1 className="main-tit">Find Your Dream Car</h1>
                                <Link className="hero-gets-btn mr-2" to="/register">Get Started</Link>
                                <Link className="hero-abt-btn" to="/About">About Carsify</Link>
                            </div>
                        </div>
                    </div>
                </div>


                <hr className="middleHomeHr mt-5" />


                <h3 className="serv-tit mt-2">New Cars On The Market</h3>

                <div className="container mt-5 pt-3">

                    <div data-aos="fade-right" className="row">
                        <div className="car-card col-lg-6" >
                            <img className="homeMimg" src="/Images/Home/Cadillac Eldorado.png" width="500px" alt='cadilac' /></div>

                        <div className="card-car-cont col-lg-6 mt-5 text-left">
                            <h2>Cadillac Eldorado</h2>
                            <p>The Fastest Car.</p>
                            <p>538 Km/h.</p>
                        </div>
                    </div>

                    <div data-aos="fade-left" className="row mt-5 sec-To-rem">

                        <div className="card-car-cont col-lg-6 mt-5 text-right" >
                            <h2>Toyota Mirai</h2>
                            <p>The Lightest Car.</p>
                            <p>1100 Kg.</p>
                        </div>

                        <div className="car-card col-lg-6">
                            <img className="homeMimg" src="/Images/Home/Toyota Mirai.jpg" width="500px" alt='Toyota mirai' /></div>

                    </div>

                    <div data-aos="fade-right" className="row mt-5">

                        <div className="car-card col-lg-6">
                            <img className="homeMimg" src="/Images/Home/Kia Stonic.jpg" width="500px" alt='kia stonic' /></div>

                        <div className="card-car-cont col-lg-6 mt-5 text-left">
                            <h2>Kia Stonic</h2>
                            <p>The Shippest Car.</p>
                            <p>$7,000 Dollars.</p>
                        </div>

                    </div>


                    <hr className="middleHomeHr mt-5" />


                    <section>
                        <div className="mt-2 ">
                            <h3 className="serv-tit">Our Services</h3>
                            <div data-aos="fade-down" className="row mt-5 pt-5 mb-2">
                                <div className="col-lg-5">
                                    <h3>The future of electric.</h3>
                                    <p>The Volkswagen ID.4 EV is truly something to behold. With a striking, aerodynamic road presence and a spacious, comfortable interior, it'll transform how you think about electric cars. Best of all? You can reserve it right now. </p>
                                </div>

                                <div className="col-lg-7">
                                    <img className="shadow-img-sec" src="\Images\Home\tourageVW.jpg" width="600px" alt="The future of electric." />
                                </div>
                            </div>

                            <hr className="show-hr" />

                            <div data-aos="fade-down" className="row sec-To-rem mb-2">
                                <div className="col-lg-7 ">
                                    <img className="shadow-img-sec" src="\Images\Home\chevrolet.jpg" width="600px" alt="The future of electric." />
                                </div>

                                <div className="col-lg-5 mt-3">
                                    <h3>The future of electric.</h3>
                                    <p>The Volkswagen ID.4 EV is truly something to behold. With a striking, aerodynamic road presence and a spacious, comfortable interior, it'll transform how you think about electric cars. Best of all? You can reserve it right now. </p>
                                </div>
                            </div>

                            <hr className="show-hr" />

                            <div data-aos="fade-down" className="row mb-2">
                                <div className="col-lg-5 mt-3">
                                    <h3>The future of electric.</h3>
                                    <p>The Volkswagen ID.4 EV is truly something to behold. With a striking, aerodynamic road presence and a spacious, comfortable interior, it'll transform how you think about electric cars. Best of all? You can reserve it right now. </p>
                                </div>

                                <div className="col-lg-7">
                                    <img className="shadow-img-sec" src="\Images\Home\mercedes.jpg" width="600px" alt="The future of electric." /></div>
                            </div>

                            <hr className="show-hr" />

                            <div data-aos="fade-down" className="row sec-To-rem mb-2">

                                <div className="col-lg-7">
                                    <img className="shadow-img-sec" src="\Images\Home\mercedes-benz.jpg" width="600px" alt="The future of electric." /></div>

                                <div className="col-lg-5 mt-3">
                                    <h3>The future of electric.</h3>
                                    <p>The Volkswagen ID.4 EV is truly something to behold. With a striking, aerodynamic road presence and a spacious, comfortable interior, it'll transform how you think about electric cars. Best of all? You can reserve it right now. </p>
                                </div>


                            </div>
                        </div>
                    </section>

                    <hr className="middleHomeHr mt-5" />
                    <h3 className="serv-tit mt-2">Features</h3>


                    <div className="container mt-5">
                        <div className="row">
                            <div data-aos="fade-up" data-aos-duration="500" className="col-lg-4 text-center">
                                <i className="iconForFeat fas fa-envelope fa-4x"></i>
                                <h4>Stay Connected</h4>
                                <p>We make you connected to the last news about cars on your email after your sign up or subscribing.</p>
                            </div>

                            <div data-aos="fade-up" data-aos-duration="1000" className="col-lg-4 text-center">
                                <i className="iconForFeat fas fa-car fa-4x"></i>
                                <h4>What You Looking For</h4>
                                <p>We found you the best car with the newest technologies that can be useful on your daily life.</p>
                            </div>

                            <div data-aos="fade-up" data-aos-duration="1500" className="col-lg-4 text-center">
                                <i className="iconForFeat fas fa-dollar-sign fa-4x"></i>
                                <h4>The Best Price</h4>
                                <p>We found you the best car with the bist price that you well not expect !!.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }



}

export default Home
