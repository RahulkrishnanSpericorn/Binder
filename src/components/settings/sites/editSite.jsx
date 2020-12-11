import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import ToastMsg from "../../common/ToastMessage";
import history from "../../../config/history";
import commonActions from "../actions";

const mapStateToProps = state => {
    console.log("state", state);
    const { siteReducer, settingsCommonReducer } = state;
    return { siteReducer, settingsCommonReducer };
};

class editSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            comments: "",
            nameErrorMsg: false,
            commentsErrorMsg: false,
            consultancyErrorMsg: false,
            clientErrorMsg: false,
            regionErrorMsg: false,
            display_name: "",
            consultancy_id: "",
            client_id: "",
            consultancyIdList: [],
            clientIdList: [],
            regionIdList: [],
            region_id: "",
            site_id: ""
        };
    }

    async componentDidMount() {
        await this.props.getConsultancyDropdown();
        await this.setState({
            consultancyIdList: this.props.settingsCommonReducer.consultancyDropdownData.data,

            name: this.props.history.location.state.siteItem.name,
            display_name: this.props.history.location.state.siteItem.display_name,
            region_id: this.props.history.location.state.region_id,
            consultancy_id: this.props.history.location.state.consultancy_id,
            client_id: this.props.history.location.state.client_id,
            comments: this.props.history.location.state.siteItem.comments,
            site_id: this.props.history.location.state.siteItem.id
        });

        let clientdpdnParam = {
            consultancy_id: this.state.consultancy_id
        };
        let regiondpdnParam = {
            client_id: this.state.client_id
        };
        this.getClientDataDropdown(clientdpdnParam);
        this.getRegionDataDropdown(regiondpdnParam);
    }

    getClientDataDropdown = async params => {
        await this.props.getClientDropdown(params);
        await this.setState({
            clientIdList: this.props.settingsCommonReducer.clientDropdownData.data
        });
    };
    getRegionDataDropdown = async params => {
        await this.props.getRegionDropdown(params);
        await this.setState({
            regionIdList: this.props.settingsCommonReducer.regionDropdownData.data
        });
    };

    editSite = async () => {
        console.log("this.state", this.state);
        if (this.state.name === "") {
            this.setState({
                nameErrorMsg: true
            });
        }
        if (this.state.consultancy_id === "") {
            this.setState({
                consultancyErrorMsg: true
            });
        }
        if (this.state.client_id === "") {
            this.setState({
                clientErrorMsg: true
            });
        }
        if (this.state.region_id === "") {
            this.setState({
                regionErrorMsg: true
            });
        }

        if (this.state.name !== "" && this.state.consultancy_id !== "" && this.state.client_id !== "" && this.state.region_id !== "") {
            let params = {
                consultancy_id: this.state.consultancy_id,
                name: this.state.name,
                comments: this.state.comments,
                client_id: this.state.client_id,
                display_name: this.state.display_name,
                region_id: this.state.region_id
            };
            let id = this.state.site_id;
            await this.props.editSiteById(params, id);
            ToastMsg(this.props.siteReducer.editSiteData.message, "info");
            if (this.props.siteReducer.editSiteData.success) {
                history.push("/sites");
            }
        }
    };

    selectConsultancyId = async e => {
        await this.setState({ consultancy_id: e.target.value, consultancyErrorMsg: false });

        let params = {
            consultancy_id: this.state.consultancy_id
        };

        this.getClientDataDropdown(params);
    };

    selectClientId = async e => {
        await this.setState({ client_id: e.target.value, clientErrorMsg: false });
        let params = {
            client_id: this.state.client_id
        };
        this.getRegionDataDropdown(params);
    };

    render() {
        return (
            <section className="cont-ara">
                <div className="fst">
                    <ToastContainer />
                    <TopSlider />
                    <div className="dash-cont">
                        <div className="pub-ara six">
                            <div className="frm-ara">
                                <div className="top-ara">
                                    <h4>Edit Site</h4>
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
                                                    Site Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="text"
                                                    value={this.state.name}
                                                    onChange={e => {
                                                        this.setState({ name: e.target.value, nameErrorMsg: false });
                                                    }}
                                                    className="form-control"
                                                    placeholder="Enter Site Name"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">02</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Display Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="text"
                                                    value={this.state.display_name}
                                                    onChange={e => {
                                                        this.setState({ display_name: e.target.value });
                                                    }}
                                                    className="form-control"
                                                    placeholder="Enter Display Name"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">03</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group select-group">
                                                <label
                                                    className="form-control-placeholder"
                                                    style={{ color: this.state.consultancyErrorMsg && "red" }}
                                                    for="f-name"
                                                >
                                                    Consultancy *
                                                </label>
                                                <select
                                                    className="form-control select"
                                                    value={this.state.consultancy_id}
                                                    onChange={e => {
                                                        this.selectConsultancyId(e);
                                                    }}
                                                >
                                                    <option value="">Select</option>
                                                    {this.state.consultancyIdList.length &&
                                                        this.state.consultancyIdList.map((item, idex) => {
                                                            return <option value={item.id}> {item.name} </option>;
                                                        })}
                                                </select>
                                                {/* <input type="text-area" id="text"  className="form-control" placeholder=" " /> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">04</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group select-group">
                                                <label
                                                    className="form-control-placeholder"
                                                    style={{ color: this.state.clientErrorMsg && "red" }}
                                                    for="f-name"
                                                >
                                                    Client *
                                                </label>
                                                <select
                                                    className="form-control select"
                                                    value={this.state.client_id}
                                                    onChange={e => {
                                                        this.selectClientId(e);
                                                    }}
                                                >
                                                    <option value="">Select</option>
                                                    {this.state.clientIdList &&
                                                        this.state.clientIdList.map((item, idex) => {
                                                            return <option value={item.id}> {item.name} </option>;
                                                        })}
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
                                            <div className="form-group select-group">
                                                <label
                                                    className="form-control-placeholder"
                                                    style={{ color: this.state.regionErrorMsg && "red" }}
                                                    for="f-name"
                                                >
                                                    Region *
                                                </label>
                                                <select
                                                    className="form-control select"
                                                    value={this.state.region_id}
                                                    onChange={e => {
                                                        this.setState({ region_id: e.target.value, regionErrorMsg: false });
                                                    }}
                                                >
                                                    <option value="">Select</option>
                                                    {this.state.regionIdList.length &&
                                                        this.state.regionIdList.map((item, idex) => {
                                                            return <option value={item.id}> {item.name} </option>;
                                                        })}
                                                </select>
                                                {/* <input type="text-area" id="text"  className="form-control" placeholder=" " /> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">06</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group select-group">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Client User
                                                </label>
                                                <select className="form-control select">
                                                    <option value="">Select</option>
                                                    <option value="">Select</option>
                                                    <option value="">Select</option>
                                                    <option value="">Select</option>
                                                    <option value="">Select</option>
                                                    <option value="">Select</option>
                                                    <option value="">Select</option>
                                                    {/* {
                                                        this.state.clientIdList.length && this.state.clientIdList.map((item, idex) => {
                                                            return (
                                                                <option value={item.id}> {item.name} </option>
                                                            )
                                                        })
                                                    } */}
                                                </select>
                                                {/* <input type="text-area" id="text"  className="form-control" placeholder=" " /> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">07</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group select-group">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Consultancy User
                                                </label>
                                                <select className="form-control select">
                                                    <option value="">Select</option>
                                                    <option value="">Select</option>
                                                    <option value="">Select</option>
                                                    <option value="">Select</option>
                                                    {/* {
                                                        this.state.clientIdList.length && this.state.clientIdList.map((item, idex) => {
                                                            return (
                                                                <option value={item.id}> {item.name} </option>
                                                            )
                                                        })
                                                    } */}
                                                </select>
                                                {/* <input type="text-area" id="text"  className="form-control" placeholder=" " /> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">08</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Comments
                                                </label>
                                                <textarea
                                                    type="text-area"
                                                    value={this.state.comments}
                                                    onChange={e => {
                                                        this.setState({ comments: e.target.value, commentsErrorMsg: false });
                                                    }}
                                                    className="form-control"
                                                    placeholder="Enter Comments"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="frm btn-sec">
                                    <button onClick={() => this.editSite()} className="btn btn-submit">
                                        {" "}
                                        <i className="material-icons tic"> check</i>Update
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

export default connect(mapStateToProps, { ...actions, ...commonActions })(editSite);
