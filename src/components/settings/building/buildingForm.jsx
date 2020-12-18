import React, { Component } from "react";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import { ToastContainer } from "react-toastify";
import { Multiselect } from "multiselect-react-dropdown";

import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import commonActions from "../actions";
import ToastMsg from "../../common/ToastMessage";
import history from "../../../config/history";
import Breadcrumb from "../../common/components/Breadcrumb";

class editBuilding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consultancyIdList: [],
            binderIdList: [],
            clientIdList: [],
            regionIdList: [],
            siteIdList: [],

            siteErrorMsg: false,
            consultancyErrorMsg: false,
            clientErrorMsg: false,
            regionErrorMsg: false,
            nameErrorMsg: false,
            buildingParams: {
                name: null,
                display_name: null,
                zip_code: null,
                city: null,
                state: null,
                year: null,
                country: null,
                ownership: null,
                ownership_type: null,
                use: null,
                area: null,
                number: null,
                cost: null,
                enterprise_index: null,
                manager: null,
                street: null,
                ministry: null,
                description: null,
                comments: null,
                building_id: null
            },
            errorParams: {
                name: false,
                consultancy_id: false,
                client_id: false,
                region_id: false,
                site_id: false
            },
            selectedBinders: [],

            showErrorBorder: false,
            isEdit: false
        };
    }

    componentDidMount = async () => {
        await this.props.getConsultancyDropdown();
        await this.setState({
            consultancyIdList: this.props.settingsCommonReducer.consultancyDropdownData.data
        });
        if (this.props.history.location.state && this.props.history.location.state.buildingItem) {
            let tempBuildingParam = this.props.history.location.state.buildingItem;
            tempBuildingParam.region_id = tempBuildingParam.region.id;
            tempBuildingParam.site_id = tempBuildingParam.site.id;
            tempBuildingParam.client_id = tempBuildingParam.client.id;
            tempBuildingParam.consultancy_id = tempBuildingParam.consultancy.id;

            this.getBinderDropDown(this.props.history.location.state.client_id);
            this.getClientDropdown(this.props.history.location.state.consultancy_id);
            this.getRegionDropdown(this.props.history.location.state.client_id);
            this.getSiteDropdown(this.props.history.location.state.region_id);
            await this.setState({
                buildingParams: tempBuildingParam,
                isEdit: true,
                selectedBinders: tempBuildingParam.binders
            });
        }
    };

    getBinderDropDown = async client_id => {
        await this.props.getBinderDropdown({ client_id });
        await this.setState({
            binderIdList: this.props.settingsCommonReducer.binderDropdownData.data
        });
        return true;
    };

    getClientDropdown = async consultancy_id => {
        await this.props.getClientDropdown({ consultancy_id });
        await this.setState({
            clientIdList: this.props.settingsCommonReducer.clientDropdownData.data
        });
    };

    getRegionDropdown = async client_id => {
        await this.props.getRegionDropdown({ client_id });
        await this.setState({
            regionIdList: this.props.settingsCommonReducer.regionDropdownData.data
        });
    };

    getSiteDropdown = async region_id => {
        await this.props.getSitesDropdown({ region_id });
        await this.setState({
            siteIdList: this.props.settingsCommonReducer.siteDropdownData.data
        });
    };

    selectConsultancyId = async value => {
        const { buildingParams } = this.state;
        await this.setState({
            buildingParams: {
                ...buildingParams,
                consultancy_id: value
            }
        });
        this.getClientDropdown(value);
    };

    selectClientId = async value => {
        const { buildingParams } = this.state;
        await this.setState({
            buildingParams: {
                ...buildingParams,
                client_id: value
            }
        });
        this.getRegionDropdown(value);
        this.getBinderDropDown(value);
    };

    selectRegionId = async value => {
        const { buildingParams } = this.state;
        await this.setState({
            buildingParams: {
                ...buildingParams,
                region_id: value
            }
        });
        this.getSiteDropdown(value);
    };

    validate = () => {
        const { buildingParams } = this.state;
        let errorParams = {
            name: false,
            consultancy_id: false,
            client_id: false,
            region_id: false,
            site_id: false,
            binder_id: false
        };
        let showErrorBorder = false;
        if (!buildingParams.name || !buildingParams.name.trim().length) {
            errorParams.name = true;
            showErrorBorder = true;
        }
        if (!buildingParams.binder_ids || !buildingParams.binder_ids.length) {
            errorParams.binder_ids = true;
            showErrorBorder = true;
        }
        if (!buildingParams.consultancy_id || !buildingParams.consultancy_id.trim().length) {
            errorParams.consultancy_id = true;
            showErrorBorder = true;
        }
        if (!buildingParams.client_id || !buildingParams.client_id.trim().length) {
            errorParams.client_id = true;
            showErrorBorder = true;
        }
        if (!buildingParams.region_id || !buildingParams.region_id.trim().length) {
            errorParams.region_id = true;
            showErrorBorder = true;
        }
        if (!buildingParams.site_id || !buildingParams.site_id.trim().length) {
            errorParams.site_id = true;
            showErrorBorder = true;
        }
        this.setState({
            showErrorBorder,
            errorParams
        });

        if (showErrorBorder) return false;
        return true;
    };

    editBuilding = async () => {
        const { buildingParams } = this.state;
        if (this.validate()) {
            await this.props.editBuilding({ building: buildingParams }, buildingParams.id);
            ToastMsg(this.props.buildingReducer.editBuildingData.message, "info");
            if (this.props.buildingReducer.editBuildingData.success) {
                history.push("/buildings");
            }
        }
    };

    addBuilding = async () => {
        const { buildingParams } = this.state;
        if (this.validate()) {
            await this.props.addBuilding({ building: buildingParams });
            ToastMsg(this.props.buildingReducer.addBuildingData.message, "info");
            if (this.props.buildingReducer.addBuildingData.success) {
                history.push("/buildings");
            }
        }
    };

    onBinderSelect = async selectedList => {
        const { buildingParams } = this.state;
        let tempBinderList = [];
        selectedList.map(item => tempBinderList.push(item.id));
        await this.setState({
            buildingParams: {
                ...buildingParams,
                binder_ids: tempBinderList
            },
            selectedBinders: selectedList
        });
    };

    onBinderRemove = async selectedList => {
        const { buildingParams } = this.state;
        let tempBinderList = [];
        selectedList.map(item => tempBinderList.push(item.id));
        await this.setState({
            buildingParams: {
                ...buildingParams,
                binder_ids: tempBinderList
            },
            selectedBinders: selectedList
        });
    };

    render() {
        const {
            isEdit,
            buildingParams,
            showErrorBorder,
            errorParams,
            consultancyIdList,
            clientIdList,
            regionIdList,
            siteIdList,
            binderIdList,
            selectedBinders
        } = this.state;
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
                                        <h4>{isEdit ? "Edit" : "Add"} Building</h4>
                                    </div>
                                    {/* <Breadcrumb /> */}
                                </div>
                            </div>
                            <div className="form-area">
                                <div className="head">
                                    <h3>Basic Info</h3>
                                </div>
                                {isEdit ? (
                                    <div className="itm">
                                        <div className="form-group">
                                            <label>Code</label>
                                            <input type="text" className="form-control" placeholder="" value={buildingParams.code} disabled={true} />
                                        </div>
                                    </div>
                                ) : null}
                                <div className="itm">
                                    <div className="form-group">
                                        <label className={`${showErrorBorder && errorParams.name ? "text-red " : ""}form-control-placeholder`}>
                                            Building Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={buildingParams.name}
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        name: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Building Name"
                                        />
                                    </div>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label
                                            className={`${showErrorBorder && errorParams.consultancy_id ? "text-red " : ""}form-control-placeholder`}
                                        >
                                            Consultancy *
                                        </label>
                                        <div className="custom-selecbox">
                                            <select
                                                className="custom-selecbox form-control"
                                                value={buildingParams.consultancy_id}
                                                onChange={e => this.selectConsultancyId(e.target.value)}
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
                                    <div className="form-group">
                                        <label className={`${showErrorBorder && errorParams.client_id ? "text-red " : ""}form-control-placeholder`}>
                                            Client *
                                        </label>
                                        <div className="custom-selecbox">
                                            <select
                                                className="form-control custom-selecbox"
                                                value={buildingParams.client_id}
                                                onChange={e => {
                                                    this.selectClientId(e.target.value);
                                                }}
                                            >
                                                <option value="">Select</option>
                                                {clientIdList &&
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
                                    <div className="form-group">
                                        <label className={`${showErrorBorder && errorParams.region_id ? "text-red " : ""}form-control-placeholder`}>
                                            Region *
                                        </label>
                                        <div className="custom-selecbox">
                                            <select
                                                className="form-control custom-selecbox"
                                                value={buildingParams.region_id}
                                                onChange={e => {
                                                    this.selectRegionId(e.target.value);
                                                }}
                                            >
                                                <option value="">Select</option>
                                                {regionIdList.length &&
                                                    regionIdList.map((item, idex) => {
                                                        return <option value={item.id}> {item.name} </option>;
                                                    })}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="form-group">
                                        <label className={`${showErrorBorder && errorParams.site_id ? "text-red " : ""}form-control-placeholder`}>
                                            Site *
                                        </label>
                                        <div className="custom-selecbox">
                                            <select
                                                className="form-control custom-selecbox"
                                                value={buildingParams.site_id}
                                                onChange={e => {
                                                    this.setState({
                                                        buildingParams: {
                                                            ...buildingParams,
                                                            site_id: e.target.value
                                                        }
                                                    });
                                                }}
                                            >
                                                <option value="">Select</option>
                                                {siteIdList.length &&
                                                    siteIdList.map((item, idex) => {
                                                        return <option value={item.id}> {item.name} </option>;
                                                    })}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Display Name</label>
                                        <input
                                            type="text"
                                            value={buildingParams.display_name}
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        display_name: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Display Name "
                                            list="builiding"
                                            name="builiding"
                                        />
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Description</label>
                                        <input
                                            type="text"
                                            value={buildingParams.description}
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        description: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Description "
                                        />
                                    </div>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Building Number</label>
                                        <input
                                            type="text"
                                            value={buildingParams.number}
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        number: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Building Number"
                                            list="buildigNumber"
                                            name="buildigNumber"
                                        />
                                    </div>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Consultancy Users</label>
                                        <div className="custom-selecbox">
                                            <select className="form-control custom-selecbox">
                                                <option value="">Select</option>
                                                <option value="">CU 1</option>
                                                <option value="">CU 2</option>
                                                <option value="">CU 3</option>
                                                <option value="">CU 4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Client Users</label>
                                        <div className="custom-selecbox">
                                            <select className="form-control custom-selecbox">
                                                <option value="">Select</option>
                                                <option value="">CL_U 1</option>
                                                <option value="">CL_U 2</option>
                                                <option value="">CL_U 3</option>
                                                <option value="">CL_U 4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className={`${showErrorBorder && errorParams.binder_ids ? "text-red " : ""}form-control-placeholder`}>
                                            Associated Binders *
                                        </label>
                                        <div className="custom-selecbox">
                                            <Multiselect
                                                options={binderIdList}
                                                selectedValues={selectedBinders}
                                                onSelect={this.onBinderSelect}
                                                onRemove={this.onBinderRemove}
                                                displayValue="name"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="head mt-4">
                                    <h3>More Info</h3>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Area (Sq)</label>
                                        <NumberFormat
                                            value={parseInt(buildingParams.area)}
                                            thousandSeparator={true}
                                            decimalScale={0}
                                            className="form-control"
                                            placeholder="Enter Area (Sq)"
                                            onValueChange={values => {
                                                const { value } = values;
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        area: value
                                                    }
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Cost</label>
                                        <NumberFormat
                                            value={buildingParams.cost}
                                            thousandSeparator={true}
                                            decimalScale={0}
                                            className="form-control"
                                            placeholder="Enter Cost"
                                            prefix={buildingParams.cost && buildingParams.cost.length ? "$ " : ""}
                                            onValueChange={values => {
                                                const { value } = values;
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        cost: value
                                                    }
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Enterprice Index</label>
                                        <input
                                            type="text"
                                            value={buildingParams.enterprise_index}
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        enterprise_index: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Enterprice Index "
                                        />
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Ownership</label>
                                        <input
                                            type="text"
                                            value={buildingParams.ownership}
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        ownership: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Ownership "
                                        />
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Ownership Type</label>
                                        <input
                                            type="text"
                                            value={buildingParams.ownership_type}
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        ownership_type: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Ownership Type"
                                        />
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Use</label>
                                        <input
                                            type="text"
                                            value={buildingParams.use}
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        use: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Use "
                                        />
                                    </div>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Manager</label>
                                        <input
                                            type="text"
                                            value={buildingParams.manager}
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        manager: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Manager "
                                        />
                                    </div>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Year Built</label>
                                        <NumberFormat
                                            value={buildingParams.year}
                                            thousandSeparator={false}
                                            className="form-control"
                                            placeholder="Enter Year Built"
                                            format="####"
                                            onValueChange={values => {
                                                const { value } = values;
                                                if (parseInt(value.length) < 5) {
                                                    this.setState({
                                                        buildingParams: {
                                                            ...buildingParams,
                                                            year: parseInt(value)
                                                        }
                                                    });
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Ministry</label>
                                        <input
                                            type="text"
                                            value={buildingParams.ministry}
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        ministry: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Ministry "
                                        />
                                    </div>
                                </div>

                                <div className="head mt-4">
                                    <h3>Address</h3>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Street</label>
                                        <input
                                            type="text"
                                            value={buildingParams.street}
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        street: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter Street "
                                        />
                                    </div>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">City</label>
                                        <input
                                            type="text"
                                            value={buildingParams.city}
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        city: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter City "
                                        />
                                    </div>
                                </div>
                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">State</label>
                                        <input
                                            type="text"
                                            value={buildingParams.state}
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        state: e.target.value
                                                    }
                                                });
                                            }}
                                            className="form-control"
                                            placeholder="Enter State "
                                        />
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Country</label>
                                        <input
                                            type="text"
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        country: e.target.value
                                                    }
                                                });
                                            }}
                                            value={buildingParams.country}
                                            className="form-control"
                                            placeholder="Enter Country"
                                        />
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Zip Code</label>
                                        <NumberFormat
                                            value={buildingParams.zip_code}
                                            thousandSeparator={false}
                                            className="form-control"
                                            placeholder="Zipcode"
                                            format="######"
                                            onValueChange={values => {
                                                const { value } = values;
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        zip_code: value
                                                    }
                                                });
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="form-group">
                                        <label className="form-control-placeholder">Comments</label>
                                        <input
                                            type="text"
                                            onChange={e => {
                                                this.setState({
                                                    buildingParams: {
                                                        ...buildingParams,
                                                        comments: e.target.value
                                                    }
                                                });
                                            }}
                                            value={buildingParams.comments}
                                            className="form-control"
                                            placeholder="Enter Comments "
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="btn-sec">
                                <button className="btn btn-cncl-back mr-2" onClick={() => history.push("/buildings")}>
                                    <i className="material-icons tic"> close</i>Cancel
                                </button>
                                {isEdit ? (
                                    <button className="btn btn-create" onClick={() => this.editBuilding()}>
                                        <i className="material-icons tic"> check</i> Update Building
                                    </button>
                                ) : (
                                    <button className="btn btn-create" onClick={() => this.addBuilding()}>
                                        <i className="material-icons tic"> check</i> Add Building
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

const mapStateToProps = state => {
    const { buildingReducer, settingsCommonReducer } = state;
    return { buildingReducer, settingsCommonReducer };
};

export default connect(mapStateToProps, { ...actions, ...commonActions })(editBuilding);
