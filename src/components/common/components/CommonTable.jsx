import React, { Component } from "react";

import CommonRow from "./CommonRow";
import CommonTableHeader from "./CommonTableHeader";

class CommonTable extends Component {
    render() {
        const { viewItem, deleteItem, editItem, tableData } = this.props;
        console.log("tableData", tableData);
        return (
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
        );
    }
}

export default CommonTable;
