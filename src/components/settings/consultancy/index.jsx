import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../consultancy/actions';
import TopSlider from '../../../components/common/components/TopSlider'

const mapStateToProps = state => {
    console.log('state', state)
    const { consultancyReducer } = state;
    return { consultancyReducer };
}

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            consultancyList: []
        }
    }


    async componentDidMount() {
        await this.getConsultancies()
        // await this.addConsultancies()        //For add consultanices uncomment this line
        await this.getConsultanciesById()
        await this.editConsultanciesById()
    }
    getConsultancies = async () => {
        let params = {
            limit: 10,
            offset: 0
        }
        await this.props.getConsultancies(params)
        if (this.props.consultancyReducer.consultanciesData.success) {
            this.setState({
                consultancyList: (this.props.consultancyReducer.consultanciesData.consultancies)
            })
            console.log('this.state.consultancyList', this.state.consultancyList)
        }
    }
    addConsultancies = async () => {
        let params = {
            name: 'test',
            comments: 'testing'
        }
        await this.props.addConsultancies(params)
    }
    getConsultanciesById = async () => {
        let id = 'c0b7f070-df5d-4e9f-9012-bd6dedaf881a'
        await this.props.getConsultanciesById(id)
    }
    editConsultanciesById = async () => {
        let params = {
            'consultancy[name]': 'sgsd',
            'consultancy[comments]': 'commentss'
        }
        let id = 'c0b7f070-df5d-4e9f-9012-bd6dedaf881a'
        await this.props.editConsultanciesById(params, id)
    }

    render() {
        return (
            <section className="cont-ara">
                <div class="list-area">
                    <TopSlider />

                    <div class="lst-bt-nav">
                        <div class="table table-ara">
                            <div class="top-fil-ara">
                                <div class="cap">
                                    <h4>Consultancy</h4>
                                </div>
                                <div class="btn-sec">
                                    <button class="btn btn-top">Icon & color info</button>
                                    <button class="btn btn-top">Export EXL</button>
                                    <button class="btn btn-top">Email</button>
                                    <button class="btn btn-top">Column Windw</button>
                                    <button class="btn btn-top">Reset  Columns</button>
                                </div>
                                <div class="sr-sec">
                                    <input type="text" class="form-control" placeholder="Search" />
                                </div>
                                <div class="fil-btn">
                                    <button onClick={()=>{this.props.history.push('/addConsultancy')}} class="btn btn-add"> Add New Consultancy</button>
                                </div>
                            </div>
                            <div class="table-section">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            {/* <th class="img-sq-box">
                                                <i class="fa fa-th-large" aria-hidden="true"></i>
                                            </th> */}
                                            <th class="">Consultancy Code</th>
                                            <th class="">Consultancy Name</th>
                                            <th class="">Comments</th>
                                            {/* <th class="">Client</th>
                                       <th class="">Associated Project</th>
                                       <th class="">Consultancy User</th> */}
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                    {console.log("response--->:con", this.state.consultancyList)}

                                    { this.state.consultancyList.map((item,index) =>{
                                        return(
                                            <tr> 
                                               <td>{item.code}</td>
                                               <td>{item.name}</td>
                                               <td>{item.comments}</td> 
                                           </tr>
                                        )
                                          

                                            
                                    })}
                                    </tbody>

                                </table>
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