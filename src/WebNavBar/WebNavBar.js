import React, { Component } from 'react';
import { Link } from 'react-router-dom';




export class WebNavBar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-custom-c">
                <Link className="navbar-brand" to="/">CARSIFY</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                        <li className="nav-item mr-1">
                            <Link className="nav-link sign-spef-st" to="/login">SIGN IN</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link get-spef-st" to="/register">GET STARTED</Link>
                        </li>
                        
                    </ul>
                </div>

            </nav>
        )
    }
}

export default WebNavBar
