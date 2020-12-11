import React, { Component } from "react";
import history from "../../../config/history";
import CommonView from "../../common/components/CommonView";

class viewActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabData: []
        };
    }

    componentDidMount = async () => {
        this.setState({
            tabData: [
                { label: "Basic Details", path: "/activity/basicdetails", key: "basicdetails" },
                { label: "Procedures", path: "/activity/procedures", key: "procedures" },
                { label: "Images", path: "/activity/images", key: "images" }
            ]
        });
    };

    goBack = () => {
        history.push("/activities");
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

export default viewActivity;
