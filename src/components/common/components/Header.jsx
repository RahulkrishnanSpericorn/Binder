import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import history from "../../../config/history";

export default class Header extends Component {
    render() {
        return (
            <header>
                <ToastContainer />
                <nav className="navbar">
                    <div className="mnu-ico">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="true"
                            aria-label="Toggle navigation"
                        >
                            <img src="/images/menu.svg" className="close" alt="" />
                            <img src="/images/clear.svg" className="open" alt="" />
                        </button>
                    </div>
                    <span className="navbar-brand">
                        <img src="/images/white-logo.svg" alt="" onClick={() => history.push("/dashboard")} />
                    </span>
                    <div className="mnu-info ml-auto">
                        <ul className="prf-lst">
                            <li className="nav-item dropdown">
                                <span
                                    className="nav-link dropdown-toggle"
                                    id="profile-info"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                >
                                    <div className="prf-img">
                                        <img src="/images/profileimg.jpg" alt="" />
                                    </div>
                                    <div className="pdf-name">Mathew John</div>
                                </span>
                                <div className="dropdown-menu" aria-labelledby="profile-info">
                                    <span>Profile</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
