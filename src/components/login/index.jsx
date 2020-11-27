import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "./actions";
import '../../assets/css/login.css'

const mapStateToProps = state => {
    const { loginReducer } = state;
    return { loginReducer };
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            grant_type: "password",
            emailErrorMessage: "",
            passwordErrorMessage: "",
            rememberMe: true,
            errorMsg: ""
        }
    }

    validate = async () => {
        let passExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
        let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?(\.\w{2,3})+)*(\.\w{2,3})+$/;

        if (this.state.email === "") {
            this.setState({ emailErrorMessage: "Please enter email" })
        }
        if (this.state.email != "" && !emailExp.test(this.state.email.trim())) {
            this.setState({ emailErrorMessage: "Please enter vaild email" })
        }
        if (this.state.password === "") {
            this.setState({ passwordErrorMessage: "Please enter password" })
        }
        // if (this.state.password != "" && !passExp.test(this.state.password)) {
        //     this.setState({ passwordErrorMessage: 'Must contain 8 characters, one lowercase letter, one uppercase letter, one numeric digit, and one special character' })
        // }
        if (this.state.email != "" && this.state.password != "" && this.state.email != "" && emailExp.test(this.state.email.trim())) {
            this.login()
        }
    }
    login = async () => {
        let params = {
            email: this.state.email,
            password: this.state.password,
            grant_type: this.state.grant_type,
        }
        await this.props.login(params)
        if (this.props.loginReducer.loginUser.success) {
            if (this.state.rememberMe) {
                //add token to local storage
                localStorage.setItem('binder-token', this.props.loginReducer.loginUser.access_token);
                localStorage.setItem('token_type', this.props.loginReducer.loginUser.token_type);
                localStorage.setItem('loginData', this.props.loginReducer.loginUser);
                localStorage.setItem('rememberMe', true);
                this.props.history.push('/dashboard')
            } else {
                localStorage.setItem('binder-token', this.props.loginReducer.loginUser.access_token);
                localStorage.setItem('token_type', this.props.loginReducer.loginUser.token_type);
                localStorage.setItem('loginData', this.props.loginReducer.loginUser);
                localStorage.setItem('rememberMe', false);
                this.props.history.push('/dashboard')
                //dont add token to storage
            }
        } else {
            this.setState({
                // errorMsg: this.props.loginReducer.loginUser.error
                errorMsg: "Invalid email or password"
            })
            // Toastmsg(this.props.loginReducer.loginUser.error)
        }

        console.log('this.props.loginReducer', this.props.loginReducer)
    }
    rememberMeClick = async () => {
        await this.setState({
            rememberMe: !this.state.rememberMe
        })
    }

    render() {
        return (
            <div className="login">
                <header>
                    <nav className="navbar fixed-top">
                        <a className="navbar-brand" href="#">
                            <img src="/images/binder-blue-logo.svg" />
                        </a>
                    </nav>
                </header>
                <main>
                    <div className="log-sec">
                        <div className="hed">
                            <h3>LOGIN</h3>
                            <small>use your credentials</small>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <input type="text" className="form-control" onChange={email => this.setState({ email: email.target.value, emailErrorMessage: "", errorMsg: "" })} placeholder="EMAIL" />
                                <span style={{ color: "red" }}>{this.state.emailErrorMessage}</span>
                            </div>

                            <div className="form-group col-md-12">
                                <input type="password" className="form-control" onChange={password => this.setState({ password: password.target.value, passwordErrorMessage: "", errorMsg: "" })} placeholder="PASSWORD" />
                                <span style={{ color: "red" }}>{this.state.passwordErrorMessage}</span>
                            </div>
                            <div className="form-group col-md-12">
                                <label className="container-check ml-1"> Remember me
                            <input type="checkbox" checked={this.state.rememberMe} onClick={() => this.rememberMeClick()} /><span className="checkmark"></span></label>
                                <span style={{ color: "red" }}>{this.state.errorMsg}</span>
                            </div>

                            <div className="form-group col-md-12">
                                <button onClick={() => { this.validate() }} className="btn btn-log">Login</button>
                            </div>

                        </div>
                    </div>
                    <div className="forgot">
                        <h6>Not a Member Yet ? <a href="#">Sign Up Now</a></h6>
                    </div>
                </main>
            </div>
        )
    }
}
export default connect(mapStateToProps, { ...actions })(Index)