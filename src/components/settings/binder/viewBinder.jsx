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

class viewBinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            binderItem: {},
            consultancy_id: null,
            client_id: null
        };
    }

    componentDidMount = () => {
        this.setState({
            binderItem: this.props.history.location.state.binderItem || {},
            consultancy_id: this.props.history.location.state.consultancy_id || null,
            client_id: this.props.history.location.state.client_id || null
        });
    };

    backToBinder = () => {
        history.push("/binder");
    };

    render() {
        const { binderItem } = this.state;
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
                                        Activity
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
                                    <a href="#">Binder </a>
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
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">01</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Binder Name
                                                </label>
                                                <h3>{binderItem.name || "-"}</h3>
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
                                                <h3>{binderItem.display_name || "-"}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">03</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group select-group">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Consultancy
                                                </label>
                                                <h3>{(binderItem.consultancy && binderItem.consultancy.name) || "-"}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">04</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group select-group">
                                                <label className="form-control-placeholder" for="f-name">
                                                    Client
                                                </label>
                                                <h3>{(binderItem.client && binderItem.client.name) || "-"}</h3>
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
                                                <h3>-</h3>
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
                                                    Color
                                                </label>
                                                <h3>{binderItem.color || "-"}</h3>
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
                                                    Text Color
                                                </label>
                                                <h3>{binderItem.text_color || "-"}</h3>
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
                                                    Line
                                                </label>
                                                <h3>{binderItem.line || "-"}</h3>
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
                                                    Order
                                                </label>
                                                <h3>{binderItem.order || "-"}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="frm btn-sec">
                                    <button onClick={() => this.backToBinder()} className="btn btn-submit">
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

export default connect(mapStateToProps, { ...actions, ...commonActions })(viewBinder);
