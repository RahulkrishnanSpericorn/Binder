import React, { Component } from "react";
import history from "../../../config/history";
import CommonView from "../../common/components/CommonView";

class viewRegion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabData: []
        };
    }

    componentDidMount = async () => {
        this.setState({
            tabData: [
                { label: "Basic Details", path: "/region/basicdetails", key: "basicdetails" },
                { label: "Sites", path: "/region/sites", key: "sites" },
                { label: "Images", path: "/region/images", key: "images" }
            ]
        });
    };

    goBack = () => {
        history.push("/regions");
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

export default viewRegion;
