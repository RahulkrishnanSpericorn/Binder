import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import DatePicker from "react-date-picker";

import TopSlider from "../../common/components/TopSlider";
import commonActions from "../actions";
import ToastMsg from "../../common/ToastMessage";
import history from "../../../config/history";
import actions from "./actions";
import Portal from "../../common/components/Portal";
import FrequencyModel from "./FrequencyModel";

class addActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consultancy_id: null,
            client_id: null,
            consultancyIdList: [],
            clientIdList: [],
            binderIdList: [],
            activityParams: {
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

    async componentDidMount() {
        await this.props.getConsultancyDropdown();
        await this.setState({
            consultancyIdList: this.props.settingsCommonReducer.consultancyDropdownData.data
        });
        if (this.props.history.location.state && this.props.history.location.state.activityItem) {
            await this.getClientDropDown(this.props.history.location.state.consultancy_id);
            await this.getBinderDropDown(this.props.history.location.state.client_id);
            let tempActivityParam = this.props.history.location.state.activityItem;
            tempActivityParam.binder_id = tempActivityParam.binder.id;
            tempActivityParam.client_id = tempActivityParam.client.id;
            tempActivityParam.consultancy_id = tempActivityParam.consultancy.id;
            await this.setState({
                activityParams: tempActivityParam,
                isEdit: true
            });
        }
    }

    renderFrequencyModal = () => {
        const { showFrequencyModal, activityParams } = this.state;
        if (!showFrequencyModal) return null;

        return (
            <Portal
                body={
                    <FrequencyModel
                        onCancel={this.toggleShowFrequencyModal}
                        setFrequencyData={this.setFrequencyData}
                        frequency={activityParams.frequency}
                        test_frequency={activityParams.test_frequency}
                    />
                }
                onCancel={this.toggleShowFrequencyModal}
            />
        );
    };

    setFrequencyData = (frequency, test_frequency) => {
        const { activityParams } = this.state;
        this.setState({
            activityParams: {
                ...activityParams,
                frequency,
                test_frequency
            }
        });
    };

    toggleShowFrequencyModal = () => {
        const { showFrequencyModal } = this.state;
        this.setState({
            showFrequencyModal: !showFrequencyModal
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
        const { activityParams } = this.state;
        await this.setState({
            activityParams: {
                ...activityParams,
                consultancy_id
            }
        });
        this.getClientDropDown(consultancy_id);
    };

    validate = () => {
        const { activityParams } = this.state;
        let errorParams = {
            binder_id: false,
            consultancy_id: false,
            client_id: false
        };
        let showErrorBorder = false;
        if (!activityParams.binder_id || !activityParams.binder_id.trim().length) {
            errorParams.binder_id = true;
            showErrorBorder = true;
        }
        if (!activityParams.consultancy_id || !activityParams.consultancy_id.trim().length) {
            errorParams.consultancy_id = true;
            showErrorBorder = true;
        }
        if (!activityParams.client_id || !activityParams.client_id.trim().length) {
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
        const { activityParams } = this.state;
        if (this.validate()) {
            await this.props.addActivity(activityParams);
            ToastMsg(this.props.activityReducer.addActivityData.message, "info");
            if (this.props.activityReducer.addActivityData.success) {
                history.push("/activity");
            }
        }
    };

    editActivity = async () => {
        const { activityParams } = this.state;
        if (this.validate()) {
            await this.props.editActivity(activityParams, activityParams.id);
            ToastMsg(this.props.activityReducer.editActivityData.message, "info");
            if (this.props.activityReducer.editActivityData.success) {
                history.push("/activity");
            }
        }
    };

    render() {
        const { binderIdList, activityParams, isEdit, showErrorBorder, errorParams } = this.state;
        return (
            <>
                <section class="cont-ara act-main">
                    <div class="list-area">
                        <ToastContainer />
                        <TopSlider />
                        <div class="lst-bt-nav create">
                            <div class="table table-ara">
                                <div class="list-sec">
                                    <div class="nav-ara">
                                        <div class="head">
                                            <h4>Activity</h4>
                                        </div>
                                        <div class="pagenation">
                                            <ul>
                                                <li>
                                                    <a>Home </a>
                                                </li>
                                                <li class="active">
                                                    <a>Activity</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="activity">
                                    {isEdit ? (
                                        <div class="itm">
                                            <div class="form-group">
                                                <label>Code</label>
                                                <input type="text" class="form-control" placeholder="" value={activityParams.code} disabled="true" />
                                            </div>
                                        </div>
                                    ) : null}
                                    <div class="itm">
                                        <div class="form-group">
                                            <label className={showErrorBorder && errorParams.consultancy_id ? "text-red" : ""}>Cosultancy *</label>
                                            <div class="custom-selecbox">
                                                <select
                                                    className="custom-selecbox form-control"
                                                    value={activityParams.consultancy_id}
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
                                    <div class="itm">
                                        <div class="form-group">
                                            <label className={showErrorBorder && errorParams.client_id ? "text-red" : ""}>Client *</label>
                                            <div class="custom-selecbox">
                                                <select
                                                    className="custom-selecbox form-control"
                                                    value={activityParams.client_id}
                                                    onChange={e => {
                                                        this.setState({
                                                            activityParams: {
                                                                ...activityParams,
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
                                    <div class="itm">
                                        <div class="form-group">
                                            <label>Activity Type</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder=" "
                                                value={activityParams.activity_type}
                                                onChange={e =>
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
                                                            activity_type: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div class="itm">
                                        <div class="form-group">
                                            <label>Display Order</label>
                                            <input
                                                type="number"
                                                min="0"
                                                class="form-control"
                                                placeholder=" "
                                                value={activityParams.display_order}
                                                onChange={e =>
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
                                                            display_order: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div class="itm">
                                        <div class="form-group">
                                            <label>Reference</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder=" "
                                                value={activityParams.reference}
                                                onChange={e =>
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
                                                            reference: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div class="itm wid-50">
                                        <div class="form-group">
                                            <label>Activity Description</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder=" "
                                                value={activityParams.activity_description}
                                                onChange={e =>
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
                                                            activity_description: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div class="itm">
                                        <div class="form-group">
                                            <label>Activity text</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder=" "
                                                value={activityParams.activity_text}
                                                onChange={e =>
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
                                                            activity_text: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div class="itm">
                                        <div class="form-group">
                                            <label>Activity Tooltip</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder=" "
                                                value={activityParams.activity_tooltip}
                                                onChange={e =>
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
                                                            activity_tooltip: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div class="itm">
                                        <div class="form-group">
                                            <label>Frequency</label>
                                            <button class="btn btn-frqy" onClick={() => this.toggleShowFrequencyModal()}>
                                                Set Frequency
                                            </button>
                                        </div>
                                    </div>
                                    <div class="itm">
                                        <div class="form-group">
                                            <label>Completion Threshold</label>
                                            <input
                                                type="number"
                                                min="0"
                                                class="form-control"
                                                placeholder=" "
                                                value={activityParams.completion_threshold}
                                                onChange={e =>
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
                                                            completion_threshold: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div class="itm">
                                        <div class="form-group">
                                            <label>Email Threshold</label>
                                            <input
                                                type="number"
                                                min="0"
                                                class="form-control"
                                                placeholder=" "
                                                value={activityParams.email_threshold}
                                                onChange={e =>
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
                                                            email_threshold: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div class="itm">
                                        <div class="form-group">
                                            <label>Code Reference</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder=" "
                                                value={activityParams.code_reference}
                                                onChange={e =>
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
                                                            code_reference: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div class="itm">
                                        <div class="form-group">
                                            <label>Code Reference Tooltip</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder=" "
                                                value={activityParams.code_reference_tooltip}
                                                onChange={e =>
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
                                                            code_reference_tooltip: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div class="itm">
                                        <div class="form-group">
                                            <label>Quarterly View</label>
                                            <select
                                                className="custom-selecbox form-control"
                                                value={activityParams.quarterly_view}
                                                onChange={e =>
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
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
                                    <div class="itm">
                                        <div class="form-group">
                                            <label>Edit form</label>
                                            <select
                                                className="custom-selecbox form-control"
                                                value={activityParams.edit_form}
                                                onChange={e =>
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
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
                                    <div class="itm">
                                        <div class="form-group">
                                            <label>Default Total Devices</label>
                                            <input
                                                type="number"
                                                min="0"
                                                class="form-control"
                                                placeholder=" "
                                                value={activityParams.default_total_devices}
                                                onChange={e =>
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
                                                            default_total_devices: e.target.value
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div class="itm">
                                        <div class="form-group calendar">
                                            <label>Valid From</label>
                                            <DatePicker
                                                className="form-control"
                                                onChange={value => {
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
                                                            start_date: value
                                                        }
                                                    });
                                                }}
                                                value={activityParams.start_date && new Date(activityParams.start_date)}
                                            />
                                        </div>
                                    </div>
                                    <div class="itm">
                                        <div class="form-group calendar">
                                            <label>Valid To</label>
                                            <DatePicker
                                                className="form-control"
                                                onChange={value => {
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
                                                            end_date: value
                                                        }
                                                    });
                                                }}
                                                value={activityParams.end_date && new Date(activityParams.end_date)}
                                            />
                                        </div>
                                    </div>
                                    <div class="itm">
                                        <div class="form-group calendar">
                                            <label className={showErrorBorder && errorParams.binder_id ? "text-red" : ""}>Binder *</label>
                                            <div class="custom-selecbox">
                                                <select
                                                    className="custom-selecbox form-control"
                                                    value={activityParams.binder_id}
                                                    onChange={e =>
                                                        this.setState({
                                                            activityParams: {
                                                                ...activityParams,
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
                                            <div class="itm">
                                                <div class="form-group calendar">
                                                    <label>Created At</label>
                                                    <input
                                                        type="text"
                                                        disabled="true"
                                                        value={activityParams.created_at}
                                                        class="form-control"
                                                        placeholder=" "
                                                    />
                                                    <div class="icon" data-toggle="modal" data-target="#myModal">
                                                        <img src="/images/calendar-gray.svg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="itm">
                                                <div class="form-group calendar">
                                                    <label>Updated At</label>
                                                    <input
                                                        type="text"
                                                        disabled="true"
                                                        value={activityParams.updated_at}
                                                        class="form-control"
                                                        placeholder=" "
                                                    />
                                                    <div class="icon" data-toggle="modal" data-target="#myModal">
                                                        <img src="/images/calendar-gray.svg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    ) : null}
                                </div>
                                <div class="btn-sec">
                                    <button class="btn btn-cncl-back mr-2" onClick={() => history.push("/activity")}>
                                        <i class="material-icons tic"> close</i>Cancel
                                    </button>
                                    {isEdit ? (
                                        <button class="btn btn-create" onClick={() => this.editActivity()}>
                                            <i class="material-icons tic"> check</i> Update Activity
                                        </button>
                                    ) : (
                                        <button class="btn btn-create" onClick={() => this.addActivity()}>
                                            <i class="material-icons tic"> check</i> Add Activity
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.renderFrequencyModal()}
                </section>
            </>
        );
    }
}

const mapStateToProps = state => {
    const { activityReducer, settingsCommonReducer } = state;
    return { activityReducer, settingsCommonReducer };
};

export default connect(mapStateToProps, { ...actions, ...commonActions })(addActivity);
