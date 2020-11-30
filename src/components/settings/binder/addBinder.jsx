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

class addBinder extends Component {
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
            order:null
        }
    }
    
   async componentDidMount() {
        await this.props.getConsultancyDropdown()

        console.log('consultancyDropdownData', this.props.settingsCommonReducer.consultancyDropdownData)
        await this.setState({
            consultancyIdList: this.props.settingsCommonReducer.consultancyDropdownData.data
        })
    }

    selectConsultancyId = async (e) => {
        await this.setState({ consultancy_id: e.target.value, consultancyErrorMsg: false })

        let params = {
            consultancy_id: this.state.consultancy_id
        }
        await this.props.getClientDropdown(params)
        await this.setState({
            clientIdList: this.props.settingsCommonReducer.clientDropdownData.data
        })
    }

    addBinder = async () => {
        console.log('this.state', this.state)
        if (this.state.name === '') {
            this.setState({
                nameErrorMsg: true
            })
        }
        if (this.state.consultancy_id === '') {
            this.setState({
                consultancyErrorMsg: true
            })
        }
        if (this.state.client_id === '') {
            this.setState({
                clientErrorMsg: true
            })
        }
        if (this.state.name != '' && this.state.consultancy_id != '' && this.state.client_id != '') {
            let params = {
                name: this.state.name,
                // comments: this.state.comments,
                color:this.state.color,
                display_name: this.state.display_name,
                text_color:this.state.text_color,
                consultancy_id: this.state.consultancy_id,
                client_id: this.state.client_id,
                line:this.state.line,
                order:this.state.order

            }
            await this.props.addBinder(params)
            ToastMsg(this.props.binderReducer.addBinderData.message, 'info')
            if (this.props.binderReducer.addBinderData.message === "Binder created successfully") {
                history.push('/binder')
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
                                <h4>Add Binder</h4>
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
                                            <input type="text" id="text" onChange={(e) => { this.setState({ name: e.target.value, nameErrorMsg: false }) }} className="form-control" placeholder="Enter Binder Name" />
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
                                            <input type="text" id="text" onChange={(e) => { this.setState({ display_name: e.target.value }) }} className="form-control" placeholder="Enter Display Name" />
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
                                            <select className="form-control select" value={this.state.consultancy_id} onChange={(e) => { this.selectConsultancyId(e) }}>
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
                                            <select className="form-control select" value={this.state.client_id} onChange={(e) => { this.setState({ client_id: e.target.value, clientErrorMsg: false }) }}>
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
                                            <select className="form-control select" >
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
                                            <select className="form-control select"   >
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
                                            <input type="text" onChange={(e) => { this.setState({ color: e.target.value }) }} className="form-control" placeholder="Enter Color" />
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
                                            <input type="text" onChange={(e) => { this.setState({ text_color: e.target.value }) }} className="form-control" placeholder="Enter Text Color" />
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
                                            <input type="number" onChange={(e) => { this.setState({ line: e.target.value }) }} className="form-control" placeholder="Enter Line" />
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
                                            <input type="number" onChange={(e) => { this.setState({ order: e.target.value }) }} className="form-control" placeholder="Enter Order" />
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="frm btn-sec">
                                <button onClick={() => this.addBinder()} className="btn btn-submit"> <i className="material-icons tic"> check</i>Submit</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
        )
    }
}

export default connect(mapStateToProps, {...actions, ...commonActions})(addBinder)
