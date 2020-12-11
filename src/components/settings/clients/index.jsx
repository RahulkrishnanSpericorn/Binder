import React, { Component } from "react";
import { connect } from "react-redux";

import history from "../../../config/history";
import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import ToastMsg from "../../common/ToastMessage";
import { clientTableData } from "../../../config/tableConfig";
import CommonTable from "../../../components/common/components/CommonTable";
import TableTopHeader from "../../../components/common/components/TableTopHeader";
import Pagination from "../../../components/common/components/Pagination";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientDataList: [],
            tableData: clientTableData
        };
    }

    async componentDidMount() {
        await this.setState({
            tableData: clientTableData
        });
        await this.getClients();
    }

    getClients = async () => {
        let params = {
            limit: 10,
            offset: 0
        };
        await this.props.getClients(params);
        const { tableData } = this.state;
        if (this.props.clientReducer.clientData.success) {
            this.setState({
                tableData: {
                    ...tableData,
                    data: this.props.clientReducer.clientData.clients
                }
            });
        }
    };

    deleteItem = async item => {
        let id = item.id;
        await this.props.deleteClient(id);
        await this.getClients();
        ToastMsg(this.props.clientReducer.deleteClientData.message, "info");
    };

    viewItem = async item => {
        const { tableData } = this.state;
        history.push("/client/basicdetails", { item: item, consultancy_id: item.consultancy.id, keys: tableData.keys, config: tableData.config });
    };

    editItem = async item => {
        history.push("/editCLients", { clientItem: item, consultancy_id: item.consultancy.id });
    };

    addItem = async item => {
        this.props.history.push("/addClients");
    };

    render() {
        const { tableData } = this.state;
        return (
            <section className="cont-ara">
                <div class="list-area">
                    <TopSlider />
                    <div class="lst-bt-nav">
                        <div class="table table-ara">
                            <TableTopHeader entity={"Client"} addItem={this.addItem} />
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
    console.log("state", state);
    const { clientReducer } = state;
    return { clientReducer };
};
export default connect(mapStateToProps, { ...actions })(index);
