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

class editClients extends Component {

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

            client_id:''

        }
    }

    async componentDidMount() {

        await this.props.getConsultancyDropdown()

        console.log('consultancyDropdownData', this.props.settingsCommonReducer.consultancyDropdownData)
        console.log('this.props.history.location.state', this.props.history.location.state)
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
            client_id:this.props.history.location.state.clientItem.id

        })
        
        console.log('this.state', this.state)
        console.log('this.state.client_id', (this.state.client_id))
    }

    editClients = async () => {
        console.log('this.state', this.state)
        if (this.state.name === '') {
            this.setState({
                nameErrorMsg: true
            })
        }
        if (this.state.consultancy_id === '') {
            this.setState({
                consultancyIdErrorMsg: true
            })
        }
        if (this.state.name != '' && this.state.consultancy_id != '') {
            let rec_data = new FormData();
            rec_data.append("client[name]", this.state.name);
            rec_data.append("client[consultancy_id]", this.state.consultancy_id);
            rec_data.append("client[cmms_url]", this.state.cmms_url);
            rec_data.append("client[trailing_view_current_month]", this.state.trailing_view_current_month);
            rec_data.append("client[modify_next_due_date]", this.state.modify_next_due_date);
            rec_data.append("client[schedule_threshold]", this.state.schedule_threshold);
            rec_data.append("client[display_blinking_red_plus]", this.state.display_blinking_red_plus);
            rec_data.append("client[lock_total_devices]", this.state.lock_total_devices);
            rec_data.append("client[ep_name]", this.state.ep_name);
            rec_data.append("client[use_threshold_for_quarterly]", this.state.use_threshold_for_quarterly);
            rec_data.append("client[request_email_recipt]", this.state.request_email_recipt);
            rec_data.append("client[comments]", this.state.comments);

            let id = this.state.client_id

            // let params = {
            //     'client[name]': this.state.name,
            //     'client[comments]': this.state.comments,

            // }
            await this.props.editClientsById(rec_data,id)
            ToastMsg('Client '+this.props.clientReducer.editClientData.message, 'info')
            // this.setState({
            //     name: '',
            //     comments: ''
            // })
            if (this.props.clientReducer.editClientData.message === "Updated successfully") {
                history.push('/clients')
            }

        }
    }
    async radioChanged(e) {
        console.log('e.target.name', (e.target.value))
        if (e.target.name === "modify_next_due_date") {
            if (e.target.value === "true") {
                await this.setState({ modify_next_due_date: true })
            } else {
                await this.setState({ modify_next_due_date: false })
            }
        } else if (e.target.name === "display_blinking_red_plus") {
            if (e.target.value === "true") {
                await this.setState({ display_blinking_red_plus: true })
            } else {
                await this.setState({ display_blinking_red_plus: false })
            }
        } else if (e.target.name === "lock_total_devices") {
            if (e.target.value === "true") {
                await this.setState({ lock_total_devices: true })
            } else {
                await this.setState({ lock_total_devices: false })
            }
        } else if (e.target.name === "use_threshold_for_quarterly") {
            if (e.target.value === "true") {
                await this.setState({ use_threshold_for_quarterly: true })
            } else {
                await this.setState({ use_threshold_for_quarterly: false })
            }
        } else if (e.target.name === "request_email_recipt") {
            if (e.target.value === "true") {
                await this.setState({ request_email_recipt: true })
            } else {
                await this.setState({ request_email_recipt: false })
            }
        }

    }


    render() {
        return (
            <section className="cont-ara">
                <div className="fst">
                    <ToastContainer />
                    <TopSlider />
                    <div className="dash-cont">
                        <div className="pub-ara six">

                            <div className="frm-ara three-col">
                                <div className="top-ara">
                                    <h4>Edit Client</h4>
                                </div>

                                <div className="head">
                                    <h3>Basic Info</h3>
                                </div>
                                <div className="frm">
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">01</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <label className="form-control-placeholder" style={{ color: this.state.nameErrorMsg && 'red' }} for="f-name">Client Name *</label>
                                                <input type="text" id="text" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value, nameErrorMsg: false }) }} className="form-control" placeholder="Enter Client Name " />
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
                                                <select className="form-control select" value={this.state.consultancy_id} onChange={(e) => { this.setState({ consultancy_id: e.target.value, consultancyIdErrorMsg: false }) }}>
                                                    <option value="">Select</option>
                                                    {
                                                        this.state.consultancyIdList.length && this.state.consultancyIdList.map((item, idex) => {
                                                            return (
                                                                <option value={item.id}> {item.name} </option>
                                                            )
                                                        })
                                                    }

                                                </select>

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
                                                <input type="text-area" id="text" value={this.state.cmms_url} onChange={(e) => { this.setState({ cmms_url: e.target.value }) }} className="form-control" placeholder="Enter CMMS Url" />
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
                                                <select className="form-control select" value={this.state.trailing_view_current_month} onChange={(e) => { this.setState({ trailing_view_current_month: e.target.value }) }}>
                                                    <option value="current year">Current year</option>
                                                    <option value="previous year">Previous year</option>
                                                </select>
                                                {/* <input type="text-area" id="text"  className="form-control" placeholder=" " /> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">05</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="chek">

                                                <label >Modify Next Due Date</label>
                                                <div className="chekbox-sec" >
                                                    <label class="container">Yes
                                                    <input type="radio" name="modify_next_due_date" value={true} onChange={(e) => this.radioChanged(e)} checked={ this.state.modify_next_due_date} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="container">No
                                                    <input type="radio"  name="modify_next_due_date" value={false} onChange={(e) => this.radioChanged(e)} checked={ !this.state.modify_next_due_date}/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>

                                                {/* <input type="text-area" id="text"  className="form-control" placeholder=" " /> */}
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
                                                <select className="form-control select" value={this.state.schedule_threshold} onChange={(e) => { this.setState({ schedule_threshold: e.target.value }) }}>
                                                    <option value="days">Days</option>
                                                    <option value="month">Month</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">07</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="chek">
                                                <label >Display Blinking Red Plus?</label>
                                                <div className="chekbox-sec" >
                                                <label class="container">Yes
                                                    <input type="radio" value={true} name="display_blinking_red_plus" onChange={(e) => this.radioChanged(e)} checked={ this.state.display_blinking_red_plus} />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                    <label class="container">No
                                                    <input type="radio" value={false} name="display_blinking_red_plus" onChange={(e) => this.radioChanged(e)} checked={ !this.state.display_blinking_red_plus} />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">08</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="chek">
                                                <label> Lock Total Devices</label>
                                                <div className="chekbox-sec">
                                                <label class="container">Yes
                                                    <input type="radio" value={true} name="lock_total_devices"  onChange={(e) => this.radioChanged(e)}  checked={ this.state.lock_total_devices}/>
                                                    <span class="checkmark"></span>
                                                    </label>   
                                                    <label class="container">No
                                                    <input type="radio" value={false} name="lock_total_devices"  onChange={(e) => this.radioChanged(e)} checked={ !this.state.lock_total_devices}/> 
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
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
                                                <input type="text-area" id="text" value={this.state.ep_name} onChange={(e) => { this.setState({ ep_name: e.target.value }) }} className="form-control" placeholder="Enter Ep Name " />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">10</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="chek">
                                                <label >Use Threshold For Quarterly</label>
                                                <div className="chekbox-sec" >
                                                <label class="container">Yes
                                                    <input type="radio" value={true} name="use_threshold_for_quarterly" onChange={(e) => this.radioChanged(e)} checked={ this.state.use_threshold_for_quarterly} /> 
                                                    <span class="checkmark"></span>
                                                    </label>   
                                                    <label class="container">No
                                                    <input type="radio" value={false} name="use_threshold_for_quarterly" onChange={(e) => this.radioChanged(e)} checked={ !this.state.use_threshold_for_quarterly} /> 
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">11</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="chek">
                                                <label > Request Email Recipt</label>
                                                <div className="chekbox-sec" >
                                                <label class="container">Yes
                                                    <input type="radio" value={true} name="request_email_recipt" onChange={(e) => this.radioChanged(e)} checked={ this.state.request_email_recipt} />
                                                    <span class="checkmark"></span>
                                                    </label>   
                                                    <label class="container">No
                                                    <input type="radio" value={false} name="request_email_recipt" onChange={(e) => this.radioChanged(e)} checked={ !this.state.request_email_recipt} />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
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
                                                <textarea type="text-area" value={this.state.comments} onChange={(e) => { this.setState({ comments: e.target.value, commentsErrorMsg: false }) }} className="form-control" placeholder=" Enter Comments" />
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="frm btn-sec">
                                    <button onClick={() => this.editClients()} className="btn btn-submit"> <i className="material-icons tic"> check</i>Submit</button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default connect(mapStateToProps, { ...actions, ...commonActions })(editClients)
