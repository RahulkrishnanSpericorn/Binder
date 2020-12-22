import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import DatePicker from "react-date-picker";

import history from "../../../config/history";
import Portal from "../../common/components/Portal";
import ToastMsg from "../../common/ToastMessage";
import FrequencyModel from "../../common/components/FrequencyModel";
import TopSlider from "../../common/components/TopSlider";
import commonActions from "../actions";
import actions from "./actions";
import Breadcrumb from "../../common/components/Breadcrumb";

class addActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consultancy_id: null,
            client_id: null,
            consultancyIdList: [],
            clientIdList: [],
            binderIdList: [],
            formParams: {
                activity_type: null,
                display_order: null,
                reference: null,
                activity_description: null,
                activity_text: null,
                activity_tooltip: null,
                frequency: null,
                test_frequency: null,
                interval_type: null,
                completion_threshold: null,
                email_threshold: null,
                code_reference: null,
                code_reference_tooltip: null,
                quarterly_view: null,
                edit_form: null,
                default_total_devices: null,
                start_date: null,
                end_date: null,
                binder_id: null,
                consultancy_id: null,
                client_id: null
            },
            errorParams: {
                binder_id: false,
                consultancy_id: false,
                client_id: false
            },
            isEdit: false,
            showErrorBorder: false,
            showFrequencyModal: false
        };
    }

    componentDidMount = async () => {
        await this.props.getConsultancyDropdown();
        await this.setState({
            consultancyIdList: this.props.settingsCommonReducer.consultancyDropdownData.data
        });
        if (this.props.history.location.state && this.props.history.location.state.activityItem) {
            await this.getClientDropDown(this.props.history.location.state.consultancy_id);
            await this.getBinderDropDown(this.props.history.location.state.client_id);

            let tempFormParam = this.props.history.location.state.activityItem;
            tempFormParam.binder_id = tempFormParam.binder.id;
            tempFormParam.client_id = tempFormParam.client.id;
            tempFormParam.consultancy_id = tempFormParam.consultancy.id;
            if (tempFormParam.start_date) tempFormParam.start_date = new Date(tempFormParam.start_date);
            if (tempFormParam.end_date) tempFormParam.end_date = new Date(tempFormParam.end_date);

            await this.setState({
                formParams: tempFormParam,
                isEdit: true
            });
        }
    };

    renderFrequencyModal = () => {
        const { showFrequencyModal, formParams } = this.state;
        if (!showFrequencyModal) return null;

        return (
            <Portal
                body={
                    <FrequencyModel
                        onCancel={this.toggleShowFrequencyModal}
                        setFrequencyData={this.setFrequencyData}
                        frequency={formParams.frequency}
                        test_frequency={formParams.test_frequency}
                        type={"form"}
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

    setFrequencyData = (frequency, test_frequency) => {
        const { formParams } = this.state;
        this.setState({
            formParams: {
                ...formParams,
                frequency,
                test_frequency
            }
        });
    };

    getBinderDropDown = async client_id => {
        await this.props.getBinderDropdown({ client_id });
        await this.setState({
            binderIdList: this.props.settingsCommonReducer.binderDropdownData.data
        });
        return true;
    };

    getClientDropDown = async consultancy_id => {
        await this.props.getClientDropdown({ consultancy_id });
        await this.setState({
            clientIdList: this.props.settingsCommonReducer.clientDropdownData.data
        });
        return true;
    };

    selectConsultancyId = async consultancy_id => {
        const { formParams } = this.state;
        await this.setState({
            formParams: {
                ...formParams,
                consultancy_id
            }
        });
        this.getClientDropDown(consultancy_id);
    };

    validate = () => {
        const { formParams } = this.state;
        let errorParams = {
            binder_id: false,
            consultancy_id: false,
            client_id: false
        };
        let showErrorBorder = false;
        if (!formParams.binder_id || !formParams.binder_id.trim().length) {
            errorParams.binder_id = true;
            showErrorBorder = true;
        }
        if (!formParams.consultancy_id || !formParams.consultancy_id.trim().length) {
            errorParams.consultancy_id = true;
            showErrorBorder = true;
        }
        if (!formParams.client_id || !formParams.client_id.trim().length) {
            errorParams.client_id = true;
            showErrorBorder = true;
        }
        this.setState({
            showErrorBorder,
            errorParams
        });

        if (showErrorBorder) return false;
        return true;
    };

    addActivity = async () => {
        const { formParams } = this.state;
        if (this.validate()) {
            await this.props.addActivity(formParams);
            ToastMsg(this.props.activityReducer.addActivityData.message, "info");
            if (this.props.activityReducer.addActivityData.success) {
                history.push("/activities");
            }
        }
    };

    editActivity = async () => {
        const { formParams } = this.state;
        if (this.validate()) {
            await this.props.editActivity(formParams, formParams.id);
            ToastMsg(this.props.activityReducer.editActivityData.message, "info");
            if (this.props.activityReducer.editActivityData.success) {
                history.push("/activities");
            }
        }
    };

    render() {
        const { binderIdList, formParams, isEdit, showErrorBorder, errorParams } = this.state;
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
                                            <h4>{isEdit ? "Edit" : "Add"} Activity</h4>
                                        </div>
                                        {/* <Breadcrumb /> */}
                                    </div>
                                </div>
                                <div className="activity form-area">
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
                                            <label className={showErrorBorder && errorParams.consultancy_id ? "text-red" : ""}>Consultancy *</label>
                                            <div className="custom-selecbox">
                                                <select
                                                    className="custom-selecbox form-control"
                                                    value={formParams.consultancy_id}
                                                    onChange={e => {
                                                        this.selectConsultancyId(e.target.value);
                                                    }}
                                                >
                                                    <option value="">Select</option>
                                                    {this.state.consultancyIdList.length &&
                                                        this.state.consultancyIdList.map((item, idex) => {
                                                            return (
                                                                <option key={idex} value={item.id}>
                                                                    {item.name}
                                                                </option>
                                                            );
                                                        })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label className={showErrorBorder && errorParams.client_id ? "text-red" : ""}>Client *</label>
                                            <div className="custom-selecbox">
                                                <select
                                                    className="custom-selecbox form-control"
                                                    value={formParams.client_id}
                                                    onChange={e => {
                                                        this.setState({
                                                            formParams: {
                                                                ...formParams,
                                                                client_id: e.target.value
                                                            }
                                                        });
                                                        this.getBinderDropDown(e.target.value);
                                                    }}
                                                >
                                                    <option value="">Select</option>
                                                    {this.state.clientIdList.length &&
                                                        this.state.clientIdList.map((item, idex) => {
                                                            return (
                                                                <option key={idex} value={item.id}>
                                                                    {item.name}
                                                                </option>
                                                            );
                                                        })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Activity Type</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=" "
                                                value={formParams.activity_type}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            activity_type: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Display Order</label>
                                            <input
                                                type="number"
                                                min="0"
                                                className="form-control"
                                                placeholder=" "
                                                value={formParams.display_order}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            display_order: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Reference</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=" "
                                                value={formParams.reference}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            reference: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="itm wid-50">
                                        <div className="form-group">
                                            <label>Activity Description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=" "
                                                value={formParams.activity_description}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            activity_description: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Activity text</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=" "
                                                value={formParams.activity_text}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            activity_text: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Activity Tooltip</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=" "
                                                value={formParams.activity_tooltip}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            activity_tooltip: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Frequency</label>
                                            <button className="btn btn-frqy" onClick={() => this.toggleShowFrequencyModal()}>
                                                Set Frequency
                                            </button>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Test Frequency</label>
                                            <input
                                                type="text"
                                                disabled={true}
                                                className="form-control cursor-not-allowed"
                                                value={formParams.test_frequency}
                                            />
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Completion Threshold</label>
                                            <input
                                                type="number"
                                                min="0"
                                                className="form-control"
                                                placeholder=" "
                                                value={formParams.completion_threshold}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            completion_threshold: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Email Threshold</label>
                                            <input
                                                type="number"
                                                min="0"
                                                className="form-control"
                                                placeholder=" "
                                                value={formParams.email_threshold}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            email_threshold: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Code Reference</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=" "
                                                value={formParams.code_reference}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            code_reference: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Code Reference Tooltip</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=" "
                                                value={formParams.code_reference_tooltip}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            code_reference_tooltip: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Quarterly View</label>
                                            <select
                                                className="custom-selecbox form-control"
                                                value={formParams.quarterly_view}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            quarterly_view: e.target.value
                                                        }
                                                    })
                                                }
                                            >
                                                <option value="">Select</option>
                                                <option value="YES">YES</option>
                                                <option value="NO">NO</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Edit form</label>
                                            <select
                                                className="custom-selecbox form-control"
                                                value={formParams.edit_form}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            edit_form: e.target.value
                                                        }
                                                    })
                                                }
                                            >
                                                <option value="">Select</option>
                                                <option value="FAST">FAST</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Default Total Devices</label>
                                            <input
                                                type="number"
                                                min="0"
                                                className="form-control"
                                                placeholder=" "
                                                value={formParams.default_total_devices}
                                                onChange={e =>
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            default_total_devices: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="form-group calendar">
                                            <label>Valid From</label>
                                            <DatePicker
                                                className="form-control"
                                                onChange={value => {
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            start_date: value
                                                        }
                                                    });
                                                }}
                                                value={formParams.start_date && new Date(formParams.start_date)}
                                            />
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group calendar">
                                            <label>Valid To</label>
                                            <DatePicker
                                                className="form-control"
                                                onChange={value => {
                                                    this.setState({
                                                        formParams: {
                                                            ...formParams,
                                                            end_date: value
                                                        }
                                                    });
                                                }}
                                                value={formParams.end_date && new Date(formParams.end_date)}
                                            />
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="form-group calendar">
                                            <label className={showErrorBorder && errorParams.binder_id ? "text-red" : ""}>Binder *</label>
                                            <div className="custom-selecbox">
                                                <select
                                                    className="custom-selecbox form-control"
                                                    value={formParams.binder_id}
                                                    onChange={e =>
                                                        this.setState({
                                                            formParams: {
                                                                ...formParams,
                                                                binder_id: e.target.value
                                                            }
                                                        })
                                                    }
                                                >
                                                    <option value="">Select</option>
                                                    {binderIdList.length &&
                                                        binderIdList.map((item, idex) => {
                                                            return (
                                                                <option key={idex} value={item.id}>
                                                                    {item.name}
                                                                </option>
                                                            );
                                                        })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {isEdit ? (
                                        <React.Fragment>
                                            <div className="itm">
                                                <div className="form-group calendar">
                                                    <label>Created At</label>
                                                    <input
                                                        type="text"
                                                        disabled="true"
                                                        value={formParams.created_at}
                                                        className="form-control cursor-not-allowed"
                                                        placeholder=" "
                                                    />
                                                    <div className="icon" data-toggle="modal" data-target="#myModal">
                                                        <img src="/images/calendar-gray.svg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="itm">
                                                <div className="form-group calendar">
                                                    <label>Updated At</label>
                                                    <input
                                                        type="text"
                                                        disabled="true"
                                                        value={formParams.updated_at}
                                                        className="form-control cursor-not-allowed"
                                                        placeholder=" "
                                                    />
                                                    <div className="icon" data-toggle="modal" data-target="#myModal">
                                                        <img src="/images/calendar-gray.svg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    ) : null}
                                </div>
                                <div className="btn-sec">
                                    <button className="btn btn-cncl-back mr-2" onClick={() => history.push("/activities")}>
                                        <i className="material-icons tic"> close</i>Cancel
                                    </button>
                                    {isEdit ? (
                                        <button className="btn btn-create" onClick={() => this.editActivity()}>
                                            <i className="material-icons tic"> check</i> Update Activity
                                        </button>
                                    ) : (
                                        <button className="btn btn-create" onClick={() => this.addActivity()}>
                                            <i className="material-icons tic"> check</i> Add Activity
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.renderFrequencyModal()}
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { activityReducer, settingsCommonReducer } = state;
    return { activityReducer, settingsCommonReducer };
};

export default connect(mapStateToProps, { ...actions, ...commonActions })(addActivity);
