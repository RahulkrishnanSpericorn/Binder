import React, { Component } from 'react'
import TopSlider from '../../common/components/TopSlider'

export default class addRegion extends Component {

    constructor(props) {
        super(props);
        this.state={
            name:'',
            comments:'',
            nameErrorMsg:false,
            commentsErrorMsg:false
        }
    }

    addRegion = async () => {
        if(this.state.name === ''){
            this.setState({
                nameErrorMsg: true
            })
        }
        //  if(this.state.comments === ''){
        //     this.setState({
        //         commentsErrorMsg: true
        //     })
        // }
        if(this.state.name != ''){
            let params = {
                name: this.state.name,
                comments: this.state.comments,
                
            }
            // await this.props.addRegion(params)
            // alert(this.props.consultancyReducer.addConsultanciesData.message)
            // this.setState({
            //     name:'',
            //     comments:''
            // })
            // if(this.props.consultancyReducer.addConsultanciesData.message ===  "Created successfully"){
            //     history.push('/consultancy')
            // }
           
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
                                <h4>Add Region</h4>
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
                                            <label className="form-control-placeholder" style={{color:this.state.nameErrorMsg && 'red'}} for="f-name">Consultancy Name *</label>
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
                                            <label className="form-control-placeholder" for="f-name">Comments</label>
                                        </div>
                                    </div>
                                </div>
                                 
                            </div> 
                            <div className="frm btn-sec">
                                <button onClick={()=>this.addRegion()} className="btn btn-submit"> <i className="material-icons tic"> check</i>Submit</button>
                            </div>
                        </div>
 
                    </div>

                </div>
            </div>
        </section>
        )
    }
}
