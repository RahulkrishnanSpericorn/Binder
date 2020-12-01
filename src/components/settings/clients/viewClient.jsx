import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import history from '../../../config/history';
import TopSlider from '../../common/components/TopSlider';
import actions from './actions';
import ToastMsg from '../../common/ToastMessage'
import commonActions from '../actions';


const mapStateToProps = state => {
    console.log('state', state)
    const { clientReducer, settingsCommonReducer } = state;
    return { clientReducer, settingsCommonReducer };
}

class viewClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            comments: '',
            nameErrorMsg: false,
            commentsErrorMsg: false,
            consultancyIdErrorMsg: false,

            cmms_url: '',
            trailing_view_current_month: 'current year',
            modify_next_due_date: true,
            schedule_threshold: 'days',
            display_blinking_red_plus: true,
            lock_total_devices: true,
            ep_name: '',
            use_threshold_for_quarterly: true,
            request_email_recipt: true,
            // image_description: '',
            // image: {},
            consultancy_id: '',
            consultancyIdList: [],

            client_id: ''

        }
    }

    async componentDidMount() {
        console.log('this.props', this.props)

        await this.props.getConsultancyDropdown()
        await this.setState({
            consultancyIdList: this.props.settingsCommonReducer.consultancyDropdownData.data,
            name: this.props.history.location.state.clientItem.name,
            consultancy_id: this.props.history.location.state.consultancy_id,
            comments: this.props.history.location.state.clientItem.comments,
            cmms_url: this.props.history.location.state.clientItem.cmms_url,
            trailing_view_current_month: this.props.history.location.state.clientItem.trailing_view_current_month,
            modify_next_due_date: this.props.history.location.state.clientItem.modify_next_due_date === "Yes" ? true : false,
            schedule_threshold: this.props.history.location.state.clientItem.schedule_threshold,
            display_blinking_red_plus: this.props.history.location.state.clientItem.display_blinking_red_plus === "Yes" ? true : false,
            lock_total_devices: this.props.history.location.state.clientItem.lock_total_devices === "Yes" ? true : false,
            ep_name: this.props.history.location.state.clientItem.ep_name,
            use_threshold_for_quarterly: this.props.history.location.state.clientItem.use_threshold_for_quarterly === "Yes" ? true : false,
            request_email_recipt: this.props.history.location.state.clientItem.request_email_recipt === "Yes" ? true : false,
            client_id: this.props.history.location.state.clientItem.id

        })
        console.log('this.state', this.state)
    }
    render() {
        return (
            <section className="cont-ara">
                <div className="fst">
                    <ToastContainer />
                    <div class="top-slider nav-ara">
                        <div class="tab-sec">
                            <ul class="nav nav-tabs">
                                <li class="active">
                                    <a data-toggle="tab" href="#bd">Basic Details</a>
                                </li>
                                <li><a data-toggle="tab" href="#fls">Floors</a></li>
                                <li><a data-toggle="tab" href="#img">Images</a></li>
                                <li><a data-toggle="tab" href="#map">Map</a></li>
                            </ul>
                        </div>
                        <div class="pagenation">
                            <ul>
                                <li>
                                    <a href="#">Clients </a>
                                </li>
                               
                                <li class="active">
                                    <a href="#">View Details </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="dash-cont">
                        <div className="pub-ara six">

                            <div className="frm-ara three-col">
                                <div className="top-ara">
                                    <h4>View Client</h4>
                                </div>

                                <div className="head">
                                    <h3>Basic Info</h3>
                                </div>
                                <div className="frm sav">
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">01</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label className="form-control-placeholder" style={{ color: this.state.nameErrorMsg && 'red' }} for="f-name">Client Name *</label>
                                                <h3>{this.state.name}</h3>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">02</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group select-group">
                                                <label className="form-control-placeholder" style={{ color: this.state.consultancyIdErrorMsg && 'red' }} for="f-name">Consultancy *</label>

                                                {
                                                    this.state.consultancyIdList.length && this.state.consultancyIdList.map((item, idex) => {
                                                        return (
                                                            <h3 > {item.name} </h3>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">03</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label className="form-control-placeholder" for="f-name">CMMS Url</label>
                                                <h3>{this.state.cmms_url}</h3>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">04</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group ">

                                                <label className="form-control-placeholder" for="f-name">Trailing View Current Month</label>

                                                <h3>{this.state.trailing_view_current_month === true ? 'true' : 'false'}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">05</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">

                                                <label >Modify Next Due Date</label>
                                                <h3>{this.state.modify_next_due_date === true ? 'true' : 'false'}</h3>

                                                {/* <h3 type="text-area" id="text"  className="form-control" placeholder=" " /> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">06</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group ">
                                                <label className="form-control-placeholder" for="f-name">Schedule Threshold</label>
                                                <h3>{this.state.schedule_threshold}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">07</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label >Display Blinking Red Plus?</label>
                                                <h3>{this.state.display_blinking_red_plus === true ? 'true' : 'false'}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">08</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label> Lock Total Devices</label>
                                                <h3>{this.state.lock_total_devices === true ? 'true' : 'false'}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">09</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label className="form-control-placeholder" for="f-name">Ep Name</label>
                                                <h3>{this.state.ep_name}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">10</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label >Use Threshold For Quarterly</label>
                                                <h3>{this.state.use_threshold_for_quarterly === true ? 'true' : 'false'}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">11</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label > Request Email Recipt</label>
                                                <h3>{this.state.request_email_recipt === true ? 'true' : 'false'}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">12</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label className="form-control-placeholder" for="f-name">Comments</label>
                                                <h3>{this.state.comments}</h3>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="frm btn-sec">
                                    <button onClick={() => history.push('/clients')} className="btn btn-submit"> <i className="material-icons tic"> check</i>Go Back</button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default connect(mapStateToProps, { ...actions, ...commonActions })(viewClient)
