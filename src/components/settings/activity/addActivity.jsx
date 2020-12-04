import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";

import TopSlider from "../../common/components/TopSlider";
import commonActions from "../actions";
import ToastMsg from "../../common/ToastMessage";
import history from "../../../config/history";
import actions from "./actions";

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
            }
        };
    }

    async componentDidMount() {
        await this.props.getConsultancyDropdown();
        await this.setState({
            consultancyIdList: this.props.settingsCommonReducer.consultancyDropdownData.data
        });
    }

    getBinderDropDown = async client_id => {
        await this.props.getBinderDropdown({ client_id });
        await this.setState({
            binderIdList: this.props.settingsCommonReducer.binderDropdownData.data
        });
    };

    selectConsultancyId = async consultancy_id => {
        const { activityParams } = this.state;
        await this.setState({
            activityParams: {
                ...activityParams,
                consultancy_id
            }
        });
        await this.props.getClientDropdown({ consultancy_id });
        await this.setState({
            clientIdList: this.props.settingsCommonReducer.clientDropdownData.data
        });
    };

    addActivity = async () => {
        const { activityParams } = this.state;
        await this.props.addActivity(activityParams);
        console.log("this.props.activityReducer", this.props.activityReducer);
        ToastMsg(this.props.activityReducer.addActivityData.message, "info");
        if (this.props.activityReducer.addActivityData.message === "Activity created successfully") {
            history.push("/activity");
        }
    };

    render() {
        const { binderIdList, activityParams } = this.state;
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
                                    <div class="itm">
                                        <div class="form-group">
                                            <label>Cosultancy</label>
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
                                            <label>Client</label>
                                            <div class="custom-selecbox">
                                                <select
                                                    className="custom-selecbox form-control"
                                                    value={this.state.client_id}
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
                                            <button class="btn btn-frqy">Set Frequency</button>
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
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder=" "
                                                value={activityParams.quarterly_view}
                                                onChange={e =>
                                                    this.setState({
                                                        activityParams: {
                                                            ...activityParams,
                                                            quarterly_view: e.target.value
                                                        }
                                                    })
                                                }
                                            />
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
                                                value={activityParams.start_date}
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
                                                value={activityParams.end_date}
                                            />
                                        </div>
                                    </div>
                                    <div class="itm">
                                        <div class="form-group calendar">
                                            <label>Binder</label>
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
                                </div>
                                <div class="btn-sec">
                                    <button class="btn btn-cncl-back mr-2">
                                        <i class="material-icons tic"> close</i>Cancel
                                    </button>
                                    <button class="btn btn-create" onClick={() => this.addActivity()}>
                                        <i class="material-icons tic"> check</i> Add Activity
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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
