import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5 pt-5">
                    <hr className="middleHomeHr mt-5" />
                    <h3 className="text-center mb-2 mt-2">Most Asked Questions</h3>
                    <div className="row">
                        <h2 data-aos="fade-down">Whats Carsify ?</h2>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="500" className="row">
                        <p>this website is a mix of cars that are new or classic on the markets</p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1000" className="row">
                        <h2>Why we should use Carsify ?</h2>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1500" className="row">
                        <p>we help you to find the car , with the best price , and a better quality</p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="2000" className="row">
                        <h2>Is Carsify safe ?</h2>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="2500" className="row">
                        <p>Carsify , the safest market to buy your dream car , no worries about the security and your money</p>
                    </div>
                </div>

                <div className="container text-center">
                    <hr className="middleHomeHr mt-5" />
                    <h3>The Team Of Carsify</h3>
                    <div className="row mt-3">
                        <div data-aos="fade-down" data-aos-duration="500" className="col-lg-3 m-auto">
                            <img className="img-about-pers" src="/Images/About/persones/p1.jpg" alt="p1" />
                            <h4>CEO</h4><p>Habib El Mehdi</p>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1000" className="col-lg-3 m-auto">
                            <img className="img-about-pers" src="/Images/About/persones/p2.jpg" alt="p2" />
                            <h4>Developer</h4><p>Sarah Blat</p>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1500" className="col-lg-3 m-auto">
                            <img className="img-about-pers" src="/Images/About/persones/p3.jpg" alt="p3" />
                            <h4>Marketing</h4><p>Suzan Jaiss</p>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="2000" className="col-lg-3 m-auto">
                            <img className="img-about-pers" src="/Images/About/persones/p4.jpg" alt="p4" />
                            <h4>Manager</h4><p>Tomas Freeman</p>
                        </div>
                    </div>
                </div>


                <div className="container mt-5">
                    <hr className="middleHomeHr mt-5" />
                    <h3 className="text-center">Features</h3>
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
            </React.Fragment>
        )
    }
}

export default About
