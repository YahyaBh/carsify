import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

export class Dashboard extends Component {
    render() {
        return (
            <div className="mt-5 pt-5">
                <div className="container mt-5 pb-5">
                    <div className="card-deck row">
                        <div className="row">
                            <Link data-aos="fade-down" data-aos-duration="200"  className="card textTypeDash" to="/Audi">
                                <img className="card-img-top imageDash" src="\Images\Logos\cmp\AUDI.png" alt="Card  cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Audi</h5>
                                </div>
                            </Link>
                            <Link data-aos="fade-down" data-aos-duration="300" className="card textTypeDash" to="/BMW">
                                <img className="card-img-top imageDash" src="\Images\Logos\cmp\bmw.jpg" alt="Card  cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">BMW</h5>
                                </div>
                            </Link>
                            <Link data-aos="fade-down" data-aos-duration="400" className="card textTypeDash" to="/Citroen">
                                <img className="card-img-top imageDash" src="\Images\Logos\cmp\cit.png" alt="Card  cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Citroën</h5>
                                </div>
                            </Link>
                            <Link data-aos="fade-down" data-aos-duration="500" className="card textTypeDash" to="/VW">
                                <img className="card-img-top imageDash" src="\Images\Logos\cmp\VW.png" alt="Card  cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Volkswagen</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="row mt-3">
                            <Link data-aos="fade-down" data-aos-duration="600" className="card textTypeDash" to="/Fiat">
                                <img className="card-img-top imageDash" src="\Images\Logos\cmp\fiat.png" alt="Card  cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">FIAT</h5>
                                </div>
                            </Link>
                            <Link data-aos="fade-down" data-aos-duration="700" className="card textTypeDash" to="/Ford">
                                <img className="card-img-top imageDash" src="\Images\Logos\cmp\ford.png" alt="Card  cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Ford</h5>
                                </div>
                            </Link>
                            <Link data-aos="fade-down" data-aos-duration="800" className="card textTypeDash" to="/Jeep">
                                <img className="card-img-top imageDash" src="\Images\Logos\cmp\jeep.png" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">JEEP</h5>
                                </div>
                            </Link>
                            <Link data-aos="fade-down" data-aos-duration="900" className="card textTypeDash" to="/Mercedes">
                                <img className="card-img-top imageDash" src="\Images\Logos\cmp\mrcds.png" alt="Card  cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center ">Mercedes</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
