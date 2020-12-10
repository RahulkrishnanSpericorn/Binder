import React, { Component } from "react";
import { connect } from "react-redux";

import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import ToastMsg from "../../common/ToastMessage";
import history from "../../../config/history";
import CommonTable from "../../../components/common/components/CommonTable";
import TableTopHeader from "../../../components/common/components/TableTopHeader";
import Pagination from "../../../components/common/components/Pagination";
import { activityTableData } from "../../../config/tableConfig";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            binderDataList: [],
            tableData: activityTableData
        };
    }

    componentDidMount = async () => {
        await this.setState({
            tableData: activityTableData
        });
        await this.getActivityData();
    };

    getActivityData = async () => {
        let params = {
            limit: 10,
            offset: 0
        };
        const { tableData } = this.state;
        await this.props.getActivityList(params);
        if (this.props.activityReducer.getActivityListResponse.success) {
            this.setState({
                tableData: {
                    ...tableData,
                    data: this.props.activityReducer.getActivityListResponse.activities
                }
            });
        }
    };

    deleteItem = async item => {
        let id = item.id;
        await this.props.deleteActivity(id);
        await this.getActivityData();
        ToastMsg(this.props.activityReducer.deleteActivityData.message, "error");
    };

    viewItem = async item => {
        history.push("/viewActivity", {
            activityItem: item,
            clientid: item.client.id,
            consultancy_id: item.consultancy.id
        });
    };

    editItem = async item => {
        history.push("/editActivity", {
            activityItem: item,
            consultancy_id: item.consultancy.id,
            client_id: item.client.id
        });
    };

    addItem = async () => {
        this.props.history.push("/addActivity");
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
    const { activityReducer } = state;
    return { activityReducer };
};

export default connect(mapStateToProps, { ...actions })(index);
