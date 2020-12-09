import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";

import commonActions from "../actions";
import history from "../../../config/history";
import actions from "./actions";

const mapStateToProps = state => {
    const { binderReducer, settingsCommonReducer } = state;
    return { binderReducer, settingsCommonReducer };
};

class viewBinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buildingItem: {},
            consultancy_id: null,
            client_id: null,
            displayData: [
                { name: "Building Code", key: "code" },
                { name: "Building Name", key: "name" },
                { name: "Consultancy", key: "consultancy" },
                { name: "Client", key: "client" },
                { name: "Region", key: "region" },
                { name: "Site", key: "site" },
                { name: "Display Name", key: "display_name" },
                { name: "Description", key: "description" },
                { name: "Consultancy User", key: null },
                { name: "Client User", key: null },
                { name: "Area", key: "area" },
                { name: "Cost", key: "cost" },
                { name: "Enterprise index", key: "enterprise_index" },
                { name: "Ownership", key: "ownership" },
                { name: "Ownership Type", key: "ownership_type" },
                { name: "Use", key: "use" },
                { name: "Manager", key: "manager" },
                { name: "Year Built", key: "year" },
                { name: "Ministry", key: "ministry" },
                { name: "Street", key: "street" },
                { name: "City", key: "city" },
                { name: "State", key: "state" },
                { name: "Country", key: "country" },
                { name: "Zip Code", key: "zip_code" },
                { name: "Comments", key: "comments" },
                { name: "Created At", key: "created_at" },
                { name: "Updated At", key: "updated_at" }
            ]
        };
    }

    componentDidMount = () => {
        this.setState({
            buildingItem: this.props.history.location.state.buildingItem || {},
            consultancy_id: this.props.history.location.state.consultancy_id || null,
            client_id: this.props.history.location.state.client_id || null
        });
    };

    backToBuilding = () => {
        history.push("/building");
    };

    render() {
        const { buildingItem, displayData } = this.state;
        return (
            <section className="cont-ara">
                <div className="fst">
                    <ToastContainer />
                    <div class="top-slider nav-ara">
                        <div class="tab-sec">
                            <ul class="nav nav-tabs">
                                <li class="active">
                                    <a data-toggle="tab" href="#bd">
                                        Basic Details
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#fls">
                                        Floors
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#img">
                                        Images
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="pagenation">
                            <ul>
                                <li>
                                    <a href="#">Building</a>
                                </li>

                                <li class="active">
                                    <a href="#">View Details</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="dash-cont">
                        <div className="pub-ara six">
                            <div className="frm-ara three-col">
                                <div className="frm sav">
                                    {displayData.map((item, i) => (
                                        <div key={i} className="itm">
                                            <div className="cunt">
                                                <div className="numb">{i + 1}</div>
                                            </div>
                                            <div className="itm-cnt">
                                                <div className="form-group">
                                                    <label className="form-control-placeholder" for="f-name">
                                                        {item.name}
                                                    </label>

                                                    {["region", "site", "client", "consultancy"].includes(item.key) ? (
                                                        <h3>{buildingItem[item.key] ? buildingItem[item.key].name : "-"}</h3>
                                                    ) : (
                                                        <h3>{buildingItem[item.key] || "-"}</h3>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="frm btn-sec">
                                    <button onClick={() => this.backToBuilding()} className="btn btn-submit">
                                        <i className="material-icons tic"> check</i>Go Back{" "}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps, { ...actions, ...commonActions })(viewBinder);
