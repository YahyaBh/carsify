import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

export class Error extends Component {
    render() {
        return (
            <div className="container text-center mt-5 pt-5">
                <h1>Sorry!</h1>
                <h5>We can't seem to find the resource you're looking for.
                    Please check that the Web site address is spelled correctly.
                    Or go to our home page, and use the menus to navigate to a specific section.</h5>
                    <h3>Error Code : 404</h3>
                <img className="errorImg" src="./Images/Error404/download.gif" width="500px" alt='error404trex' />
                <br/>
                <Link className="btn btn-danger m-auto" to="/">Back To Home</Link>
            </div>
        )
    }
}

export default Error

