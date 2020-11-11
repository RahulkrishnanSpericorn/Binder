import React, { Component } from "react";

class Index extends Component {
    render() {
        return (
            <div className="login">
            <header>
                <nav className="navbar fixed-top">
                    <a className="navbar-brand" href="#">
                        <img src="assets/images/logo-login.svg"/>
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
                            <input type="text" className="form-control" placeholder="USER NAME"/>
                        </div>

                        <div className="form-group col-md-12">
                            <input type="password" className="form-control" placeholder="PASSWORD"/>
                        </div>
                        <div className="form-group col-md-12">
                            <label className="container-check ml-1"> Remember me
                            <input type="checkbox"/><span className="checkmark"></span></label>
                        </div>
                        <div className="form-group col-md-12">
                            <button className="btn btn-log">Login</button>
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
export default Index