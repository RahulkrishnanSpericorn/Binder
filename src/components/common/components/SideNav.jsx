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
                        <span
                            className="nav-link"
                            onClick={() => {
                                this.pageChange("dashboard");
                            }}
                        >
                            <div className="icn-sec">
                                <img src="/images/Dashboard.svg" alt="" />
                            </div>
                            <span>Dashboard</span>
                        </span>
                    </li>
                    <li className="nav-item">
                        <span
                            className="nav-link"
                            onClick={() => {
                                this.pageChange("binders");
                            }}
                        >
                            <div className="icn-sec">
                                <img src="/images/user.svg" alt="" />
                            </div>
                            <span>Binders</span>
                        </span>
                    </li>
                    <li className="nav-item">
                        <span
                            className="nav-link"
                            onClick={() => {
                                this.pageChange("reports");
                            }}
                        >
                            <div className="icn-sec">
                                <img src="/images/Report.svg" alt="" />
                            </div>
                            <span>Reports</span>
                        </span>
                    </li>
                    <li className="nav-item">
                        <span href="#setting" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="setting" className="nav-link">
                            <div className="icn-sec">
                                <img src="/images/setting.svg" alt="" />
                            </div>
                            <span>Settings</span>
                        </span>
                        <div className="viw-sub">
                            <div className="collapse" id="setting">
                                <ul className="view">
                                    <li>
                                        <span
                                            onClick={() => {
                                                this.pageChange("consultancy");
                                            }}
                                            className=""
                                        >
                                            Consultancies
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            onClick={() => {
                                                this.pageChange("clients");
                                            }}
                                            className=""
                                        >
                                            Clients
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            onClick={() => {
                                                this.pageChange("regions");
                                            }}
                                            className=""
                                        >
                                            Regions
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            onClick={() => {
                                                this.pageChange("sites");
                                            }}
                                            className=""
                                        >
                                            Sites
                                        </span>
                                    </li>

                                    <li>
                                        <span
                                            onClick={() => {
                                                this.pageChange("buildings");
                                            }}
                                            className=""
                                        >
                                            Buildings
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            onClick={() => {
                                                this.pageChange("binders");
                                            }}
                                            className=""
                                        >
                                            Binders
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            onClick={() => {
                                                this.pageChange("activities");
                                            }}
                                            className=""
                                        >
                                            Activities
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            onClick={() => {
                                                this.pageChange("users");
                                            }}
                                            className=""
                                        >
                                            Users
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            onClick={() => {
                                                this.pageChange("userPermission");
                                            }}
                                            className=""
                                        >
                                            User Permissions
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <span
                            className="nav-link"
                            onClick={() => {
                                this.logOut();
                            }}
                        >
                            <div className="icn-sec">
                                <img src="/images/logout.svg" alt="" />
                            </div>
                            <span>Logout</span>
                        </span>
                    </li>
                </ul>
            </aside>
        );
    }
}
