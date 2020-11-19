import React, { Component } from 'react'
import history from '../../../config/history'

export default class SideNav extends Component {


    logOut = () => {
        localStorage.clear()
        console.log("log", history)
        history.push('/login')

    }
    pageChange = (pageName) => {
        history.push('/' + pageName)
    }

    render() {
        return (
            <aside className="sidenav navbar-collapse collapse show" id="navbarSupportedContent">
                <ul className="navbar">
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => { this.pageChange('dashboard') }}>
                            <div className="icn-sec">
                                <img src="/images/Dashboard.svg" />
                            </div>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <div className="icn-sec">
                                <img src="/images/user.svg" />
                            </div>
                            <span>Binders</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <div className="icn-sec">
                                <img src="/images/Report.svg" />
                            </div>
                            <span>Reports</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#setting" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="setting" className="nav-link">
                            <div className="icn-sec">
                                <img src="/images/setting.svg" />
                            </div>
                            <span>Settings</span>
                        </a>
                        <div className="viw-sub">
                            <div className="collapse" id="setting">
                                <ul className="view">
                                    <li>
                                        <a onClick={() => { this.pageChange('consultancy') }} className="">Consultancy</a>
                                    </li>
                                    <li>
                                        <a onClick={() => { this.pageChange('addBuilding') }} className="">Add Building</a>
                                    </li>
                                    <li>
                                        <a onClick={() => { this.pageChange('saveBuilding') }} className="">Save Building</a>
                                    </li>
                                    <li>
                                        <a onClick={() => { this.pageChange('clients') }} className="">Clients</a>
                                    </li>
                                    <li>
                                        <a onClick={() => { this.pageChange('consultancy') }} className="">Users</a>
                                    </li>
                                    <li>
                                        <a onClick={() => { this.pageChange('consultancy') }} className="">User Permissions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => { this.logOut() }}>
                            <div className="icn-sec">
                                <img src="/images/logout.svg" />
                            </div>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </aside>
        )
    }
}
