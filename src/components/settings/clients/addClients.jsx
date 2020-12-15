import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import history from "../../../config/history";
import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import ToastMsg from "../../common/ToastMessage";
import commonActions from "../actions";

const mapStateToProps = state => {
    const { clientReducer, settingsCommonReducer } = state;
    return { clientReducer, settingsCommonReducer };
};
class addClients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            comments: "",
            nameErrorMsg: false,
            commentsErrorMsg: false,
            consultancyIdErrorMsg: false,

            cmms_url: "",
            trailing_view_current_month: "current year",
            modify_next_due_date: true,
            schedule_threshold: "days",
            display_blinking_red_plus: true,
            lock_total_devices: true,
            ep_name: "",
            use_threshold_for_quarterly: true,
            request_email_recipt: true,
            image_description: "",
            image: {},
            consultancy_id: "",
            consultancyIdList: []
        };
    }

    async componentDidMount() {
        await this.props.getConsultancyDropdown();
        await this.setState({
            consultancyIdList: this.props.settingsCommonReducer.consultancyDropdownData.data
        });
    }

    addClients = async () => {
        if (this.state.name === "") {
            this.setState({
                nameErrorMsg: true
            });
        }
        if (this.state.consultancy_id === "") {
            this.setState({
                consultancyIdErrorMsg: true
            });
        }
        if (this.state.name !== "" && this.state.consultancy_id !== "") {
            let rec_data = new FormData();
            rec_data.append("client[name]", this.state.name);
            rec_data.append("client[consultancy_id]", this.state.consultancy_id);
            rec_data.append("client[cmms_url]", this.state.cmms_url);
            rec_data.append("client[trailing_view_current_month]", this.state.trailing_view_current_month);
            rec_data.append("client[modify_next_due_date]", this.state.modify_next_due_date);
            rec_data.append("client[schedule_threshold]", this.state.schedule_threshold);
            rec_data.append("client[display_blinking_red_plus]", this.state.display_blinking_red_plus);
            rec_data.append("client[lock_total_devices]", this.state.lock_total_devices);
            rec_data.append("client[ep_name]", this.state.ep_name);
            rec_data.append("client[use_threshold_for_quarterly]", this.state.use_threshold_for_quarterly);
            rec_data.append("client[request_email_recipt]", this.state.request_email_recipt);
            rec_data.append("client[comments]", this.state.comments);
            await this.props.addClients(rec_data);
            ToastMsg(this.props.clientReducer.addClientData.message, "info");
            this.setState({
                name: "",
                comments: ""
            });
            if (this.props.clientReducer.addClientData.success) {
                history.push("/clients");
            }
        }
    };
    async radioChanged(e) {
        if (e.target.name === "modify_next_due_date") {
            if (e.target.value === "true") {
                await this.setState({ modify_next_due_date: true });
            } else {
                await this.setState({ modify_next_due_date: false });
            }
        } else if (e.target.name === "display_blinking_red_plus") {
            if (e.target.value === "true") {
                await this.setState({ display_blinking_red_plus: true });
            } else {
                await this.setState({ display_blinking_red_plus: false });
            }
        } else if (e.target.name === "lock_total_devices") {
            if (e.target.value === "true") {
                await this.setState({ lock_total_devices: true });
            } else {
                await this.setState({ lock_total_devices: false });
            }
        } else if (e.target.name === "use_threshold_for_quarterly") {
            if (e.target.value === "true") {
                await this.setState({ use_threshold_for_quarterly: true });
            } else {
                await this.setState({ use_threshold_for_quarterly: false });
            }
        } else if (e.target.name === "request_email_recipt") {
            if (e.target.value === "true") {
                await this.setState({ request_email_recipt: true });
            } else {
                await this.setState({ request_email_recipt: false });
            }
        }
    }

    render() {
        return (
            <section className="cont-ara">
                <div className="fst">
                    <ToastContainer />
                    <TopSlider />
                    <div className="dash-cont">
                        <div className="pub-ara six">
                            <div className="frm-ara three-col">
                                <div className="top-ara">
                                    <h4>Add Clients</h4>
                                </div>

                                <div className="head">
                                    <h3>Basic Info</h3>
                                </div>
                                <div className="frm">
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">01</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label
                                                    className="form-control-placeholder"
                                                    style={{ color: this.state.nameErrorMsg && "red" }}
                                                    for="f-name"
                                                >
                                                    Client Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="text"
                                                    onChange={e => {
                                                        this.setState({ name: e.target.value, nameErrorMsg: false });
                                                    }}
                                                    className="form-control"
                                                    placeholder="Enter Client Name "
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">02</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group select-group">
                                                <label
                                                    className="form-control-placeholder"
                                                    style={{ color: this.state.consultancyIdErrorMsg && "red" }}
                                                    for="f-name"
                                                >
                                                    Consultancy *
                                                </label>
                                                <select
                                                    className="form-control select"
                                                    value={this.state.consultancy_id}
                                                    onChange={e => {
                                                        this.setState({ consultancy_id: e.target.value, consultancyIdErrorMsg: false });
                                                    }}
                                                >
                                                    <option value="">Select</option>
                                                    {this.state.consultancyIdList.length &&
                                                        this.state.consultancyIdList.map((item, idex) => {
                                                            return <option value={item.id}> {item.name} </option>;
                                                        })}
                                                </select>
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
                                                <input
                                                    type="text-area"
                                                    id="text"
                                                    onChange={e => {
                                                        this.setState({ cmms_url: e.target.value });
                                                    }}
                                                    className="form-control"
                                                    placeholder="Enter CMMS Url"
                                                />
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
                                                <select
                                                    className="form-control select"
                                                    onChange={e => {
                                                        this.setState({ trailing_view_current_month: e.target.value });
                                                    }}
                                                >
                                                    <option value="current year">Current year</option>
                                                    <option value="previous year">Previous year</option>
                                                </select>
                                                {/* <input type="text-area" id="text"  className="form-control" placeholder=" " /> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">05</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="chek">
                                                <label>Modify Next Due Date</label>
                                                <div className="chekbox-sec" onChange={e => this.radioChanged(e)}>
                                                    <label class="container">
                                                        Yes
                                                        <input type="radio" value={true} name="modify_next_due_date" defaultChecked={true} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="container">
                                                        No
                                                        <input type="radio" value={false} name="modify_next_due_date" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>

                                                {/* <input type="text-area" id="text"  className="form-control" placeholder=" " /> */}
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
                                                <select
                                                    className="form-control select"
                                                    onChange={e => {
                                                        this.setState({ schedule_threshold: e.target.value });
                                                    }}
                                                >
                                                    <option value="days">Days</option>
                                                    <option value="month">Month</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">07</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="chek">
                                                <label>Display Blinking Red Plus?</label>
                                                <div className="chekbox-sec" onChange={e => this.radioChanged(e)}>
                                                    <label class="container">
                                                        Yes
                                                        <input type="radio" value={true} name="display_blinking_red_plus" defaultChecked={true} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="container">
                                                        No
                                                        <input type="radio" value={false} name="display_blinking_red_plus" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">08</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="chek">
                                                <label> Lock Total Devices</label>
                                                <div className="chekbox-sec" onChange={e => this.radioChanged(e)}>
                                                    <label class="container">
                                                        Yes
                                                        <input type="radio" value={true} name="lock_total_devices" defaultChecked={true} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="container">
                                                        No
                                                        <input type="radio" value={false} name="lock_total_devices" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
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
                                                <input
                                                    type="text-area"
                                                    id="text"
                                                    onChange={e => {
                                                        this.setState({ ep_name: e.target.value });
                                                    }}
                                                    className="form-control"
                                                    placeholder="Enter Ep Name "
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">10</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="chek">
                                                <label>Use Threshold For Quarterly</label>
                                                <div className="chekbox-sec" onChange={e => this.radioChanged(e)}>
                                                    <label class="container">
                                                        Yes
                                                        <input type="radio" value={true} name="use_threshold_for_quarterly" defaultChecked={true} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="container">
                                                        No
                                                        <input type="radio" value={false} name="use_threshold_for_quarterly" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">11</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="chek">
                                                <label> Request Email Recipt</label>
                                                <div className="chekbox-sec" onChange={e => this.radioChanged(e)}>
                                                    <label class="container">
                                                        Yes
                                                        <input type="radio" value={true} name="request_email_recipt" defaultChecked={true} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="container">
                                                        No
                                                        <input type="radio" value={false} name="request_email_recipt" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
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
                                                <textarea
                                                    type="text-area"
                                                    onChange={e => {
                                                        this.setState({ comments: e.target.value, commentsErrorMsg: false });
                                                    }}
                                                    className="form-control"
                                                    placeholder=" Enter Comments"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="frm btn-sec">
                                    <button onClick={() => this.addClients()} className="btn btn-submit">
                                        {" "}
                                        <i className="material-icons tic"> check</i>Submit
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

export default connect(mapStateToProps, { ...actions, ...commonActions })(addClients);
