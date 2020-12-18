import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import TopSlider from "../../common/components/TopSlider";
import commonActions from "../actions";
import ToastMsg from "../../common/ToastMessage";
import history from "../../../config/history";
import actions from "./actions";

const mapStateToProps = state => {
    const { binderReducer, settingsCommonReducer } = state;
    return { binderReducer, settingsCommonReducer };
};

class editBinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            binderParams: {
                name: null,
                comments: null,
                display_name: null,
                consultancy_id: null,
                client_id: null,
                color: null,
                text_color: null,
                line: null,
                order: null
            },
            errorParams: {
                name: false,
                consultancy_id: false,
                client_id: false
            },

            binderId: null,
            consultancyIdList: [],
            clientIdList: []
        };
    }

    async componentDidMount() {
        await this.props.getConsultancyDropdown();
        await this.setState({
            consultancyIdList: this.props.settingsCommonReducer.consultancyDropdownData.data
        });
        if (this.props.history.location.state && this.props.history.location.state.binderItem) {
            let tempBinderParam = this.props.history.location.state.binderItem;
            tempBinderParam.client_id = tempBinderParam.client.id;
            tempBinderParam.consultancy_id = tempBinderParam.consultancy.id;
            this.getClientDropdown(this.props.history.location.state.consultancy_id);
            await this.setState({
                binderParams: tempBinderParam,
                isEdit: true
            });
        }
    }

    getClientDropdown = async consultancy_id => {
        await this.props.getClientDropdown({ consultancy_id });
        await this.setState({
            clientIdList: this.props.settingsCommonReducer.clientDropdownData.data
        });
    };

    selectConsultancyId = async consultancy_id => {
        const { binderParams } = this.state;
        await this.setState({
            binderParams: {
                ...binderParams,
                consultancy_id
            }
        });
        this.getClientDropdown(consultancy_id);
    };

    validate = () => {
        const { binderParams } = this.state;
        let errorParams = {
            name: false,
            consultancy_id: false,
            client_id: false
        };
        let showErrorBorder = false;
        if (!binderParams.name || !binderParams.name.trim().length) {
            errorParams.name = true;
            showErrorBorder = true;
        }

        if (!binderParams.consultancy_id || !binderParams.consultancy_id.trim().length) {
            errorParams.consultancy_id = true;
            showErrorBorder = true;
        }
        if (!binderParams.client_id || !binderParams.client_id.trim().length) {
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

    editBinder = async () => {
        const { binderParams } = this.state;
        if (this.validate()) {
            await this.props.editBinder(binderParams, binderParams.id);
            ToastMsg(this.props.binderReducer.editBinderData.message, "info");
            if (this.props.binderReducer.editBinderData.success) {
                history.push("/binders");
            }
        }
    };

    addBinder = async () => {
        const { binderParams } = this.state;
        if (this.validate()) {
            await this.props.addBinder(binderParams);
            ToastMsg(this.props.binderReducer.addBinderData.message, "info");
            if (this.props.binderReducer.addBinderData.success) {
                history.push("/binders");
            }
        }
    };

    render() {
        const { binderParams, consultancyIdList, clientIdList, showErrorBorder, errorParams, isEdit } = this.state;
        return (
            <section className="cont-ara act-main">
                <div className="list-area">
                    <ToastContainer />
                    <TopSlider />
                    <div className="lst-bt-nav create">
                        <div className="table table-ara">
                            <div className="list-sec">
                                <div className="nav-ara">
                                    <div className="head">
                                        <h4>{isEdit ? "Edit" : "Add"} Binder</h4>
                                    </div>
                                    {/* <Breadcrumb /> */}
                                </div>
                            </div>
                            <div className="form-area">
                                {isEdit ? (
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Code</label>
                                            <input type="text" className="form-control" placeholder="" value={binderParams.code} disabled={true} />
                                        </div>
                                    </div>
                                ) : null}
                                <div className="itm">
                                    <div className="form-group">
                                        <label className={`${showErrorBorder && errorParams.name ? "text-red " : ""}form-control-placeholder`}>
                                            Binder Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="text"
                                            value={binderParams.name}
                                            onChange={e => {
                                                this.setState({
                                                    binderParams: {
                                                        ...binderParams,
                                                        name: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Binder Name"
                                        />
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Display Name</label>
                                        <input
                                            type="text"
                                            id="text"
                                            value={binderParams.display_name}
                                            onChange={e => {
                                                this.setState({
                                                    binderParams: {
                                                        ...binderParams,
                                                        display_name: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Display Name"
                                        />
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="form-group select-group">
                                        <label
                                            className={`${showErrorBorder && errorParams.consultancy_id ? "text-red " : ""}form-control-placeholder`}
                                        >
                                            Consultancy *
                                        </label>
                                        <div className="custom-selecbox">
                                            <select
                                                className="form-control custom-selecbox"
                                                value={binderParams.consultancy_id}
                                                onChange={e => {
                                                    this.selectConsultancyId(e.target.value);
                                                }}
                                            >
                                                <option value="">Select</option>
                                                {consultancyIdList.length &&
                                                    consultancyIdList.map((item, idex) => {
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
                                    <div className="form-group select-group">
                                        <label className={`${showErrorBorder && errorParams.client_id ? "text-red " : ""}form-control-placeholder`}>
                                            Client *
                                        </label>
                                        <div className="custom-selecbox">
                                            <select
                                                className="form-control custom-selecbox"
                                                value={binderParams.client_id}
                                                onChange={e => {
                                                    this.setState({
                                                        binderParams: {
                                                            ...binderParams,
                                                            client_id: e.target.value
                                                        }
                                                    });
                                                }}
                                            >
                                                <option value="">Select</option>
                                                {clientIdList.length &&
                                                    clientIdList.map((item, idex) => {
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
                                    <div className="form-group select-group">
                                        <label className="form-control-placeholder">Client User</label>
                                        <div className="custom-selecbox">
                                            <select className="form-control custom-selecbox">
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="form-group select-group">
                                        <label className="form-control-placeholder">Consultancy User</label>
                                        <div className="custom-selecbox">
                                            <select className="form-control custom-selecbox">
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Color</label>
                                        <input
                                            type="text"
                                            value={binderParams.color}
                                            onChange={e => {
                                                this.setState({
                                                    binderParams: {
                                                        ...binderParams,
                                                        color: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Color"
                                        />
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Text Color</label>
                                        <input
                                            type="text"
                                            value={binderParams.text_color}
                                            onChange={e => {
                                                this.setState({
                                                    binderParams: {
                                                        ...binderParams,
                                                        text_color: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Text Color"
                                        />
                                    </div>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Line</label>
                                        <input
                                            type="number"
                                            value={binderParams.line}
                                            onChange={e => {
                                                this.setState({
                                                    binderParams: {
                                                        ...binderParams,
                                                        line: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Line"
                                        />
                                    </div>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Order</label>
                                        <input
                                            type="number"
                                            value={binderParams.order}
                                            onChange={e => {
                                                this.setState({
                                                    binderParams: {
                                                        ...binderParams,
                                                        order: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Order"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="btn-sec">
                                <button className="btn btn-cncl-back mr-2" onClick={() => history.push("/binders")}>
                                    <i className="material-icons tic"> close</i>Cancel
                                </button>
                                {isEdit ? (
                                    <button className="btn btn-create" onClick={() => this.editBinder()}>
                                        <i className="material-icons tic"> check</i> Update Binder
                                    </button>
                                ) : (
                                    <button className="btn btn-create" onClick={() => this.addBinder()}>
                                        <i className="material-icons tic"> check</i> Add Binder
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps, { ...actions, ...commonActions })(editBinder);
