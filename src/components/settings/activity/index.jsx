import React, { Component } from "react";
import { connect } from "react-redux";
import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import ToastMsg from "../../common/ToastMessage";
import history from "../../../config/history";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            binderDataList: []
        };
    }

    componentDidMount = async () => {
        await this.getActivityData();
    };

    getActivityData = async () => {
        let params = {
            limit: 10,
            offset: 0
        };
        await this.props.getActivityList(params);
        if (this.props.activityReducer.getActivityListResponse.success) {
            this.setState({
                binderDataList: this.props.activityReducer.getActivityListResponse.activities
            });
        }
    };

    deleteActivity = async item => {
        let id = item.id;
        await this.props.deleteActivity(id);
        await this.getActivityData();
        ToastMsg(this.props.activityReducer.deleteActivityData.message, "error");
    };

    render() {
        return (
            <section className="cont-ara">
                <div className="list-area">
                    <TopSlider />
                    <div className="lst-bt-nav">
                        <div className="table table-ara">
                            <div className="top-fil-ara">
                                <div className="cap">
                                    <h4>Activity</h4>
                                </div>

                                <div className="btn-ara">
                                    <button className="btn btn-top">
                                        <img alt="" src="/images/color-wheel.svg" />
                                        Icon & color info
                                    </button>
                                    <button className="btn btn-top">
                                        <img alt="" src="/images/export.svg" />
                                        Export EXL
                                    </button>
                                    <button className="btn btn-top">
                                        <img alt="" src="/images/mail.svg" />
                                        Email
                                    </button>
                                    <button className="btn btn-top">
                                        <img alt="" src="/images/colmns.svg" />
                                        Column Window
                                    </button>
                                    <button className="btn btn-top">
                                        <img alt="" src="/images/reset-column.svg" />
                                        Reset Columns
                                    </button>
                                </div>

                                <div className="sr-sec">
                                    <form>
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <button type="submit" className="btn btn-search">
                                            {" "}
                                            <img alt="" src="/images/serach.svg" />{" "}
                                        </button>
                                    </form>
                                </div>
                                <div className="fil-btn">
                                    <button
                                        className="btn btn-add"
                                        onClick={() => {
                                            this.props.history.push("/addActivity");
                                        }}
                                    >
                                        <span className="icon">
                                            <img alt="" src="/images/add-new-region.svg" alt="" />
                                        </span>
                                        Add New Activity
                                    </button>
                                </div>
                            </div>

                            <div className="list-sec">
                                <div className="table-section">
                                    <table className="table table-bordered activity-table scroll-table">
                                        <thead>
                                            <tr>
                                                <th className="img-sq-box">
                                                    <img alt="" src="/images/table-blue-dots.svg" />
                                                </th>
                                                <th className="">Code</th>
                                                <th className="">Activity Type</th>
                                                <th className="">Binder</th>
                                                <th className="">Client</th>
                                                <th className="">Consultancy</th>
                                                <th className="">Display Order</th>
                                                <th className="">Reference</th>
                                                <th className="">Activity Description</th>
                                                <th className="">Activity text</th>
                                                <th className="">Activity Tooltip</th>
                                                <th className="">Interval Type</th>
                                                <th className="">Frequency</th>
                                                <th className="">Test Frequency</th>
                                                <th className="">Completion Threshold</th>
                                                <th className="">Email Threshold</th>
                                                <th className="">Code Reference</th>
                                                <th className="">Code Reference Tooltip</th>
                                                <th className="">Quarterly View</th>
                                                <th className="">Edit form</th>
                                                <th className="">Default Total Devices</th>
                                                <th className="">Valid From</th>
                                                <th className="">Valid To</th>
                                                <th className="">Created At</th>
                                                <th className="">Updated At</th>
                                                <th className="action">
                                                    <img alt="" src="/images/three-dots.svg" />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.binderDataList.map((item, index) => {
                                                return (
                                                    <tr
                                                        onDoubleClick={() => {
                                                            history.push("/viewActivity", {
                                                                activityItem: item,
                                                                clientid: item.client.id,
                                                                consultancy_id: item.consultancy.id
                                                            });
                                                        }}
                                                        className="cursor-pointer"
                                                    >
                                                        <td className="img-sq-box">
                                                            <img alt="" src="/images/table-blue-dots.svg" />
                                                        </td>
                                                        <td>{item.code || "-"}</td>
                                                        <td>{item.activity_type || "-"}</td>
                                                        <td>{item.binder.name || "-"}</td>
                                                        <td>{item.client.name || "-"}</td>
                                                        <td>{item.consultancy.name || "-"}</td>
                                                        <td>{item.display_order || "-"}</td>
                                                        <td>{item.reference || "-"}</td>
                                                        <td>{item.activity_description || "-"}</td>
                                                        <td>{item.activity_text || "-"}</td>
                                                        <td>{item.activity_tooltip || "-"}</td>
                                                        <td>{item.interval_type || "-"}</td>
                                                        <td>{item.frequency || "-"}</td>
                                                        <td>{item.test_frequency || "-"}</td>
                                                        <td>{item.completion_threshold || "-"}</td>
                                                        <td>{item.email_threshold || "-"}</td>
                                                        <td>{item.code_reference || "-"}</td>
                                                        <td>{item.code_reference_tooltip || "-"}</td>
                                                        <td>{item.quarterly_view || "-"}</td>
                                                        <td>{item.edit_form || "-"}</td>
                                                        <td>{item.default_total_devices || "-"}</td>
                                                        <td>{item.start_date || "-"}</td>
                                                        <td>{item.end_date || "-"}</td>
                                                        <td>{item.created_at || "-"}</td>
                                                        <td>{item.updated_at || "-"}</td>
                                                        <td className="action">
                                                            <img alt="" src="/images/three-dots.svg" data-toggle="dropdown" />
                                                            <ul className="dropdown-menu" role="menu">
                                                                <li
                                                                    onClick={e => {
                                                                        e.preventDefault();
                                                                        e.stopPropagation();
                                                                        history.push("/editActivity", {
                                                                            activityItem: item,
                                                                            consultancy_id: item.consultancy.id,
                                                                            client_id: item.client.id
                                                                        });
                                                                    }}
                                                                >
                                                                    <a>
                                                                        <img alt="" src="/images/edit.svg" />
                                                                        Edit
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    onClick={e => {
                                                                        e.preventDefault();
                                                                        e.stopPropagation();
                                                                        this.deleteActivity(item);
                                                                    }}
                                                                >
                                                                    <a>
                                                                        <img alt="" src="/images/delete.svg" />
                                                                        Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="fot-nav">
                            <ul className="pagnation">
                                <li className="active">
                                    <a>01</a>
                                </li>
                                <li>
                                    <a>02</a>
                                </li>
                                <li>
                                    <a>03</a>
                                </li>
                            </ul>
                            <ul className="pagnation prv-nxt">
                                <li>
                                    <a className="prv">
                                        {" "}
                                        <img alt="" src="/images/lft-arrow.svg" /> Prev
                                    </a>
                                </li>
                                <li>
                                    <a className="nxt">
                                        Next <img alt="" src="/images/rgt-arrow.svg" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    const { activityReducer } = state;
    return { activityReducer };
};

export default connect(mapStateToProps, { ...actions })(index);
