import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";

import history from "../../../config/history";
import ToastMsg from "../../common/ToastMessage";
import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import commonActions from "../actions";
import Breadcrumb from "../../common/components/Breadcrumb";

class clientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formParams: {
                name: "",
                comments: "",
                cmms_url: "",
                trailing_view_current_month: "current year",
                modify_next_due_date: "no",
                schedule_threshold: "days",
                display_blinking_red_plus: "no",
                lock_total_devices: "no",
                ep_name: "",
                use_threshold_for_quarterly: "no",
                request_email_recipt: "no",
                consultancy_id: ""
            },
            errorParams: {
                name: false,
                consultancy_id: false
            },
            isEdit: false,
            showErrorBorder: false,
            consultancyIdList: []
        };
    }

    componentDidMount = async () => {
        await this.props.getConsultancyDropdown();
        await this.setState({
            consultancyIdList: this.props.settingsCommonReducer.consultancyDropdownData.data
        });
        if (this.props.history.location.state && this.props.history.location.state.clientItem) {
            let tempFormParam = this.props.history.location.state.clientItem;
            tempFormParam.consultancy_id = tempFormParam.consultancy.id;
            await this.setState({
                formParams: tempFormParam,
                isEdit: true
            });
        }
    };

    validate = () => {
        const { formParams } = this.state;
        let errorParams = {
            name: false,
            consultancy_id: false
        };
        let showErrorBorder = false;
        if (!formParams.name || !formParams.name.trim().length) {
            errorParams.name = true;
            showErrorBorder = true;
        }
        if (!formParams.consultancy_id || !formParams.consultancy_id.trim().length) {
            errorParams.consultancy_id = true;
            showErrorBorder = true;
        }
        this.setState({
            showErrorBorder,
            errorParams
        });
        if (showErrorBorder) return false;
        return true;
    };

    addClient = async () => {
        const { formParams } = this.state;
        if (this.validate()) {
            await this.props.addClients({ client: formParams });
            ToastMsg(this.props.clientReducer.addClientData.message, "info");
            if (this.props.clientReducer.addClientData.success) {
                history.push("/clients");
            }
        }
    };

    editClient = async () => {
        const { formParams } = this.state;
        if (this.validate()) {
            await this.props.editClientsById({ client: formParams }, formParams.id);
            ToastMsg(this.props.clientReducer.editClientData.message, "info");
            if (this.props.clientReducer.editClientData.success) {
                history.push("/clients");
            }
        }
    };

    radioChanged = async e => {
        const { formParams } = this.state;
        await this.setState({
            formParams: {
                ...formParams,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        const { consultancyIdList, formParams, isEdit, showErrorBorder, errorParams } = this.state;
        return (
            <React.Fragment>
                <section className="cont-ara act-main">
                    <div className="list-area">
                        <ToastContainer />
                        <TopSlider />
                        <div className="lst-bt-nav create">
                            <div className="table table-ara">
                                <div className="list-sec">
                                    <div className="nav-ara">
                                        <div className="head">
                                            <h4>{isEdit ? "Edit" : "Add"} Client</h4>
                                        </div>
                                        {/* <Breadcrumb /> */}
                                    </div>
                                </div>
                                <div className="form-area">
                                    {isEdit ? (
                                        <div className="itm">
                                            <div className="form-group">
                                                <label>Code</label>
                                                <input type="text" className="form-control" placeholder="" value={formParams.code} disabled={true} />
                                            </div>
                                        </div>
                                    ) : null}
                                    <div className="itm">
                                        <div className="form-group">
                                            <label className={showErrorBorder && errorParams.name ? "text-red" : ""}>Client Name *</label>
                                            <input
                                                type="text"
                                                id="text"
                                                value={formParams.name}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            name: e.target.value
                                                        }
                                                    })
                                                }
                                                className="form-control"
                                                placeholder="Enter Client Name "
                                            />
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="form-group select-group">
                                            <label className={showErrorBorder && errorParams.consultancy_id ? "text-red" : ""}>Consultancy *</label>
                                            <div className="custom-selecbox">
                                                <select
                                                    className="form-control custom-selecbox"
                                                    value={formParams.consultancy_id}
                                                    onChange={e =>
                                                        this.setState({
                                                            formParams: {
                                                                ...formParams,
                                                                consultancy_id: e.target.value
                                                            }
                                                        })
                                                    }
                                                >
                                                    <option value="">Select</option>
                                                    {consultancyIdList.length &&
                                                        consultancyIdList.map((item, idex) => {
                                                            return <option value={item.id}> {item.name} </option>;
                                                        })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="form-group">
                                            <label className="form-control-placeholder">CMMS Url</label>
                                            <input
                                                type="text-area"
                                                id="text"
                                                value={formParams.cmms_url}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            cmms_url: e.target.value
                                                        }
                                                    })
                                                }
                                                className="form-control"
                                                placeholder="Enter CMMS Url"
                                            />
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="form-group ">
                                            <label className="form-control-placeholder">Trailing View Current Month</label>
                                            <div className="custom-selecbox">
                                                <select
                                                    className="form-control custom-selecbox"
                                                    value={formParams.trailing_view_current_month}
                                                    onChange={e =>
                                                        this.setState({
                                                            formParams: {
                                                                ...formParams,
                                                                trailing_view_current_month: e.target.value
                                                            }
                                                        })
                                                    }
                                                >
                                                    <option value="current year">Current year</option>
                                                    <option value="previous year">Previous year</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <label>Modify Next Due Date</label>
                                        <div className="chek">
                                            <div className="chekbox-sec">
                                                <label class="container">
                                                    Yes
                                                    <input
                                                        type="radio"
                                                        name="modify_next_due_date"
                                                        value="yes"
                                                        onChange={e => this.radioChanged(e)}
                                                        checked={formParams.modify_next_due_date === "yes"}
                                                    />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="container">
                                                    No
                                                    <input
                                                        type="radio"
                                                        name="modify_next_due_date"
                                                        value="no"
                                                        onChange={e => this.radioChanged(e)}
                                                        checked={formParams.modify_next_due_date === "no"}
                                                    />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group ">
                                            <label className="form-control-placeholder">Schedule Threshold</label>
                                            <div className="custom-selecbox">
                                                <select
                                                    className="form-control custom-selecbox"
                                                    value={formParams.schedule_threshold}
                                                    onChange={e =>
                                                        this.setState({
                                                            formParams: {
                                                                ...formParams,
                                                                schedule_threshold: e.target.value
                                                            }
                                                        })
                                                    }
                                                >
                                                    <option value="days">Days</option>
                                                    <option value="month">Month</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <label>Display Blinking Red Plus?</label>
                                        <div className="chek">
                                            <div className="chekbox-sec">
                                                <label class="container">
                                                    Yes
                                                    <input
                                                        type="radio"
                                                        value="yes"
                                                        name="display_blinking_red_plus"
                                                        onChange={e => this.radioChanged(e)}
                                                        checked={formParams.display_blinking_red_plus === "yes"}
                                                    />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="container">
                                                    No
                                                    <input
                                                        type="radio"
                                                        value="no"
                                                        name="display_blinking_red_plus"
                                                        onChange={e => this.radioChanged(e)}
                                                        checked={formParams.display_blinking_red_plus === "no"}
                                                    />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <label> Lock Total Devices</label>
                                        <div className="chek">
                                            <div className="chekbox-sec">
                                                <label class="container">
                                                    Yes
                                                    <input
                                                        type="radio"
                                                        value="yes"
                                                        name="lock_total_devices"
                                                        onChange={e => this.radioChanged(e)}
                                                        checked={formParams.lock_total_devices === "yes"}
                                                    />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="container">
                                                    No
                                                    <input
                                                        type="radio"
                                                        value="no"
                                                        name="lock_total_devices"
                                                        onChange={e => this.radioChanged(e)}
                                                        checked={formParams.lock_total_devices === "no"}
                                                    />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label className="form-control-placeholder">Ep Name</label>
                                            <input
                                                type="text-area"
                                                id="text"
                                                value={formParams.ep_name}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            ep_name: e.target.value
                                                        }
                                                    })
                                                }
                                                className="form-control"
                                                placeholder="Enter Ep Name "
                                            />
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <label>Use Threshold For Quarterly</label>
                                        <div className="chek">
                                            <div className="chekbox-sec">
                                                <label class="container">
                                                    Yes
                                                    <input
                                                        type="radio"
                                                        value="yes"
                                                        name="use_threshold_for_quarterly"
                                                        onChange={e => this.radioChanged(e)}
                                                        checked={formParams.use_threshold_for_quarterly === "yes"}
                                                    />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="container">
                                                    No
                                                    <input
                                                        type="radio"
                                                        value="no"
                                                        name="use_threshold_for_quarterly"
                                                        onChange={e => this.radioChanged(e)}
                                                        checked={formParams.use_threshold_for_quarterly === "no"}
                                                    />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <label> Request Email Recipt</label>
                                        <div className="chek">
                                            <div className="chekbox-sec">
                                                <label class="container">
                                                    Yes
                                                    <input
                                                        type="radio"
                                                        value="yes"
                                                        name="request_email_recipt"
                                                        onChange={e => this.radioChanged(e)}
                                                        checked={formParams.request_email_recipt === "yes"}
                                                    />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="container">
                                                    No
                                                    <input
                                                        type="radio"
                                                        value="no"
                                                        name="request_email_recipt"
                                                        onChange={e => this.radioChanged(e)}
                                                        checked={formParams.request_email_recipt === "no"}
                                                    />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="form-group">
                                            <label className="form-control-placeholder">Comments</label>
                                            <textarea
                                                type="text-area"
                                                value={formParams.comments}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            comments: e.target.value
                                                        }
                                                    })
                                                }
                                                className="form-control"
                                                placeholder=" Enter Comments"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-sec">
                                    <button className="btn btn-cncl-back mr-2" onClick={() => history.push("/clients")}>
                                        <i className="material-icons tic"> close</i>Cancel
                                    </button>
                                    {isEdit ? (
                                        <button className="btn btn-create" onClick={() => this.editClient()}>
                                            <i className="material-icons tic"> check</i> Update Client
                                        </button>
                                    ) : (
                                        <button className="btn btn-create" onClick={() => this.addClient()}>
                                            <i className="material-icons tic"> check</i> Add Client
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { clientReducer, settingsCommonReducer } = state;
    return { clientReducer, settingsCommonReducer };
};

export default connect(mapStateToProps, { ...actions, ...commonActions })(clientForm);
