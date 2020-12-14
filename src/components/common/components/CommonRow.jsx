import React, { Component } from "react";
import { formatNumber, formatmoney } from "../../../config/utils";
class CommonRow extends Component {
    componentDidMount = () => {};

    renderCellData = (type, data) => {
        let returnData = data;
        switch (type) {
            case "string":
                returnData = data || "-";
                break;
            case "date":
                returnData = data || "-";
                break;
            case "object":
                returnData = data.name || "-";
                break;
            case "boolean":
                returnData = data === "true" || data === true ? "Yes" : "No";
                break;
            case "number":
                returnData = data ? formatNumber(parseInt(data)) : "-";
                break;
            case "money":
                returnData = data ? formatmoney(parseInt(data)) : "-";
                break;
            default:
                returnData = data || "-";
                break;
        }
        return returnData;
    };

    renderTooltipContent = (type, data) => {
        let renderData = this.renderCellData(type, data);
        if (renderData.length <= 25) {
            renderData = null;
        }
        return renderData;
    };

    render() {
        const { viewItem, editItem, deleteItem, rowData, keys, config } = this.props;
        return (
            <tr onDoubleClick={() => viewItem(rowData)}>
                <td className="img-sq-box cursor-pointer" onClick={() => viewItem(rowData)} title="View">
                    <img src="/images/table-blue-dots.svg" alt="" />
                </td>
                {keys &&
                    keys.map((keyItem, i) => {
                        return config && config[keyItem] && config[keyItem].isVisible ? (
                            <td className="">
                                {/* Rendering Cell Content */}
                                {this.renderCellData(config[keyItem].type, rowData[keyItem]).length > 25
                                    ? this.renderCellData(config[keyItem].type, rowData[keyItem]).substring(0, 25) + "..."
                                    : this.renderCellData(config[keyItem].type, rowData[keyItem])}

                                {/* Rendering Tooltip Content */}
                                {/* {this.renderTooltipContent(config[keyItem].type, rowData[keyItem]) ? (
                                    <span class="tooltiptext">{this.renderTooltipContent(config[keyItem].type, rowData[keyItem])}</span>
                                ) : null} */}
                            </td>
                        ) : null;
                    })}
                <td className="action">
                    <div className="action-col">
                        <img className="row-edit-icon" src="/images/edit.svg" alt="" onClick={() => editItem(rowData)} title="Edit" />
                        <img className="row-delete-icon" src="/images/delete.svg" alt="" onClick={() => deleteItem(rowData)} title="Delete" />
                    </div>
                </td>
            </tr>
        );
    }
}

export default CommonRow;
