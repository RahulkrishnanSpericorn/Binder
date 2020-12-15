import React, { Component } from "react";

import Portal from "./Portal";
import FrequencyModel from "./FrequencyModel";
import ImageViewModal from "./ImageViewModal";
import { formatNumber, formatmoney } from "../../../config/utils";
import CommonViewTabs from "./CommonViewTabs";

class CommonView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFrequencyModal: false,
            showImageModal: false
        };
    }

    componentDidMount = () => {};

    renderFrequencyModal = () => {
        const { showFrequencyModal } = this.state;
        const { item } = this.props;
        if (!showFrequencyModal) return null;

        return (
            <Portal
                body={
                    <FrequencyModel
                        onCancel={this.toggleShowFrequencyModal}
                        setFrequencyData={this.setFrequencyData}
                        frequency={item.frequency}
                        test_frequency={item.test_frequency}
                        type={"view"}
                    />
                }
                onCancel={this.toggleShowFrequencyModal}
            />
        );
    };

    toggleShowFrequencyModal = () => {
        const { showFrequencyModal } = this.state;
        this.setState({
            showFrequencyModal: !showFrequencyModal
        });
    };

    renderImageModall = data => {
        const { showImageModal } = this.state;
        if (!showImageModal) return null;
        return <Portal body={<ImageViewModal onCancel={this.toggleShowImageModal} imgData={data} />} onCancel={this.toggleShowImageModal} />;
    };

    toggleShowImageModal = () => {
        const { showImageModal } = this.state;
        this.setState({
            showImageModal: !showImageModal
        });
    };

    renderData = (type, data) => {
        let returnData = data;
        switch (type) {
            case "string":
                returnData = <h3>{data || "-"}</h3>;
                break;
            case "date":
                returnData = <h3>{data || "-"}</h3>;
                break;
            case "object":
                returnData = <h3>{data.name || "-"}</h3>;
                break;
            case "boolean":
                returnData = <h3>{data === "true" || data === true ? "Yes" : "No"}</h3>;
                break;
            case "number":
                returnData = <h3>{data ? formatNumber(parseInt(data)) : "-"}</h3>;
                break;
            case "money":
                returnData = <h3>{data ? formatmoney(parseInt(data)) : "-"}</h3>;
                break;
            case "rrule":
                returnData = data ? (
                    <button className="btn btn-frqy" onClick={() => this.toggleShowFrequencyModal()}>
                        View Frequency
                    </button>
                ) : (
                    "-"
                );
                break;
            case "image":
                returnData =
                    data && data.url ? (
                        <h3 className="cursor-pointer" onClick={() => this.toggleShowImageModal()}>
                            {data.description || data.name}
                            {this.renderImageModall(data)}
                        </h3>
                    ) : (
                        <h3>-</h3>
                    );
                break;
            default:
                returnData = <h3>{data || "-"}</h3>;
                break;
        }
        return returnData;
    };

    render() {
        const { goBack, item, keys, config, tabData } = this.props;
        return (
            <section className="cont-ara">
                <div className="fst">
                    <CommonViewTabs tabData={tabData} goBack={goBack} item={item} keys={keys} config={config} />
                    <div className="dash-cont">
                        <div className="pub-ara six">
                            <div className="frm-ara three-col">
                                <div className="frm sav">
                                    {keys.map((keyItem, index) => (
                                        <div key={index} className="itm">
                                            <div className="cunt">
                                                <div className="numb">{index + 1}</div>
                                            </div>
                                            <div className="itm-cnt">
                                                <div className="form-group">
                                                    <label className="form-control-placeholder" htmlFor="f-name">
                                                        {config[keyItem].label}
                                                    </label>
                                                    {this.renderData(config[keyItem].type, item[keyItem])}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="frm btn-sec">
                                    <button onClick={() => goBack()} className="btn btn-submit">
                                        <i className="material-icons tic"> check</i>Go Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderFrequencyModal()}
            </section>
        );
    }
}

export default CommonView;
