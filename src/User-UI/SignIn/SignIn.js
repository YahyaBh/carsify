import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../SignStyle.css';


export class SignIn extends Component {




    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }


    onChangeEmail = (Email) => {
        this.setState({ email: Email.target.value.trim() })
    }
    onChangePassword = (Password) => {
        this.setState({ password: Password.target.value.trim() })
    }
    


    checkButton = () => {

        const emailLabel = document.getElementById('emailLabel');
        const passwordLabel = document.getElementById('passwordLabel');


        if (this.state.email.length === 0) { emailLabel.innerText = 'your email is empty' }

        else if (this.state.email.length > 30) { emailLabel.innerText = 'Email must be less than or equal 30 characters' }

        else if (!this.state.email.match(/[@]/) && !this.state.email.match(/[.]/)) {emailLabel.innerText = 'Email Must Contain @example.com'}

        else if (this.state.email.length < 30 && this.state.email.length !== 0 && this.state.email.match(/[@]/) && this.state.email.match(/[.]/)) { emailLabel.innerText = ''}

        //

        if (this.state.password.length === 0) { passwordLabel.innerText = 'can not be empty' }

        else if (this.state.password.length <= 6) { passwordLabel.innerText = 'Password must be greater than 6 letters' }

        else if (this.state.password.match(/[A-Z]/) && !this.state.password.match(/[a-z]/) && !this.state.password.match(/[@/$/#/%/?/^/*/!/~/-/=/+/_/-]/)) { passwordLabel.innerText = 'Password must contains special charcaters' ;}

        else {
            document.getElementById("checkButton").disabled = false;
            emailLabel.innerText = '';
            passwordLabel.innerText = '';
        }

        

    }




    render() {
        return (
            <div>
                <div className="wrapper fadeInDown mt-5 pt-5">
                    <div id="formContent">
                        <h2 className="active signh2"> Sign In </h2>
                        <div className="fadeIn first mt-2 mb-2">
                            <i className="fa-solid fa-user fa-6x"></i>
                        </div>


                        <form onMouseMove={this.checkButton} action="/Dashboard" >


                            <input
                                type="email"
                                name="email"
                                placeholder="Email adress"
                                onChange={this.onChangeEmail}
                                onBlur={this.checkButton}
                                autoComplete="off"
                            />

                            <label id="emailLabel" style={{ color: "red", fontSize: "13px" }}></label>



                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.onChangePassword}
                                onBlur={this.checkButton}
                                autoComplete="off"
                            />
                            <label id="passwordLabel" style={{ color: "red", fontSize: "13px" }}></label>


                            <br />
                            <input type="submit" className="fadeIn Submitinput" id="checkButton" value="SIGN UP" disabled />

                        </form>

                        <div id="formFooter">
                            <Link className="underlineHover" to="/forget-password">Forgot Password?</Link>
                            <br />
                            <Link className="underlineHover" to="/register">Create an account ?</Link>
                        </div>


                    </div>
                </div></div>
        )
    }
}

export default SignIn
