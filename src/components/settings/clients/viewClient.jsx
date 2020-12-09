import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import history from "../../../config/history";
import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import ToastMsg from "../../common/ToastMessage";
import commonActions from "../actions";

const mapStateToProps = state => {
    console.log("state", state);
    const { clientReducer, settingsCommonReducer } = state;
    return { clientReducer, settingsCommonReducer };
};

class viewClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consultancy_id: "",
            clientItem: props.history.location.state.clientItem || {},
            client_id: ""
        };
    }

    async componentDidMount() {
        await this.props.getConsultancyDropdown();
        await this.setState({
            clientItem: this.props.history.location.state.clientItem || {},
            consultancy_id: this.props.history.location.state.consultancy_id || null,
            client_id: this.props.history.location.state.client_id || null
        });
    }
    render() {
        const { clientItem } = this.state;
        console.log("clientItem", clientItem);
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
                                <li>
                                    <a data-toggle="tab" href="#map">
                                        Map
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="pagenation">
                            <ul>
                                <li>
                                    <a href="#">Clients </a>
                                </li>

                                <li class="active">
                                    <a href="#">View Details </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="dash-cont">
                        <div className="pub-ara six">
                            <div className="frm-ara three-col">
                                <div className="frm sav">
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">01</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Client Name
                                                </label>
                                                <h3>{clientItem.name || "-"}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">02</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group select-group">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Consultancy
                                                </label>
                                                <h3> {(clientItem.consultancy && clientItem.consultancy.name) || "-"} </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">03</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label className="form-control-placeholder" for="f-name">
                                                    CMMS Url
                                                </label>
                                                <h3>{clientItem.cmms_url || "-"}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">04</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group ">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Trailing View Current Month
                                                </label>

                                                <h3>{clientItem.trailing_view_current_month || "-"}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">05</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label>Modify Next Due Date</label>
                                                <h3>{clientItem.modify_next_due_date ? "Yes" : "No"}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">06</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group ">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Schedule Threshold
                                                </label>
                                                <h3>{clientItem.schedule_threshold}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">07</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label>Display Blinking Red Plus</label>
                                                <h3>{clientItem.display_blinking_red_plus ? "Yes" : "No"}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">08</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label> Lock Total Devices</label>
                                                <h3>{clientItem.lock_total_devices ? "Yes" : "No"}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">09</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Ep Name
                                                </label>
                                                <h3>{clientItem.ep_name || "-"}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">10</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label>Use Threshold For Quarterly</label>
                                                <h3>{clientItem.use_threshold_for_quarterly ? "Yes" : "No"}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">11</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label> Request Email Recipt</label>
                                                <h3>{clientItem.request_email_recipt ? "Yes" : "No"}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">12</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Comments
                                                </label>
                                                <h3>{clientItem.comments || "-"}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="frm btn-sec">
                                    <button onClick={() => history.push("/clients")} className="btn btn-submit">
                                        <i className="material-icons tic"> check</i>Go Back
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

export default connect(mapStateToProps, { ...actions, ...commonActions })(viewClient);
