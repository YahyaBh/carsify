import axios from 'axios';
import React, { Component } from 'react'


export class Privacy extends Component {

    state = {
        privs: []
    }


    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res.data);
                this.setState({ privs: res.data })
            })
    }


    render() {
        return (
            <div>
                <div className="container mt-5 pt-5">
                    <div className="row">
                        {this.state.privs.map(priv =>
                        
                            <div key={priv.id}>
                                <h2>{priv.title}</h2>
                                <p>{priv.body}</p>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Privacy
