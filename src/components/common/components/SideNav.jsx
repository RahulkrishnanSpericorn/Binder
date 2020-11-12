import React, { Component } from 'react'
import history from '../../../config/history'

export default class SideNav extends Component {


    logOut = ()=>{
        localStorage.clear()
        console.log("log", history)
        history.push('/login')
        
    }

    render() {
        return (
            <aside class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="sidenav">
                <ul>
                    <li>
                        <a>
                            <div class="icn-sec">
                                <img src="assets/images/Dashboard.svg"/>
                            </div>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="icn-sec">
                                <img src="assets/images/user.svg"/>
                            </div>
                            <span>Binders</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="icn-sec">
                                <img src="assets/images/Report.svg"/>
                            </div>
                            <span>Reports</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="icn-sec">
                                <img src="assets/images/setting.svg"/>
                            </div>
                            <span>Settings</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={()=>{ this.logOut()}}>
                            <div class="icn-sec">
                                <img src="assets/images/logout.svg"/>
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
