/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
// import "../../../assets/css/list.css";
import history from "../../../config/history";
import ToastMsg from "../../common/ToastMessage";
import CommonTable from "../../../components/common/components/CommonTable";
import TableTopHeader from "../../../components/common/components/TableTopHeader";
import Pagination from "../../../components/common/components/Pagination";
import { regionTableData } from "../../../config/tableConfig";

const mapStateToProps = state => {
    console.log("state", state);
    const { regionReducer } = state;
    return { regionReducer };
};

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regionDataList: [],
            tableData: regionTableData
        };
    }

    async componentDidMount() {
        await this.setState({
            tableData: regionTableData
        });
        await this.getRegion();
    }

    getRegion = async () => {
        let params = {
            limit: 10,
            offset: 0
        };
        await this.props.getRegion(params);
        const { tableData } = this.state;
        if (this.props.regionReducer.regionData.success) {
            this.setState({
                tableData: {
                    ...tableData,
                    data: this.props.regionReducer.regionData.regions
                }
            });
        }
    };

    deleteItem = async item => {
        let id = item.id;
        await this.props.deleteRegion(id);
        await this.getRegion();
        ToastMsg(this.props.regionReducer.deleteRegionData.message, "info");
    };

    viewItem = async item => {
        const { tableData } = this.state;
        history.push("/region/basicdetails", {
            clientid: item.client.id,
            consultancy_id: item.consultancy.id,
            item: item,
            keys: tableData.keys,
            config: tableData.config
        });
    };

    editItem = async item => {
        history.push("/editRegion", {
            regionItem: item,
            clientid: item.client.id,
            consultancy_id: item.consultancy.id
        });
    };

    addItem = async item => {
        this.props.history.push("/addRegion");
    };

    render() {
        const { tableData } = this.state;
        return (
            <section className="cont-ara">
                <div class="list-area">
                    <TopSlider />
                    <div class="lst-bt-nav">
                        <div class="table table-ara">
                            <TableTopHeader entity={"Region"} addItem={this.addItem} />
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

export default connect(mapStateToProps, { ...actions })(index);
