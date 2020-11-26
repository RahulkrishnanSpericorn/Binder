import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import history from '../../../config/history';
import TopSlider from '../../common/components/TopSlider';
import actions from './actions';
import ToastMsg from '../../common/ToastMessage'
import _ from "lodash";
import { API_ROUTE, ORIGIN_URL } from "../../../config/contstants";

const mapStateToProps = state => {
    console.log('state', state)
    const { consultancyReducer } = state;
    return { consultancyReducer };
}

 class editConsultancy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            comments: '',
            nameErrorMsg: false,
            commentsErrorMsg: false,
            image: null,
            image_description: '',
            consultancyId:''
        }
    }

    componentDidMount = async()=> {

        console.log('this.props', this.props.location.state.consultancyItem)
        await this.setState({
            name:this.props.location.state.consultancyItem.name,
            comments:this.props.location.state.consultancyItem.comments,
            image:this.props.location.state.consultancyItem.image,
            image_description:this.props.location.state.consultancyItem.image.description,
            consultancyId:this.props.location.state.consultancyItem.id
          
        })

        console.log('this.state.image', (this.state.image.url=== null))


    }
    


    updateConsultancies = async () => {
        if (this.state.name === '') {
            this.setState({
                nameErrorMsg: true
            })
        }
        // if(this.state.comments === ''){
        //     this.setState({
        //         commentsErrorMsg: true
        //     })
        // }
        if (this.state.name != '') {
            let params = new FormData();
            params.append("consultancy[name]", this.state.name);
            params.append("consultancy[comments]", this.state.comments);
            params.append("consultancy[image_description]", this.state.image_description);
            params.append("consultancy[image]", this.state.image);
            
            let id = this.state.consultancyId

            await this.props.editConsultanciesById(params,id)
            ToastMsg(this.props.consultancyReducer.editConsultancyById.message, 'info')
            this.setState({
                name: '',
                comments: ''
            })
            if (this.props.consultancyReducer.editConsultancyById.message === "Updated successfully") {
                history.push('/consultancy')
            }

        }
    }

    handleAddAttachment = async (e) => {
        console.log('e', e)
        await this.setState({
            image: e.target.files[0]
        });
        console.log('this.state.image', typeof (this.state.image))
        // if (this.isIterable(e.target.files)) {
        //     if (e.target.files.length) {
        //         this.setState({
        //             uploadAttachmentsHeader: "Add"
        //         });
        //     }
        //     Object.values(e.target.files).map((attachment, i) => {
        //         let ext = attachment.name.split(".").pop();
        //         const acceptableExt = ["png", "jpg", "ttf", "jpeg", "svg"];
        //         if (acceptableExt.includes(ext.toLowerCase())) {
        //             if (attachment.size < 5000000) {
        //                 this.setState({
        //                     attachmentChanged: true,
        //                     tempAttachment: { file: e.target.files[0], comments: "" }
        //                 });
        //             } else {
        //                 this.setState({
        //                     uploadError: "File is too big. Files with size greater than 5MB is not allowed."
        //                 });
        //             }
        //         } else {
        //             this.setState({
        //                 attachmentChanged: false,
        //                 uploadError: "* Accepts images only !!!"
        //             });
        //         }
        //     });
        // }
    };

    render() {
        return (
            <section className="cont-ara">
            <div className="fst">
                <ToastContainer />
                <TopSlider />
                <div className="dash-cont">
                    <div className="pub-ara six">

                        <div className="frm-ara">
                            <div className="top-ara">
                                <h4>Edit Consultancy</h4>
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
                                            <label className="form-control-placeholder" style={{ color: this.state.nameErrorMsg && 'red' }} for="f-name">Consultancy Name *</label>
                                            <input type="text" id="text" value={this.state.name}  onChange={(e) => { this.setState({ name: e.target.value, nameErrorMsg: false }) }} className="form-control" placeholder="Enter Consultancy Name" />
                                        </div>
                                    </div>
                                </div>


                                <div className="itm">
                                    <div className="cunt">
                                        <div className="numb">02</div>
                                    </div>
                                    <div className="itm-cnt">
                                        <div className="form-group">
                                            <label className="form-control-placeholder" for="f-name">Image Description</label>
                                            <input type="text" id="text" value={this.state.image_description} onChange={(e) => { this.setState({ image_description: e.target.value, nameErrorMsg: false }) }} className="form-control" placeholder="Enter Image Description" />
                                        </div>
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="cunt">
                                        <div className="numb">03</div>
                                    </div>
                                    <div className="itm-cnt">
                                        <div className="form-group">
                                            <label >Comments</label>
                                            <textarea type="text-area" value={this.state.comments} onChange={(e) => { this.setState({ comments: e.target.value, commentsErrorMsg: false }) }} className="form-control" placeholder="Enter Comments" />
                                        </div>
                                    </div>
                                </div>

                                <div className="itm">
                                    <div className="cunt">
                                        <div className="numb">04</div>
                                    </div>
                                    <div className="itm-cnt">
                                        <div className="form-group">

                                        <div class="file-upload">
                                        {/* <img src="/images/add-img.svg"/> */}
                                        {this.state.image && this.state.image.url=== null?
                                        <img src="/images/add-img.svg" />
                                        :
                                        this.state.image ? (
                                             <> 
                                                <img src={
                                                    this.state.image.url
                                                        ? this.state.image.url
                                                        : URL.createObjectURL(this.state.image)
                                                } />
                                                </>
                                           
                                        ) : (<img src="/images/add-img.svg" />)}

                                        <div class="btn-upload">
                                            <input
                                                type="file"
                                                // className="form-control"
                                                id="attachmentFiles"
                                                name="profilePic"
                                                onChange={this.handleAddAttachment}
                                            />
                                            <img src="/images/add-btn.svg" />
                                        </div>


                                        {/* <button class="btn-upload">
                                            <img src="/images/add-btn.svg" />
                                        </button> */}
                                    </div>

                                        </div>
                                    </div>
                                </div>

                                 


                            </div>


                            <div className="frm btn-sec">
                                <button onClick={() => this.updateConsultancies()} className="btn btn-submit"> <i className="material-icons tic"> check</i>Update</button>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>
        )
    }
}

export default connect(mapStateToProps, { ...actions })(editConsultancy)
