import React, { Component } from "react";

class TableTopheader extends Component {
    componentDidMount = () => {};

    renderTitle = entity => {
        let retVal = entity;
        if (entity[entity.length - 1] === "y") {
            retVal = entity.slice(0, -1) + "ies";
        } else {
            retVal = entity + "s";
        }
        return retVal;
    };

    render() {
        const { entity, addItem } = this.props;
        return (
            <div className="top-fil-ara title-btn-wrapper">
                <div className="cap">
                    <h4>{this.renderTitle(entity)}</h4>
                </div>
                <div className="right-cont">
                    <div className="btn-section-2">
                        <div className="btn-toggle">
                            <button className="btn btn-top active" title="Filter">
                                <img src="/images/filter.svg" className="mr-0" alt="" />{" "}
                            </button>
                            <button className="btn btn-top" title="Filter Clear">
                                <img src="/images/filter-cross.svg" className="mr-0" alt="" />
                            </button>
                        </div>
                        <button className="btn btn-top">
                            <img src="/images/color-wheel.svg" alt="" />
                            Icon & color info
                        </button>
                        <button className="btn btn-top">
                            <img src="/images/export.svg" alt="" />
                            Export EXL
                        </button>
                        <button className="btn btn-top">
                            <img src="/images/mail.svg" alt="" />
                            Email
                        </button>
                        <button className="btn btn-top">
                            <img src="/images/colmns.svg" alt="" />
                            Column Window
                        </button>
                        <button className="btn btn-top">
                            <img src="/images/reset-column.svg" alt="" />
                            Reset Columns
                        </button>
                    </div>
                    <div className="sr-sec search-section">
                        <input type="text" className="form-control" placeholder="Search" />
                        <button type="button" className="btn btn-search">
                            <img src="/images/serach.svg" alt="" />
                        </button>
                    </div>
                    <div className="fil-btn">
                        <button className="btn btn-add" onClick={() => addItem()}>
                            <span className="icon">
                                <img src="/images/add-new-region.svg" alt="" />
                            </span>
                            Add {entity}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableTopheader;
