import React, { Component } from "react";

class CommonTableHeader extends Component {
    render() {
        const { config, keys } = this.props;
        return (
            <tr>
                <th className="img-sq-box">
                    <img src="/images/table-blue-dots.svg" alt="" />
                </th>
                {keys &&
                    keys.map((keyItem, i) => {
                        return config && config[keyItem] && config[keyItem].isVisible ? (
                            <th className="" key={i}>
                                {config[keyItem].label}
                            </th>
                        ) : null;
                    })}
                <th className="action">
                    <img src="/images/three-dots.svg" alt="" />
                </th>
            </tr>
        );
    }
}

export default CommonTableHeader;
