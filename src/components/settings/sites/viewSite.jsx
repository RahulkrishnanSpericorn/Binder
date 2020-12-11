import React, { Component } from "react";
import history from "../../../config/history";
import CommonView from "../../common/components/CommonView";

class viewSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabData: []
        };
    }

    componentDidMount = async () => {
        this.setState({
            tabData: [
                { label: "Basic Details", path: "/site/basicdetails", key: "basicdetails" },
                { label: "Buildings", path: "/site/buildings", key: "buildings" },
                { label: "Images", path: "/site/images", key: "images" }
            ]
        });
    };

    goBack = () => {
        history.push("/sites");
    };

    render() {
        const {
            location: {
                state: { item, keys, config }
            }
        } = this.props;

        const { tabData } = this.state;
        return <CommonView item={item} keys={keys} config={config} goBack={this.goBack} tabData={tabData} />;
    }
}

export default viewSite;
