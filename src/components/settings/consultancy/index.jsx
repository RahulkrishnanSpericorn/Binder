import React, { Component } from "react";
import { connect } from "react-redux";

import actions from "../consultancy/actions";
import TopSlider from "../../../components/common/components/TopSlider";
import history from "../../../config/history";
import ToastMsg from "../../common/ToastMessage";
import CommonTable from "../../../components/common/components/CommonTable";
import { consultancyTableData } from "../../../config/tableConfig";

const mapStateToProps = state => {
    console.log("state", state);
    const { consultancyReducer } = state;
    return { consultancyReducer };
};

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consultancyList: [],
            tableData: consultancyTableData
        };
    }

    componentDidMount = async () => {
        await this.setState({
            tableData: consultancyTableData
        });
        await this.getConsultancies();
    };

    getConsultancies = async () => {
        let params = {
            limit: 10,
            offset: 0
        };
        const { tableData } = this.state;
        await this.props.getConsultancies(params);
        if (this.props.consultancyReducer.consultanciesData.success) {
            this.setState({
                tableData: {
                    ...tableData,
                    data: this.props.consultancyReducer.consultanciesData.consultancies
                }
            });
        }
    };

    deleteItem = async item => {
        let id = item.id;
        await this.props.deleteConsultancy(id);
        await this.getConsultancies();
        ToastMsg("Consultancy " + this.props.consultancyReducer.deleteConsultancyById.message, "info");
    };

    viewItem = async item => {
        history.push("/viewConsultancy", { consultancyItem: item });
    };

    editItem = async item => {
        history.push("/editConsultancy", { consultancyItem: item });
    };

    render() {
        const { tableData } = this.state;
        return (
            <section className="cont-ara">
                <div class="list-area">
                    <TopSlider />
                    <div class="lst-bt-nav">
                        <div class="table table-ara">
                            <div class="top-fil-ara">
                                <div class="cap">
                                    <h4>Consultancy</h4>
                                </div>

                                <div class="btn-ara">
                                    <button class="btn btn-top">
                                        <img src="/images/color-wheel.svg" alt="" />
                                        Icon & color info
                                    </button>
                                    <button class="btn btn-top">
                                        <img src="/images/export.svg" alt="" />
                                        Export EXL
                                    </button>
                                    <button class="btn btn-top">
                                        <img src="/images/mail.svg" alt="" />
                                        Email
                                    </button>
                                    <button class="btn btn-top">
                                        <img src="/images/colmns.svg" alt="" />
                                        Column Window
                                    </button>
                                    <button class="btn btn-top">
                                        <img src="/images/reset-column.svg" alt="" />
                                        Reset Columns
                                    </button>
                                </div>

                                <div class="sr-sec">
                                    <form>
                                        <input type="text" class="form-control" placeholder="Search" />
                                        <button type="submit" class="btn btn-search">
                                            <img src="/images/serach.svg" alt="" />
                                        </button>
                                    </form>
                                </div>
                                <div class="fil-btn">
                                    <button
                                        class="btn btn-add"
                                        onClick={() => {
                                            this.props.history.push("/addConsultancy");
                                        }}
                                    >
                                        <span class="icon">
                                            <img src="/images/add-new-region.svg" alt="" />
                                        </span>
                                        Add New Consultancy
                                    </button>
                                </div>
                            </div>

                            <div class="list-sec">
                                <div class="table-section">
                                    <CommonTable
                                        viewItem={this.viewItem}
                                        deleteItem={this.deleteItem}
                                        editItem={this.editItem}
                                        tableData={tableData}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="fot-nav">
                            <ul class="pagnation">
                                <li class="active">
                                    <a href="#">01</a>
                                </li>
                                <li>
                                    <a href="#">02</a>
                                </li>
                                <li>
                                    <a href="#">03</a>
                                </li>
                            </ul>
                            <ul class="pagnation prv-nxt">
                                <li>
                                    <a href="#" class="prv">
                                        <img src="/images/lft-arrow.svg" /> Prev
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nxt">
                                        Next <img src="/images/rgt-arrow.svg" />
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

export default connect(mapStateToProps, { ...actions })(index);
