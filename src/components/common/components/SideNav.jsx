import React, { Component } from 'react'
import history from '../../../config/history'

export default class SideNav extends Component {


    logOut = () => {
        localStorage.clear()
        console.log("log", history)
        history.push('/login')

    }

    render() {
        return (
            <aside className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="sidenav">
                    <ul>
                        <li>
                            <a>
                                <div className="icn-sec">
                                    <img src="assets/images/Dashboard.svg" />
                                </div>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="icn-sec">
                                    <img src="assets/images/user.svg" />
                                </div>
                                <span>Binders</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="icn-sec">
                                    <img src="assets/images/Report.svg" />
                                </div>
                                <span>Reports</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="icn-sec">
                                    <img src="assets/images/setting.svg" />
                                </div>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => { this.logOut() }}>
                                <div className="icn-sec">
                                    <img src="assets/images/logout.svg" />
                                </div>
                                <span >Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        )
    }
}
