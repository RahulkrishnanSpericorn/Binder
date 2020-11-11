import React, { Component } from "react";
import { connect } from "react-redux";
import { API_ROUTE } from "../../config/contstants";
import actions from "./actions";

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
        }
    }
    validate = async () => {
        if (this.state.email === "") {
            this.setState({ emailErrorMessage: "Please enter email" })
        } if (this.state.email != "" && !(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email)) {
            this.setState({ emailErrorMessage: "Please enter vaild email" })
        }
        if (this.state.password === "") {
            this.setState({ passwordErrorMessage: "Please enter password" })
        } if (this.state.email != "" && this.state.password != "") {
            this.login()
        }
    }
    login = async () => {
        let params = {
            email: this.state.email,
            password: this.state.password,
            grant_type: this.state.grant_type,
        }
        console.log('params', params)
        await this.props.login(params)
        console.log('this.props.loginReducer', this.props.loginReducer)
    }

    render() {
        return (
            <div className="login">
                <header>
                    <nav className="navbar fixed-top">
                        <a className="navbar-brand" href="#">
                            <img src="assets/images/logo-login.svg" />
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
                                <input type="text" className="form-control" onChange={email => this.setState({ email: email.target.value, emailErrorMessage: "" })} placeholder="EMAIL" />
                                <span style={{ color: "red" }}>{this.state.emailErrorMessage}</span>
                            </div>

                            <div className="form-group col-md-12">
                                <input type="password" className="form-control" onChange={password => this.setState({ password: password.target.value, passwordErrorMessage: "" })} placeholder="PASSWORD" />
                                <span style={{ color: "red" }}>{this.state.passwordErrorMessage}</span>
                            </div>
                            <div className="form-group col-md-12">
                                <label className="container-check ml-1"> Remember me
                            <input type="checkbox" /><span className="checkmark"></span></label>
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