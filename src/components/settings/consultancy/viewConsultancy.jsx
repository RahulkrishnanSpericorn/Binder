import React, { Component } from "react";
import history from "../../../config/history";
import CommonView from "../../common/components/CommonView";

class viewConsultancy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabData: [{ label: "Basic Details", path: "/viewConsultancy" }]
        };
    }

    componentDidMount = async () => {
        this.setState({
            tabData: [{ label: "Basic Details", path: "/viewConsultancy" }]
        });
    };

    goBack = () => {
        history.push("/consultancy");
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

export default viewConsultancy;
