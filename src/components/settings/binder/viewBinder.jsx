import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify'
import TopSlider from '../../common/components/TopSlider'
import commonActions from '../actions';
import ToastMsg from '../../common/ToastMessage'
import history from '../../../config/history';
import actions from './actions';

const mapStateToProps = state => {
    console.log('state', state)
    const { binderReducer, settingsCommonReducer } = state
    return { binderReducer, settingsCommonReducer }
}

 class viewBinder extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            comments: '',
            nameErrorMsg: false,
            commentsErrorMsg: false,
            consultancyErrorMsg: false,
            clientErrorMsg: false,
            display_name: '',
            consultancy_id: '',
            client_id: '',
            consultancyIdList: [],
            clientIdList: [],

            color:'',
            text_color:'',
            line:null,
            order:null,

            binderId:''
        }
    }
    
   async componentDidMount() {
        await this.props.getConsultancyDropdown()

        console.log('consultancyDropdownData', this.props.history.location)
        await this.setState({
            consultancyIdList: this.props.settingsCommonReducer.consultancyDropdownData.data,
            color:this.props.history.location.state.binderItem.color,
            text_color:this.props.history.location.state.binderItem.text_color,
            line:this.props.history.location.state.binderItem.line,
            order:this.props.history.location.state.binderItem.order,
            name:this.props.history.location.state.binderItem.name,
            display_name:this.props.history.location.state.binderItem.display_name,
            consultancy_id:this.props.history.location.state.consultancy_id,
            client_id:this.props.history.location.state.client_id,
            binderId:this.props.history.location.state.binderItem.id

        })
        let params = {
            consultancy_id: this.state.consultancy_id
        }
        this.getClientDropdownData(params) 
    }

    getClientDropdownData =async(params)=>{
        await this.props.getClientDropdown(params)
        await this.setState({
            clientIdList: this.props.settingsCommonReducer.clientDropdownData.data
        })
    }

    selectConsultancyId = async (e) => {
        await this.setState({ consultancy_id: e.target.value, consultancyErrorMsg: false })

        let params = {
            consultancy_id: this.state.consultancy_id
        }
        this.getClientDropdownData(params)
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
                                <h4>View Binder</h4>
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
                                            <label className="form-control-placeholder" style={{ color: this.state.nameErrorMsg && 'red' }} for="f-name">Binder Name *</label>
                                            <input disabled={true} type="text" id="text" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value, nameErrorMsg: false }) }} className="form-control" placeholder="Enter Binder Name" />
                                        </div>
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="cunt">
                                        <div className="numb">02</div>
                                    </div>
                                    <div className="itm-cnt">
                                        <div className="form-group">
                                            <label className="form-control-placeholder" for="f-name">Display Name</label>
                                            <input disabled={true} type="text" id="text" value={this.state.display_name} onChange={(e) => { this.setState({ display_name: e.target.value }) }} className="form-control" placeholder="Enter Display Name" />
                                        </div>
                                    </div>
                                </div>


                                <div className="itm">
                                    <div className="cunt">
                                        <div className="numb">03</div>
                                    </div>
                                    <div className="itm-cnt">
                                        <div className="form-group select-group">

                                            <label className="form-control-placeholder" style={{ color: this.state.consultancyErrorMsg && 'red' }} for="f-name">Consultancy *</label>
                                            <select disabled={true} className="form-control select" value={this.state.consultancy_id} onChange={(e) => { this.selectConsultancyId(e) }}>
                                                <option value="">Select</option>
                                                {
                                                    this.state.consultancyIdList.length && this.state.consultancyIdList.map((item, idex) => {
                                                        return (
                                                            <option value={item.id}> {item.name} </option>
                                                        )
                                                    })
                                                }

                                            </select>
                                            {/* <input type="text-area" id="text"  className="form-control" placeholder=" " /> */}
                                        </div>
                                    </div>

                                </div>

                                <div className="itm">
                                    <div className="cunt">
                                        <div className="numb">04</div>
                                    </div>
                                    <div className="itm-cnt">
                                        <div className="form-group select-group">

                                            <label className="form-control-placeholder" style={{ color: this.state.clientErrorMsg && 'red' }} for="f-name">Client *</label>
                                            <select disabled={true} className="form-control select" value={this.state.client_id} onChange={(e) => { this.setState({ client_id: e.target.value, clientErrorMsg: false }) }}>
                                                <option value="">Select</option>
                                                {
                                                    this.state.clientIdList.length && this.state.clientIdList.map((item, idex) => {
                                                        return (
                                                            <option value={item.id}> {item.name} </option>
                                                        )
                                                    })
                                                }

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
                                        <div className="form-group select-group">

                                            <label className="form-control-placeholder"  for="f-name">Client User</label>
                                            <select disabled={true} className="form-control select" >
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                {/* {
                                                    this.state.clientIdList.length && this.state.clientIdList.map((item, idex) => {
                                                        return (
                                                            <option value={item.id}> {item.name} </option>
                                                        )
                                                    })
                                                } */}

                                            </select>
                                            {/* <input type="text-area" id="text"  className="form-control" placeholder=" " /> */}
                                        </div>
                                    </div>

                                </div>


                                <div className="itm">
                                    <div className="cunt">
                                        <div className="numb">06</div>
                                    </div>
                                    <div className="itm-cnt">
                                        <div className="form-group select-group">

                                            <label className="form-control-placeholder"   for="f-name">Consultancy User</label>
                                            <select disabled={true} className="form-control select"   >
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                <option value="">Select</option>
                                                {/* {
                                                    this.state.clientIdList.length && this.state.clientIdList.map((item, idex) => {
                                                        return (
                                                            <option value={item.id}> {item.name} </option>
                                                        )
                                                    })
                                                } */}

                                            </select>
                                            {/* <input type="text-area" id="text"  className="form-control" placeholder=" " /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="cunt">
                                        <div className="numb">07</div>
                                    </div>
                                    <div className="itm-cnt">
                                        <div className="form-group">
                                            <label className="form-control-placeholder" for="f-name">Color</label>
                                            <input disabled={true} type="text" value={this.state.color} onChange={(e) => { this.setState({ color: e.target.value }) }} className="form-control" placeholder="Enter Color" />
                                        </div>
                                    </div>
                                </div>


                                <div className="itm">
                                    <div className="cunt">
                                        <div className="numb">08</div>
                                    </div>
                                    <div className="itm-cnt">
                                        <div className="form-group">
                                            <label className="form-control-placeholder" for="f-name">Text Color</label>
                                            <input disabled={true} type="text" value={this.state.text_color} onChange={(e) => { this.setState({ text_color: e.target.value }) }} className="form-control" placeholder="Enter Text Color" />
                                        </div>
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="cunt">
                                        <div className="numb">09</div>
                                    </div>
                                    <div className="itm-cnt">
                                        <div className="form-group">
                                            <label className="form-control-placeholder" for="f-name">Line</label>
                                            <input disabled={true} type="number" value={this.state.line} onChange={(e) => { this.setState({ line: e.target.value }) }} className="form-control" placeholder="Enter Line" />
                                        </div>
                                    </div>
                                </div>
 
                                <div className="itm">
                                    <div className="cunt">
                                        <div className="numb">10</div>
                                    </div>
                                    <div className="itm-cnt">
                                        <div className="form-group">
                                            <label className="form-control-placeholder" for="f-name">Order</label>
                                            <input disabled={true} type="number" value={this.state.order} onChange={(e) => { this.setState({ order: e.target.value }) }} className="form-control" placeholder="Enter Order" />
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="frm btn-sec">
                                <button onClick={() => history.push('/binder')} className="btn btn-submit"> <i className="material-icons tic"> check</i>Go Back</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
        )
    }
}

export default connect(mapStateToProps, {...actions, ...commonActions})(viewBinder)
