import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../SignStyle.css';


export class SignUp extends Component {




    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            verify_password: "",
            checker : 0
        };
    }

    onChangeName = (name) => {
        this.setState({ name: name.target.value.trim() })
    }
    onChangeEmail = (Email) => {
        this.setState({ email: Email.target.value.trim() })
    }
    onChangePassword = (Password) => {
        this.setState({ password: Password.target.value.trim() })
    }
    onChangeVerPassword = (VerPassword) => {
        this.setState({ verify_password: VerPassword.target.value.trim() })
    }



    checkButton = () => {

        const nameLabel = document.getElementById('nameLabel');
        const emailLabel = document.getElementById('emailLabel');
        const passwordLabel = document.getElementById('passwordLabel');
        const ver_passwordLabel = document.getElementById('ver_passwordLabel');

        if (this.state.name.length === 0) { nameLabel.innerText = ' your name is empty' }

        else if (this.state.name.length > 7) { nameLabel.innerText = 'your name is very long ' }

        else if (this.state.name.length <= 7 && this.state.name.length !== 0) { nameLabel.innerText = '' ; this.setState({checker : this.state.checker++}) }

        //

        if (this.state.email.length === 0) { emailLabel.innerText = 'your email is empty' }

        else if (this.state.email.length > 30) { emailLabel.innerText = 'Email must be less than or equal 30 characters' }

        else if (!this.state.email.match(/[@]/) && !this.state.email.match(/[.]/)) {emailLabel.innerText = 'Email Must Contain @example.com'}

        else if (this.state.email.length < 30 && this.state.email.length !== 0 && this.state.email.match(/[@]/) && this.state.email.match(/[.]/)) { emailLabel.innerText = ''}

        //

        if (this.state.password.length === 0) { passwordLabel.innerText = 'can not be empty' }

        else if (this.state.password.length <= 6) { passwordLabel.innerText = 'Password must be greater than 6 letters' }

        else if (this.state.password.match(/[A-Z]/) && !this.state.password.match(/[a-z]/) && !this.state.password.match(/[@/$/#/%/?/^/*/!/~/-/=/+/_/-]/)) { passwordLabel.innerText = 'Password must contains special charcaters' ;}

        else if (this.state.password !== this.state.verify_password || this.state.verify_password === 0) { ver_passwordLabel.innerText = 'Check Your Password verfication' }


        else {
            document.getElementById("checkButton").disabled = false;
            nameLabel.innerText = '';
            emailLabel.innerText = '';
            passwordLabel.innerText = '';
            ver_passwordLabel.innerText = '';

        }

    }




    render() {
        return (
            <div>
                <div className="wrapper fadeInDown mt-5 pt-5">
                    <div id="formContent">
                        <h2 className="active signh2"> Sign Up </h2>
                        <div className="fadeIn first mt-2 mb-2">
                            <i className="fa-solid fa-user fa-6x"></i>
                        </div>


                        <form action="/Dashboard" >

                            <input
                                type="text"
                                name="name"
                                placeholder="User name"
                                onChange={this.onChangeName}
                                onBlur={this.checkButton}
                                autoComplete="off"
                            />

                            <label id="nameLabel" style={{ color: "red", fontSize: "13px" }}></label>


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

                            <input
                                type="password"
                                name="verify_password"
                                placeholder="Verify Password"
                                onChange={this.onChangeVerPassword}
                                onBlur={this.checkButton}
                                onMouseMove={this.checkButton}
                                autoComplete="off"
                            />

                            <label id="ver_passwordLabel" style={{ color: "red", fontSize: "13px" }}></label>

                            <br />
                            <input type="submit" className="fadeIn Submitinput" id="checkButton" value="SIGN UP" disabled />

                        </form>

                        <div id="formFooter">
                            <Link className="underlineHover" to="/login">Already a member ?</Link>
                        </div>


                    </div>
                </div></div>
        )
    }
}

export default SignUp
