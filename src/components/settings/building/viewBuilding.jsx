import React, { Component } from "react";
import history from "../../../config/history";
import CommonView from "../../common/components/CommonView";

class viewBuilding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabData: []
        };
    }

    componentDidMount = async () => {
        this.setState({
            tabData: [
                { label: "Basic Details", path: "/building/basicdetails", key: "basicdetails" },
                { label: "Floors", path: "/building/floors", key: "floors" },
                { label: "Images", path: "/building/images", key: "images" }
            ]
        });
    };

    goBack = () => {
        history.push("/buildings");
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

export default viewBuilding;
