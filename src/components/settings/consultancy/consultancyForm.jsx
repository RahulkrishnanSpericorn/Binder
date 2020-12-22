import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import history from "../../../config/history";
import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import ToastMsg from "../../common/ToastMessage";

const mapStateToProps = state => {
    const { consultancyReducer } = state;
    return { consultancyReducer };
};

class editConsultancy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formParams: {
                name: "",
                comments: "",
                image: null,
                image_description: ""
            },
            errorParams: {
                name: false
            },
            isEdit: false,
            showErrorBorder: false
        };
    }

    componentDidMount = async () => {
        if (this.props.history.location.state && this.props.history.location.state.consultancyItem) {
            let tempFormParam = this.props.history.location.state.consultancyItem;
            await this.setState({
                formParams: tempFormParam,
                isEdit: true
            });
        }
    };

    validate = () => {
        const { formParams } = this.state;
        let errorParams = {
            name: false
        };
        let showErrorBorder = false;
        if (!formParams.name || !formParams.name.trim().length) {
            errorParams.name = true;
            showErrorBorder = true;
        }
        this.setState({
            showErrorBorder,
            errorParams
        });

        if (showErrorBorder) return false;
        return true;
    };

    updateConsultancies = async () => {
        const { formParams } = this.state;
        if (this.validate()) {
            let params = new FormData();
            params.append("consultancy[name]", formParams.name);
            params.append("consultancy[comments]", formParams.comments);
            params.append("consultancy[image_description]", formParams.image_description);
            params.append("consultancy[image]", formParams.image);
            await this.props.editConsultanciesById(params, formParams.id);
            ToastMsg(this.props.consultancyReducer.editConsultancyById.message, "info");
            if (this.props.consultancyReducer.editConsultancyById.success) {
                history.push("/consultancies");
            }
        }
    };

    addConsultancies = async () => {
        const { formParams } = this.state;
        if (this.validate()) {
            let params = new FormData();
            params.append("consultancy[name]", formParams.name);
            params.append("consultancy[comments]", formParams.comments);
            params.append("consultancy[image_description]", formParams.image_description);
            params.append("consultancy[image]", formParams.image);
            await this.props.addConsultancies(params);
            ToastMsg(this.props.consultancyReducer.addConsultanciesData.message, "info");
            if (this.props.consultancyReducer.addConsultanciesData.success) {
                history.push("/consultancies");
            }
        }
    };

    handleAddAttachment = async e => {
        const { formParams } = this.state;
        await this.setState({
            formParams: {
                ...formParams,
                image: e.target.files[0]
            }
        });
    };

    render() {
        const { formParams, isEdit, showErrorBorder, errorParams } = this.state;
        return (
            <section className="cont-ara">
                <div className="list-area">
                    <ToastContainer />
                    <TopSlider />
                    <div class="lst-bt-nav create">
                        <div class="table table-ara">
                            <div class="list-sec">
                                <div class="nav-ara">
                                    <div class="head">
                                        <h4>{isEdit ? "Edit" : "Add"} Consultancy </h4>
                                    </div>
                                </div>
                            </div>

                            <div class="cr-frm">
                                <div class="frm-ara">
                                    <div class="row">
                                        <div class="col-md-8 pr-0">
                                            <div class="row m-0">
                                                {isEdit ? (
                                                    <div class="col-md-6 pl-0 mb-3">
                                                        <div class="form-group">
                                                            <label className="form-control-placeholder">Code</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder=""
                                                                value={formParams.code}
                                                                disabled={true}
                                                            />
                                                        </div>
                                                    </div>
                                                ) : null}
                                                <div class="col-md-6 pl-0 mb-3">
                                                    <div class="form-group">
                                                        <label className={showErrorBorder && errorParams.name ? "text-red" : ""}>
                                                            Consultancy Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="text"
                                                            value={formParams.name}
                                                            onChange={e => {
                                                                this.setState({
                                                                    formParams: {
                                                                        ...formParams,
                                                                        name: e.target.value
                                                                    }
                                                                });
                                                            }}
                                                            className="form-control"
                                                            placeholder="Enter Consultancy Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 pl-0 mb-3">
                                                    <div class="form-group">
                                                        <label className="form-control-placeholder">Image Description</label>
                                                        <input
                                                            type="text"
                                                            id="text"
                                                            value={formParams.image_description}
                                                            onChange={e => {
                                                                this.setState({
                                                                    formParams: {
                                                                        ...formParams,
                                                                        image_description: e.target.value
                                                                    }
                                                                });
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
                                                            value={formParams.comments}
                                                            onChange={e => {
                                                                this.setState({
                                                                    formParams: {
                                                                        ...formParams,
                                                                        comments: e.target.value
                                                                    }
                                                                });
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
                                                {formParams.image && formParams.image.url === null ? (
                                                    <img src="/images/add-img.svg" alt="" />
                                                ) : formParams.image ? (
                                                    <>
                                                        <img
                                                            src={formParams.image.url ? formParams.image.url : URL.createObjectURL(formParams.image)}
                                                            alt=""
                                                        />
                                                    </>
                                                ) : (
                                                    <img src="/images/add-img.svg" alt="" />
                                                )}

                                                <div class="btn-upload">
                                                    <input type="file" id="attachmentFiles" name="profilePic" onChange={this.handleAddAttachment} />
                                                    <img src="/images/add-btn.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-sec">
                                <button className="btn btn-cncl-back mr-2" onClick={() => history.push("/consultancies")}>
                                    <i className="material-icons tic"> close</i>Cancel
                                </button>
                                {isEdit ? (
                                    <button className="btn btn-create" onClick={() => this.updateConsultancies()}>
                                        <i className="material-icons tic"> check</i> Update Activity
                                    </button>
                                ) : (
                                    <button className="btn btn-create" onClick={() => this.addConsultancies()}>
                                        <i className="material-icons tic"> check</i> Add Activity
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

export default connect(mapStateToProps, { ...actions })(editConsultancy);
