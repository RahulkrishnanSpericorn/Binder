import React, { Component } from "react";
import { connect } from "react-redux";
import TopSlider from "../../common/components/TopSlider";
import actions from "./actions";
import ToastMsg from "../../common/ToastMessage";
import history from "../../../config/history";

const mapStateToProps = state => {
    console.log("state", state);
    const { binderReducer } = state;
    return { binderReducer };
};

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            binderDataList: []
        };
    }

    async componentDidMount() {
        await this.getBinderData();
    }
    getBinderData = async () => {
        let params = {
            limit: 10,
            offset: 0
        };

        await this.props.getBinder(params);

        if (this.props.binderReducer.binderData.success) {
            this.setState({
                binderDataList: this.props.binderReducer.binderData.binders
            });
        }
    };

    deleteBinder = async item => {
        let id = item.id;

        await this.props.deleteBinder(id);
        await this.getBinderData();

        ToastMsg(this.props.binderReducer.deleteBinderData.message, "error");
    };

    render() {
        return (
            <section className="cont-ara">
                <div className="list-area">
                    <TopSlider />

                    <div className="lst-bt-nav">
                        <div className="table table-ara">
                            <div className="top-fil-ara">
                                <div className="cap">
                                    <h4>Binder</h4>
                                </div>

                                <div className="btn-ara">
                                    <button className="btn btn-top">
                                        <img src="/images/color-wheel.svg" />
                                        Icon & color info
                                    </button>
                                    <button className="btn btn-top">
                                        <img src="/images/export.svg" />
                                        Export EXL
                                    </button>
                                    <button className="btn btn-top">
                                        <img src="/images/mail.svg" />
                                        Email
                                    </button>
                                    <button className="btn btn-top">
                                        <img src="/images/colmns.svg" />
                                        Column Window
                                    </button>
                                    <button className="btn btn-top">
                                        <img src="/images/reset-column.svg" />
                                        Reset Columns
                                    </button>
                                </div>

                                <div className="sr-sec">
                                    <form>
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <button type="submit" className="btn btn-search">
                                            {" "}
                                            <img src="/images/serach.svg" />{" "}
                                        </button>
                                    </form>
                                </div>
                                <div className="fil-btn">
                                    <button
                                        className="btn btn-add"
                                        onClick={() => {
                                            this.props.history.push("/addBinder");
                                        }}
                                    >
                                        {" "}
                                        <span className="icon">
                                            {" "}
                                            <img src="/images/add-new-region.svg" />
                                        </span>
                                        Add New Binder
                                    </button>
                                </div>
                            </div>

                            <div className="list-sec">
                                <div className="table-section">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="img-sq-box">
                                                    <img src="/images/table-blue-dots.svg" />
                                                </th>
                                                <th className="">Binder Code</th>
                                                <th className="">Binder Name</th>
                                                <th className="">Display Name</th>
                                                <th className="">Consultancy</th>
                                                <th className="">Client</th>
                                                <th className="">Color</th>
                                                <th className="">Text Color</th>
                                                <th className="">Line</th>
                                                <th className="">Order</th>
                                                <th className="">Created At</th>
                                                <th className="">Updated At</th>
                                                <th className="action">
                                                    <img src="/images/three-dots.svg" />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.binderDataList.map((item, index) => {
                                                return (
                                                    <tr
                                                        onDoubleClick={() => {
                                                            history.push("/viewBinder", {
                                                                binderItem: item,
                                                                clientid: item.client.id,
                                                                consultancy_id: item.consultancy.id
                                                            });
                                                        }}
                                                    >
                                                        <td
                                                            className="img-sq-box cursor-pointer"
                                                            onClick={() => {
                                                                history.push("/viewBinder", {
                                                                    binderItem: item,
                                                                    clientid: item.client.id,
                                                                    consultancy_id: item.consultancy.id
                                                                });
                                                            }}
                                                        >
                                                            <img src="/images/table-blue-dots.svg" />
                                                        </td>
                                                        <td>{item.code}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.display_name ? item.display_name : "-"}</td>
                                                        <td>{item.consultancy.name}</td>
                                                        <td>{item.client.name}</td>
                                                        <td>{item.color ? item.color : "-"}</td>
                                                        <td>{item.text_color ? item.text_color : "-"}</td>
                                                        <td>{item.line ? item.line : "-"}</td>
                                                        <td>{item.order ? item.order : "-"}</td>
                                                        <td>{item.created_at}</td>
                                                        <td>{item.updated_at}</td>

                                                        <td className="action">
                                                            <img src="/images/three-dots.svg" data-toggle="dropdown" />
                                                            <ul className="dropdown-menu" role="menu">
                                                                <li>
                                                                    <a
                                                                        onClick={() =>
                                                                            history.push("/editBinder", {
                                                                                binderItem: item,
                                                                                consultancy_id: item.consultancy.id,
                                                                                client_id: item.client.id
                                                                            })
                                                                        }
                                                                    >
                                                                        <img src="/images/edit.svg" />
                                                                        Edit
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        onClick={() => {
                                                                            this.deleteBinder(item);
                                                                        }}
                                                                    >
                                                                        <img src="/images/delete.svg" />
                                                                        Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="fot-nav">
                            <ul className="pagnation">
                                <li className="active">
                                    <a href="#">01</a>
                                </li>
                                <li>
                                    <a href="#">02</a>
                                </li>
                                <li>
                                    <a href="#">03</a>
                                </li>
                            </ul>
                            <ul className="pagnation prv-nxt">
                                <li>
                                    <a href="#" className="prv">
                                        {" "}
                                        <img src="/images/lft-arrow.svg" /> Prev
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nxt">
                                        Next <img src="/images/rgt-arrow.svg" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps, { ...actions })(index);
