import React, { Component } from "react";

import Breadcrumb from "./Breadcrumb";
import history from "../../../config/history";

class CommonViewTabs extends Component {
    render() {
        const { item, keys, config, tabData = [] } = this.props;
        return (
            <div className="top-slider nav-ara">
                <div className="tab-sec">
                    <ul className="nav nav-tabs">
                        {tabData.map((tabItem, index) => (
                            <li
                                key={index}
                                className="cursor-pointer active"
                                onClick={() => history.push(tabItem.path, { item: item, keys: keys, config: config })}
                            >
                                <span>{tabItem.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <Breadcrumb /> */}
            </div>
        );
    }
}

export default CommonViewTabs;
