import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopSlider from '../../common/components/TopSlider';
import actions from './actions'

const mapStateToProps = state => {
    console.log('state', state)
    const { clientReducer } = state
    return { clientReducer }
}

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientDataList: []
        }
    }


    async componentDidMount() {
        await this.getClients()
        // await this.addClients()
    }

    getClients = async () => {
        let params = {
            limit: 10,
            offset: 0
        }
        await this.props.getClients(params)


        if (this.props.clientReducer.clientData.success) {
            this.setState({
                clientDataList: this.props.clientReducer.clientData.clients
            })
        }


    }

    render() {
        return (
            <section className="cont-ara">
                <div className="list-area">
                    <TopSlider />


                    <div class="lst-bt-nav">
                        <div class="table table-ara">
                            <div class="top-fil-ara">

                                <div class="cap">
                                    <h4>Clients</h4>
                                </div>

                                <div class="btn-ara">
                                    <button class="btn btn-top"><img src="/images/color-wheel.svg" />Icon & color info</button>
                                    <button class="btn btn-top"><img src="/images/export.svg" />Export EXL</button>
                                    <button class="btn btn-top"><img src="/images/mail.svg" />Email</button>
                                    <button class="btn btn-top"><img src="/images/colmns.svg" />Column Window</button>
                                    <button class="btn btn-top"><img src="/images/reset-column.svg" />Reset  Columns</button>
                                </div>

                                <div class="sr-sec">
                                    <form>
                                        <input type="text" class="form-control" placeholder="Search" />
                                        <button type="submit" class="btn btn-search"> <img src="/images/serach.svg" /> </button>
                                    </form>
                                </div>
                                <div class="fil-btn">
                                    <button class="btn btn-add" onClick={() => { this.props.history.push('/addClients') }} > <span class="icon"> <img src="/images/add-new-region.svg" /></span>Add New Client</button>
                                </div>
                            </div>

                            <div class="list-sec">
                                <div class="table-section">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th class="img-sq-box">
                                                    <img src="/images/table-blue-dots.svg" />
                                                </th>
                                                <th class="">Client Code</th>
                                                <th class="">Client Name</th>
                                                <th class="">Comments</th>
                                                <th class="">Display Blinking Red Plus</th>
                                                <th class="">Ep Name</th>
                                                <th class="">Lock Total Devices</th>
                                                <th class="">Modify Next Due Date</th>
                                                <th class="">Request Email Recipt</th>
                                                <th class="">Schedule Threshold</th>
                                                <th class="">Trailing View Current Month</th>
                                                <th class="">Use Threshold For Quarterly</th>
                                                <th class="">Cmms Url</th>
                                                
                                                {/* <th class="">Consultancy   <span class="rop-icon"> <img src="/images/down-arrow.svg"/> </span> </th>
                                       <th class="">Client <span class="rop-icon"> <img src="/images/down-arrow.svg"/> </span></th>
                                       <th class="">Associated Project <span class="rop-icon"> <img src="/images/down-arrow.svg"/> </span></th>
                                       <th class="cus-usr">Consultancy User</th> */}
                                                <th class="action">
                                                    <img src="/images/three-dots.svg" />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.clientDataList.map((item, index) => { 
                                                return (
                                                    <tr>
                                                        <td class="img-sq-box">
                                                            <img src="/images/table-blue-dots.svg" />
                                                        </td>
                                                        <td>{item.code}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.comments}</td>
                                                        <td>{item.display_blinking_red_plus === true? "true":item.display_blinking_red_plus === false?"false":null}</td>
                                                        <td>{item.ep_name}</td>
                                                        <td>{item.lock_total_devices === true? "true":item.lock_total_devices === false?"false":null}</td>
                                                        <td>{item.modify_next_due_date === true? "true":item.modify_next_due_date === false?"false":null}</td>
                                                        <td>{item.request_email_recipt === true? "true":item.request_email_recipt === false?"false":null}</td>
                                                        <td>{item.schedule_threshold}</td>
                                                        <td>{item.trailing_view_current_month}</td>
                                                        <td>{item.use_threshold_for_quarterly === true? "true":item.use_threshold_for_quarterly === false?"false":null}</td>
                                                        <td>{item.cmms_url}</td>

                                                        <td class="action">
                                                            <img src="/images/three-dots.svg" data-toggle="dropdown" />
                                                            <ul class="dropdown-menu" role="menu">
                                                                <li ><a href="#"><img src="/images/edit.svg" />Edit</a></li>
                                                                <li><a href="#"><img src="/images/delete.svg" />Delete</a></li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                )
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="fot-nav">
                            <ul class="pagnation">
                                <li class="active">
                                    <a href="#">01</a>
                                </li>
                                <li>
                                    <a href="#">02</a>
                                </li>
                                <li>
                                    <a href="#">03</a>
                                </li>
                            </ul>
                            <ul class="pagnation prv-nxt">
                                <li>
                                    <a href="#" class="prv"> <img src="/images/lft-arrow.svg" /> Prev</a>
                                </li>
                                <li>
                                    <a href="#" class="nxt">Next <img src="/images/rgt-arrow.svg" /></a>
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