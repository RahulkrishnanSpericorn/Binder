import React, { Component } from "react";

class Breadcrumb extends Component {
    render() {
        return (
            <div class="pagenation">
                <ul>
                    <li>
                        <span>Activity </span>
                    </li>

                    <li class="active">
                        <span>View Details </span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Breadcrumb;
