import React, { Component } from "react";

class CommonRow extends Component {
    componentDidMount = () => {};

    renderCellData = (type, data) => {
        let returnData = data;
        switch (type) {
            case "string":
                returnData = data;
                break;
            case "date":
                returnData = data;
                break;
            default:
                returnData = data;
                break;
        }
        return returnData;
    };

    render() {
        const { viewItem, editItem, deleteItem, rowData, keys, config } = this.props;
        return (
            <tr onDoubleClick={() => viewItem(rowData)}>
                <td class="img-sq-box cursor-pointer" onClick={() => viewItem(rowData)}>
                    <img src="/images/table-blue-dots.svg" alt="" />
                </td>
                {keys &&
                    keys.map((keyItem, i) => {
                        return config && config[keyItem] && config[keyItem].isVisible ? (
                            <td class="">{this.renderCellData(config[keyItem].type, rowData[keyItem])}</td>
                        ) : null;
                    })}
                <td class="action">
                    <img src="/images/three-dots.svg" data-toggle="dropdown" alt="" />
                    <ul class="dropdown-menu" role="menu">
                        <li>
                            <span onClick={() => editItem(rowData)}>
                                <img src="/images/edit.svg" alt="" />
                                Edit
                            </span>
                        </li>
                        <li>
                            <span onClick={() => deleteItem(rowData)}>
                                <img src="/images/delete.svg" alt="" />
                                Delete
                            </span>
                        </li>
                    </ul>
                </td>
            </tr>
        );
    }
}

export default CommonRow;
