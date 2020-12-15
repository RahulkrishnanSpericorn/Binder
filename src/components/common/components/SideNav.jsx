import React, { Component } from "react";
import history from "../../../config/history";

export default class SideNav extends Component {
    logOut = () => {
        localStorage.clear();
        history.push("/login");
    };

    pageChange = pageName => {
        history.push("/" + pageName);
    };

    render() {
        return (
            <aside className="sidenav navbar-collapse collapse show" id="navbarSupportedContent">
                <ul className="navbar">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            onClick={() => {
                                this.pageChange("dashboard");
                            }}
                        >
                            <div className="icn-sec">
                                <img src="/images/Dashboard.svg" alt="" />
                            </div>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            onClick={() => {
                                this.pageChange("binders");
                            }}
                        >
                            <div className="icn-sec">
                                <img src="/images/user.svg" alt="" />
                            </div>
                            <span>Binders</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            onClick={() => {
                                this.pageChange("reports");
                            }}
                        >
                            <div className="icn-sec">
                                <img src="/images/Report.svg" alt="" />
                            </div>
                            <span>Reports</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#setting" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="setting" className="nav-link">
                            <div className="icn-sec">
                                <img src="/images/setting.svg" alt="" />
                            </div>
                            <span>Settings</span>
                        </a>
                        <div className="viw-sub">
                            <div className="collapse" id="setting">
                                <ul className="view">
                                    <li>
                                        <a
                                            onClick={() => {
                                                this.pageChange("consultancy");
                                            }}
                                            className=""
                                        >
                                            Consultancies
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => {
                                                this.pageChange("clients");
                                            }}
                                            className=""
                                        >
                                            Clients
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => {
                                                this.pageChange("regions");
                                            }}
                                            className=""
                                        >
                                            Regions
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => {
                                                this.pageChange("sites");
                                            }}
                                            className=""
                                        >
                                            Sites
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            onClick={() => {
                                                this.pageChange("buildings");
                                            }}
                                            className=""
                                        >
                                            Buildings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => {
                                                this.pageChange("binders");
                                            }}
                                            className=""
                                        >
                                            Binders
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => {
                                                this.pageChange("activities");
                                            }}
                                            className=""
                                        >
                                            Activities
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => {
                                                this.pageChange("users");
                                            }}
                                            className=""
                                        >
                                            Users
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => {
                                                this.pageChange("userPermission");
                                            }}
                                            className=""
                                        >
                                            User Permissions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            onClick={() => {
                                this.logOut();
                            }}
                        >
                            <div className="icn-sec">
                                <img src="/images/logout.svg" alt="" />
                            </div>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </aside>
        );
    }
}
