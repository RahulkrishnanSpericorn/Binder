import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar">
                    <a className="navbar-brand" href="#">
                        <img src="/images/logo.svg" />
                    </a>
                    <div className="mnu-info ml-auto">
                        <ul className="prf-lst">
                            <li className="nav-item mnu-ico">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <img src="/images/menu.svg" />
                                </button>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="profile-info" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" >
                                    <div className="prf-img">
                                        <img src="/images/profileimg.jpg" />
                                    </div>
                                    <div className="pdf-name">Mathew John</div>
                                </a>

                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
