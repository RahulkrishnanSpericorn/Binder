import React, { Component } from 'react'
import { connect } from 'react-redux';
import history from '../../../config/history';
import TopSlider from '../../common/components/TopSlider';
import actions from './actions';

const mapStateToProps = state => {
    console.log('state', state)
    const { clientReducer } = state;
    return { clientReducer };
}
 class addClients extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            comments:'',
            nameErrorMsg:false,
            commentsErrorMsg:false
        }
    }

    addClients = async () => {
        if(this.state.name === ''){
            this.setState({
                nameErrorMsg: true
            })
        } if(this.state.comments === ''){
            this.setState({
                commentsErrorMsg: true
            })
        }if(this.state.name != '' && this.state.comments != ''){
            let rec_data = new FormData();
            rec_data.append("client[name]", this.state.name);
            rec_data.append("client[comments]", this.state.comments); 

            // let params = {
            //     'client[name]': this.state.name,
            //     'client[comments]': this.state.comments,
                
            // }
            await this.props.addClients(rec_data)
            alert(this.props.clientReducer.addClientData.message)
            this.setState({
                name:'',
                comments:''
            })
            if(this.props.clientReducer.addClientData.message ===  "Created successfully"){
                history.push('/clients')
            }
           
        }
    }

    render() {
        return (
            <section className="cont-ara">
            <div className="fst">
            <TopSlider/>
                <div className="dash-cont">
                    <div className="pub-ara six">

                    <div className="frm-ara">
                            <div className="top-ara">
                                <h4>Add Clients</h4>
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
                                            <input type="text" id="text" onChange={(e)=>{this.setState({name:e.target.value,nameErrorMsg:false})}} className="form-control" placeholder=" " />
                                            <label className="form-control-placeholder" style={{color:this.state.nameErrorMsg && 'red'}} for="f-name">Client Name *</label>
                                        </div>
                                    </div>
                                </div>
                                 
                            </div>
                            <div className="frm">
                                <div className="itm">
                                    <div className="cunt">
                                        <div className="numb">02</div>
                                    </div>
                                    <div className="itm-cnt">
                                        <div className="form-group">
                                            <input type="text-area" id="text" onChange={(e)=>{this.setState({comments:e.target.value,commentsErrorMsg:false})}} className="form-control" placeholder=" " />
                                            <label className="form-control-placeholder" style={{color:this.state.commentsErrorMsg && 'red'}} for="f-name">Comments *</label>
                                        </div>
                                    </div>
                                </div>
                                 
                            </div>



                          

                            <div className="frm btn-sec">
                                <button onClick={()=>this.addClients()} className="btn btn-submit"> <i className="material-icons tic"> check</i>Submit</button>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>
        )
    }
}

export default connect(mapStateToProps, {...actions})(addClients)
