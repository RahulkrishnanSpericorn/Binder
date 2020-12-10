import React, { Component } from "react";

class Pagination extends Component {
    componentDidMount = () => {};

    render() {
        return (
            <div className="fot-nav">
                <ul className="pagnation">
                    <li className="active">
                        <span>01</span>
                    </li>
                    <li>
                        <span>02</span>
                    </li>
                    <li>
                        <span>03</span>
                    </li>
                </ul>
                <ul className="pagnation prv-nxt">
                    <li>
                        <span className="prv">
                            <img src="/images/lft-arrow.svg" alt="" /> Prev
                        </span>
                    </li>
                    <li>
                        <span className="nxt">
                            Next <img src="/images/rgt-arrow.svg" alt="" />
                        </span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Pagination;
