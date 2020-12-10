import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../../../config/history";
import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import ToastMsg from "../../common/ToastMessage";
import CommonTable from "../../../components/common/components/CommonTable";
import TableTopHeader from "../../../components/common/components/TableTopHeader";
import Pagination from "../../../components/common/components/Pagination";
import { buildingTableData } from "../../../config/tableConfig";
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buildingDataList: [],
            tableData: buildingTableData
        };
    }
    componentDidMount = async () => {
        await this.setState({
            tableData: buildingTableData
        });
        await this.getBuildingData();
    };

    getBuildingData = async () => {
        await this.props.getBuildingData();
        const { tableData } = this.state;
        if (this.props.buildingReducer.buildingData.success) {
            this.setState({
                tableData: {
                    ...tableData,
                    data: this.props.buildingReducer.buildingData.buildings
                }
            });
        }
    };

    deleteBuilding = async item => {
        let id = item.id;
        await this.props.deleteBuilding(id);
        await this.getBuildingData();
        ToastMsg(this.props.buildingReducer.deleteBuildingData.message, "info");
    };

    viewItem = async item => {
        history.push("/viewBuilding", {
            buildingItem: item,
            clientid: item.client.id,
            consultancy_id: item.consultancy.id
        });
    };

    editItem = async item => {
        history.push("/editBuilding", {
            buildingItem: item,
            client_id: item.client.id,
            consultancy_id: item.consultancy.id,
            region_id: item.region.id,
            site_id: item.site.id
        });
    };

    addItem = async () => {
        this.props.history.push("/addBuilding");
    };

    render() {
        const { tableData } = this.state;
        return (
            <section className="cont-ara">
                <div class="list-area">
                    <TopSlider />
                    <div class="lst-bt-nav">
                        <div class="table table-ara">
                            <TableTopHeader entity={"Building"} addItem={this.addItem} />
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
    const { buildingReducer } = state;
    return { buildingReducer };
};

export default connect(mapStateToProps, { ...actions })(index);
