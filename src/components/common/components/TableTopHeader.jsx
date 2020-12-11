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
            <div class="top-fil-ara title-btn-wrapper">
                <div class="cap">
                    <h4>{this.renderTitle(entity)}</h4>
                </div>
                <div className="right-cont">
                    <div class="btn-section-2">
                        <div class="btn-toggle">
                            <button class="btn btn-top active" title="Filter">
                                <img src="/images/filter.svg" class="mr-0" alt="" />{" "}
                            </button>
                            <button class="btn btn-top" title="Filter Clear">
                                <img src="/images/filter-cross.svg" class="mr-0" alt="" />
                            </button>
                        </div>
                        <button class="btn btn-top">
                            <img src="/images/color-wheel.svg" alt="" />
                            Icon & color info
                        </button>
                        <button class="btn btn-top">
                            <img src="/images/export.svg" alt="" />
                            Export EXL
                        </button>
                        <button class="btn btn-top">
                            <img src="/images/mail.svg" alt="" />
                            Email
                        </button>
                        <button class="btn btn-top">
                            <img src="/images/colmns.svg" alt="" />
                            Column Window
                        </button>
                        <button class="btn btn-top">
                            <img src="/images/reset-column.svg" alt="" />
                            Reset Columns
                        </button>
                    </div>
                    <div class="sr-sec search-section">
                        <input type="text" class="form-control" placeholder="Search" />
                        <button type="button" class="btn btn-search">
                            <img src="/images/serach.svg" alt="" />
                        </button>
                    </div>
                    <div class="fil-btn">
                        <button class="btn btn-add" onClick={() => addItem()}>
                            <span class="icon">
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
