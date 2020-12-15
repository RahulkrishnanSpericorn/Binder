import React, { Component } from "react";
import { connect } from "react-redux";

import history from "../../../config/history";
import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import ToastMsg from "../../common/ToastMessage";
import CommonTable from "../../../components/common/components/CommonTable";
import TableTopHeader from "../../../components/common/components/TableTopHeader";
import Pagination from "../../../components/common/components/Pagination";
import { siteTableData } from "../../../config/tableConfig";

const mapStateToProps = state => {
    const { siteReducer } = state;
    return { siteReducer };
};
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            siteDataList: [],
            tableData: siteTableData
        };
    }

    async componentDidMount() {
        await this.setState({
            tableData: siteTableData
        });
        await this.getSites();
    }

    getSites = async () => {
        let params = {
            limit: 10,
            offset: 0
        };
        await this.props.getSites(params);
        const { tableData } = this.state;
        if (this.props.siteReducer.siteData.success) {
            this.setState({
                tableData: {
                    ...tableData,
                    data: this.props.siteReducer.siteData.sites
                }
            });
        }
    };

    deleteItem = async item => {
        let id = item.id;
        await this.props.deleteSite(id);
        await this.getSites();
        ToastMsg(this.props.siteReducer.deleteSiteData.message, "info");
    };

    viewItem = async item => {
        const { tableData } = this.state;
        history.push("/site/basicdetails", {
            client_id: item.client.id,
            consultancy_id: item.consultancy.id,
            region_id: item.region.id,
            item: item,
            keys: tableData.keys,
            config: tableData.config
        });
    };

    editItem = async item => {
        history.push("/editSite", {
            siteItem: item,
            client_id: item.client.id,
            consultancy_id: item.consultancy.id,
            region_id: item.region.id
        });
    };

    addItem = async item => {
        history.push("/addSite");
    };

    render() {
        const { tableData } = this.state;
        return (
            <section className="cont-ara">
                <div class="list-area">
                    <TopSlider />
                    <div class="lst-bt-nav">
                        <div class="table table-ara">
                            <TableTopHeader entity={"Site"} addItem={this.addItem} />
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
