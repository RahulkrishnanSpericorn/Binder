import React, { Component } from "react";
import { connect } from "react-redux";

import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import ToastMsg from "../../common/ToastMessage";
import history from "../../../config/history";
import CommonTable from "../../../components/common/components/CommonTable";
import TableTopHeader from "../../../components/common/components/TableTopHeader";
import Pagination from "../../../components/common/components/Pagination";
import { binderTableData } from "../../../config/tableConfig";
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            binderDataList: [],
            tableData: binderTableData
        };
    }

    componentDidMount = async () => {
        await this.setState({
            tableData: binderTableData
        });
        await this.getBinderData();
    };

    getBinderData = async () => {
        let params = {
            limit: 10,
            offset: 0
        };
        await this.props.getBinder(params);
        const { tableData } = this.state;
        if (this.props.binderReducer.binderData.success) {
            this.setState({
                tableData: {
                    ...tableData,
                    data: this.props.binderReducer.binderData.binders
                }
            });
        }
    };

    deleteItem = async item => {
        let id = item.id;
        await this.props.deleteBinder(id);
        await this.getBinderData();
        ToastMsg(this.props.binderReducer.deleteBinderData.message, "error");
    };

    viewItem = async item => {
        const { tableData } = this.state;
        history.push("/binder/basicdetails", {
            clientid: item.client.id,
            consultancy_id: item.consultancy.id,
            item: item,
            keys: tableData.keys,
            config: tableData.config
        });
    };

    editItem = async item => {
        history.push("/editBinder", {
            binderItem: item,
            consultancy_id: item.consultancy.id,
            client_id: item.client.id
        });
    };

    addItem = async () => {
        this.props.history.push("/addBinder");
    };

    render() {
        const { tableData } = this.state;
        return (
            <section className="cont-ara">
                <div class="list-area">
                    <TopSlider />
                    <div class="lst-bt-nav">
                        <div class="table table-ara">
                            <TableTopHeader entity={"Binder"} addItem={this.addItem} />
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
    const { binderReducer } = state;
    return { binderReducer };
};

export default connect(mapStateToProps, { ...actions })(index);
