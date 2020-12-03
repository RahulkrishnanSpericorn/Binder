import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../../../config/history";
import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import commonActions from "../actions";
import { ToastContainer } from "react-toastify";
import ToastMsg from "../../common/ToastMessage";
class viewRegion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            comments: "",
            nameErrorMsg: false,
            commentsErrorMsg: false,
            consultancyErrorMsg: false,
            clientErrorMsg: false,
            display_name: "",
            consultancy_id: "",
            client_id: "",
            consultancyIdList: [],
            clientIdList: [],
            region_id: ""
        };
    }

    async componentDidMount() {
        await this.props.getConsultancyDropdown();
        await this.setState({
            consultancyIdList: this.props.settingsCommonReducer.consultancyDropdownData.data,
            name: this.props.history.location.state.regionItem.name,
            display_name: this.props.history.location.state.regionItem.display_name,
            region_id: this.props.history.location.state.regionItem.id,
            consultancy_id: this.props.history.location.state.consultancy_id,
            client_id: this.props.history.location.state.clientid,
            comments: this.props.history.location.state.regionItem.comments
        });
        let params = {
            consultancy_id: this.state.consultancy_id
        };
        this.getClientDropdownByConsultId(params);
    }

    getClientDropdownByConsultId = async params => {
        await this.props.getClientDropdown(params);
        await this.setState({
            clientIdList: this.props.settingsCommonReducer.clientDropdownData.data
        });
    };

    editRegion = async () => {
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
        if (this.state.name != "" && this.state.consultancy_id != "" && this.state.client_id != "") {
            let params = {
                name: this.state.name,
                comments: this.state.comments,
                display_name: this.state.display_name,
                consultancy_id: this.state.consultancy_id,
                client_id: this.state.client_id
            };
            let id = this.state.region_id;
            await this.props.editRegionById(params, id);
            ToastMsg(this.props.regionReducer.editRegionData.message, "info");
            if (this.props.regionReducer.editRegionData.message === "Region updated successfully") {
                history.push("/regions");
            }
        }
    };

    selectConsultancyId = async e => {
        await this.setState({ consultancy_id: e.target.value, consultancyErrorMsg: false });

        let params = {
            consultancy_id: this.state.consultancy_id
        };
        this.getClientDropdownByConsultId(params);
    };

    backToRegion = () => {
        history.push("/regions");
    };

    render() {
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
                                        Floors
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#img">
                                        Images
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#map">
                                        Map
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="pagenation">
                            <ul>
                                <li>
                                    <a href="#">Region </a>
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
                                <div className="top-ara">
                                    <h4>View Region</h4>
                                </div>

                                <div className="head">
                                    <h3>Basic Info</h3>
                                </div>
                                <div className="frm sav">
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
                                                    Region Name *
                                                </label>
                                                <h3>{this.state.name}</h3>
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
                                                <h3>{this.state.display_name}</h3>
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
                                                {this.state.consultancyIdList.length &&
                                                    this.state.consultancyIdList.map((item, idex) => {
                                                        return <h3> {item.name} </h3>;
                                                    })}
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
                                                {this.state.clientIdList.length &&
                                                    this.state.clientIdList.map((item, idex) => {
                                                        return <h3 value={item.id}> {item.name} </h3>;
                                                    })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">05</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group select-group">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Client User
                                                </label>
                                                <h3>-</h3>
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
                                                    Consultancy User
                                                </label>
                                                <h3>Consultancy User</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">07</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Comments
                                                </label>
                                                <h3>{this.state.comments}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="frm btn-sec">
                                    <button onClick={() => this.backToRegion()} className="btn btn-submit">
                                        {" "}
                                        <i className="material-icons tic"> check</i>Go Back{" "}
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

const mapStateToProps = state => {
    const { regionReducer, settingsCommonReducer } = state;
    return { regionReducer, settingsCommonReducer };
};

export default connect(mapStateToProps, { ...actions, ...commonActions })(viewRegion);
