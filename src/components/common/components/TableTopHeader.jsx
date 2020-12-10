import React, { Component } from "react";

class TableTopheader extends Component {
    componentDidMount = () => {};

    render() {
        const { entity, addItem } = this.props;
        return (
            <div class="top-fil-ara">
                <div class="cap">
                    <h4>{entity}</h4>
                </div>
                <div class="btn-ara">
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
                <div class="sr-sec">
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
        );
    }
}

export default TableTopheader;
