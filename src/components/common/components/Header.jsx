import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav class="navbar">
                    <a class="navbar-brand" href="#">
                        <img src="/assets/images/logo.svg" />
                    </a>
                    <div class="mnu-info ml-auto">
                        <ul class="prf-lst">
                            <li class="nav-item mnu-ico">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <img src="assets/images/menu.svg" />
                                </button>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="profile-info" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" >
                                    <div class="prf-img">
                                        <img src="assets/images/profileimg.jpg" />
                                    </div>
                                    <div class="pdf-name">Mathew John</div>
                                </a>

                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
