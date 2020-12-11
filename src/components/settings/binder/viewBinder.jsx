import React, { Component } from "react";
import history from "../../../config/history";
import CommonView from "../../common/components/CommonView";

class viewBinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabData: []
        };
    }

    componentDidMount = async () => {
        this.setState({
            tabData: [
                { label: "Basic Details", path: "/binder/basicdetails", key: "basicdetails" },
                { label: "Activities", path: "/binder/activities", key: "activities" },
                { label: "Images", path: "/binder/images", key: "images" }
            ]
        });
    };

    goBack = () => {
        history.push("/binders");
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

export default viewBinder;
