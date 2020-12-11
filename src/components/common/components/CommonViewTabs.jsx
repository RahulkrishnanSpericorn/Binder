import React, { Component } from "react";

import Breadcrumb from "./Breadcrumb";

class CommonViewTabs extends Component {
    render() {
        const { tabData = [] } = this.props;
        return (
            <div class="top-slider nav-ara">
                <div class="tab-sec">
                    <ul class="nav nav-tabs">
                        {tabData.map((tabItem, index) => (
                            <li key={index} class="active">
                                <span>{tabItem.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Breadcrumb />
            </div>
        );
    }
}

export default CommonViewTabs;
