import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

import CommonRow from "./CommonRow";
import CommonTableHeader from "./CommonTableHeader";

class CommonTable extends Component {
    render() {
        const { viewItem, deleteItem, editItem, tableData } = this.props;
        return (
            <React.Fragment>
                <ReactTooltip place="top" type="info" effect="solid" />
                <table class="table table-bordered">
                    <thead>
                        <CommonTableHeader config={tableData.config} keys={tableData.keys} />
                    </thead>
                    <tbody>
                        {tableData.data.map((item, index) => (
                            <CommonRow
                                config={tableData.config}
                                keys={tableData.keys}
                                key={index}
                                viewItem={viewItem}
                                editItem={editItem}
                                deleteItem={deleteItem}
                                rowData={item}
                            />
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default CommonTable;
