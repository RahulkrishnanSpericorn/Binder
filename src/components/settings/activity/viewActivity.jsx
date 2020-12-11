import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";

import commonActions from "../actions";
import history from "../../../config/history";
import actions from "./actions";
import Portal from "../../common/components/Portal";
import FrequencyModel from "../../common/components/FrequencyModel";

const mapStateToProps = state => {
    const { binderReducer, settingsCommonReducer } = state;
    return { binderReducer, settingsCommonReducer };
};

class viewActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activityItem: {},
            consultancy_id: null,
            client_id: null,
            displayData: [
                { name: "Code", key: "code" },
                { name: "Activity Type", key: "activity_type" },
                { name: "Binder", key: "binder" },
                { name: "Client", key: "client" },
                { name: "Consultancy", key: "consultancy" },
                { name: "Display Order", key: "display_order" },
                { name: "Reference", key: "reference" },
                { name: "Activity Description", key: "activity_description" },
                { name: "Activity text", key: "activity_text" },
                { name: "Activity Tooltip", key: "activity_tooltip" },
                { name: "Interval Type", key: "interval_type" },
                { name: "Frequency", key: "frequency" },
                { name: "Test Frequency", key: "test_frequency" },
                { name: "Completion Threshold", key: "completion_threshold" },
                { name: "Email Threshold", key: "email_threshold" },
                { name: "Code Reference", key: "code_reference" },
                { name: "Code Reference Tooltip", key: "code_reference_tooltip" },
                { name: "Quarterly View", key: "quarterly_view" },
                { name: "Edit form", key: "edit_form" },
                { name: "Default Total Devices", key: "default_total_devices" },
                { name: "Valid From", key: "start_date" },
                { name: "Valid To", key: "end_date" },
                { name: "Created At", key: "created_at" },
                { name: "Updated At", key: "updated_at" }
            ],
            showFrequencyModal: false
        };
    }

    componentDidMount = () => {
        this.setState({
            activityItem: this.props.history.location.state.activityItem || {},
            consultancy_id: this.props.history.location.state.consultancy_id || null,
            client_id: this.props.history.location.state.client_id || null
        });
    };

    renderFrequencyModal = () => {
        const { showFrequencyModal, activityItem } = this.state;
        if (!showFrequencyModal) return null;

        return (
            <Portal
                body={
                    <FrequencyModel
                        onCancel={this.toggleShowFrequencyModal}
                        setFrequencyData={this.setFrequencyData}
                        frequency={activityItem.frequency}
                        test_frequency={activityItem.test_frequency}
                        type={"view"}
                    />
                }
                onCancel={this.toggleShowFrequencyModal}
            />
        );
    };

    toggleShowFrequencyModal = () => {
        const { showFrequencyModal } = this.state;
        this.setState({
            showFrequencyModal: !showFrequencyModal
        });
    };

    backToActivity = () => {
        history.push("/activity");
    };

    render() {
        const { activityItem, displayData } = this.state;
        console.log("activityItem", activityItem);
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
                                        Procedure
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
                                    <a href="#">Activity </a>
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

                                                    {["binder", "client", "consultancy"].includes(item.key) ? (
                                                        <h3>{activityItem[item.key] ? activityItem[item.key].name : "-"}</h3>
                                                    ) : item.key === "frequency" ? (
                                                        <button class="btn btn-frqy" onClick={() => this.toggleShowFrequencyModal()}>
                                                            View Frequency
                                                        </button>
                                                    ) : (
                                                        <h3>{activityItem[item.key] || "-"}</h3>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="frm btn-sec">
                                    <button onClick={() => this.backToActivity()} className="btn btn-submit">
                                        <i className="material-icons tic"> check</i>Go Back{" "}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderFrequencyModal()}
            </section>
        );
    }
}

export default connect(mapStateToProps, { ...actions, ...commonActions })(viewActivity);
