import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class cartSucced extends Component {
    render() {
        return (
            <div className="mt-5 mb-5 pb-5">
                <div className="conatiner text-center mb-5 pb-5">
                    <div>
                        <lord-icon
                            src="https://cdn.lordicon.com/msoeawqm.json"
                            trigger="loop"
                            colors="primary:#000000,secondary:#e83a30"
                            stroke="67"
                            scale="37"
                            style={{ width: "250px", height: "250px"}}>
                        </lord-icon>
                        <h2>Your order is under maintanence , we let you know on your email</h2>
                        <Link to="/Dashboard" style={{color : "black" , backgroundColor : "white" , border : "black 1px solid" , padding :"8px 10px"}} >Back To Dashboard</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default cartSucced
