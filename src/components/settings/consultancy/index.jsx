import React, { Component } from "react";
import { connect } from "react-redux";

import actions from "../consultancy/actions";
import TopSlider from "../../../components/common/components/TopSlider";
import history from "../../../config/history";
import ToastMsg from "../../common/ToastMessage";
import CommonTable from "../../../components/common/components/CommonTable";
import TableTopHeader from "../../../components/common/components/TableTopHeader";
import Pagination from "../../../components/common/components/Pagination";
import { consultancyTableData } from "../../../config/tableConfig";
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

    addItem = async item => {
        this.props.history.push("/addConsultancy");
    };

    render() {
        const { tableData } = this.state;
        return (
            <section className="cont-ara">
                <div class="list-area">
                    <TopSlider />
                    <div class="lst-bt-nav">
                        <div class="table table-ara">
                            <TableTopHeader entity={"Consultancy"} addItem={this.addItem} />
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
                        <Pagination />
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    const { consultancyReducer } = state;
    return { consultancyReducer };
};

export default connect(mapStateToProps, { ...actions })(index);
