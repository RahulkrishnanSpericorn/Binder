import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import history from "../../../config/history";
import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import ToastMsg from "../../common/ToastMessage";
import _ from "lodash";

const mapStateToProps = state => {
    const { consultancyReducer } = state;
    return { consultancyReducer };
};

class addConsultancy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            comments: "",
            nameErrorMsg: false,
            commentsErrorMsg: false,
            image: null,
            image_description: ""
        };
    }

    addConsultancies = async () => {
        if (this.state.name === "") {
            this.setState({
                nameErrorMsg: true
            });
        }
        if (this.state.name !== "") {
            let params = new FormData();
            params.append("consultancy[name]", this.state.name);
            params.append("consultancy[comments]", this.state.comments);
            params.append("consultancy[image_description]", this.state.image_description);
            params.append("consultancy[image]", this.state.image);
            await this.props.addConsultancies(params);
            ToastMsg(this.props.consultancyReducer.addConsultanciesData.message, "info");
            this.setState({
                name: "",
                comments: ""
            });
            if (this.props.consultancyReducer.addConsultanciesData.success) {
                history.push("/consultancy");
            }
        }
    };

    handleAddAttachment = async e => {
        await this.setState({
            image: e.target.files[0]
        });
    };

    render() {
        return (
            <section class="cont-ara">
                <div class="list-area">
                    <TopSlider />
                    <div class="lst-bt-nav create">
                        <div class="table table-ara">
                            <div class="list-sec">
                                <div class="nav-ara">
                                    <div class="head">
                                        <h4>Basic Details</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="cr-frm">
                                <div class="frm-ara">
                                    <div class="head">
                                        <h3>Add Consultancy info</h3>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-8 pr-0">
                                            <div class="row m-0">
                                                <div class="col-md-6 pl-0 mb-3">
                                                    <div class="form-group">
                                                        <label
                                                            className="form-control-placeholder"
                                                            style={{ color: this.state.nameErrorMsg && "red" }}
                                                            for="f-name"
                                                        >
                                                            Consultancy Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="text"
                                                            onChange={e => {
                                                                this.setState({ name: e.target.value, nameErrorMsg: false });
                                                            }}
                                                            className="form-control"
                                                            placeholder="Enter Consultancy Name"
                                                        />
                                                    </div>
                                                </div>

                                                <div class="col-md-6 pl-0 mb-3">
                                                    <div class="form-group">
                                                        <label className="form-control-placeholder" for="f-name">
                                                            Image Description
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="text"
                                                            onChange={e => {
                                                                this.setState({ image_description: e.target.value, nameErrorMsg: false });
                                                            }}
                                                            className="form-control"
                                                            placeholder="Enter Image Description"
                                                        />
                                                    </div>
                                                </div>

                                                <div class="col-md-12 pl-0">
                                                    <div class="form-group">
                                                        <label>Comments</label>
                                                        <textarea
                                                            type="text-area"
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
                                        <div class="col-md-4 pl-0">
                                            <div class="file-upload">
                                                {this.state.image ? (
                                                    <>
                                                        <img
                                                            src={this.state.image.url ? this.state.image.url : URL.createObjectURL(this.state.image)}
                                                        />
                                                    </>
                                                ) : (
                                                    <img src="/images/add-img.svg" />
                                                )}

                                                <div class="btn-upload">
                                                    <input
                                                        type="file"
                                                        // className="form-control"
                                                        id="attachmentFiles"
                                                        name="profilePic"
                                                        onChange={this.handleAddAttachment}
                                                    />
                                                    <img src="/images/add-btn.svg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-sec">
                                <button class="btn btn-cancel mr-2">Cancel</button>
                                <button class="btn btn-create" onClick={() => this.addConsultancies()}>
                                    <i class="material-icons tic"> check</i> Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps, { ...actions })(addConsultancy);
