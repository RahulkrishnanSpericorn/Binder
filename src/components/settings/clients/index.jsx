import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopSlider from '../../common/components/TopSlider';
import actions from './actions'

const mapStateToProps = state =>{
    console.log('state', state)
    const {clientReducer} = state
    return {clientReducer}
}

class index extends Component {

    constructor(props) {
        super(props);
        this.state={
            clientDataList:[]
        }
    }
    

   async componentDidMount() {
        await this.getClients()
        // await this.addClients()
    }

    getClients = async () =>{
       let params={
            limit: 10,
            offset:0
        }
        await this.props.getClients(params)


        if (this.props.clientReducer.clientData.success) {
            this.setState({
                clientDataList : this.props.clientReducer.clientData.clients
            }) 
        }

     
    } 

    render() {
        return (
            <section className="cont-ara">
               <div className="list-area">
                    <TopSlider />

                    <div className="lst-bt-nav">
                        <div className="table table-ara">
                            <div className="top-fil-ara">
                                <div className="cap">
                                    <h4>Clients</h4>
                                </div>
                                <div className="btn-sec">
                                    <button className="btn btn-top">Icon & color info</button>
                                    <button className="btn btn-top">Export EXL</button>
                                    <button className="btn btn-top">Email</button>
                                    <button className="btn btn-top">Column Windw</button>
                                    <button className="btn btn-top">Reset  Columns</button>
                                </div>
                                <div className="sr-sec">
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                                <div className="fil-btn">
                                    <button onClick={()=>{this.props.history.push('/addClients')}} className="btn btn-add"> Add New Client</button>
                                </div>
                            </div>
                            <div className="table-section">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            {/* <th className="img-sq-box">
                                                <i className="fa fa-th-large" aria-hidden="true"></i>
                                            </th> */}
                                            <th className="">Client Code</th>
                                            <th className="">Client Name</th>
                                            <th className="">Comments</th>
                                            {/* <th className="">Client</th>
                                       <th className="">Associated Project</th>
                                       <th className="">Consultancy User</th> */}
                                        </tr>
                                    </thead>
                                    
                                    <tbody> 
                                    { this.state.clientDataList.map((item,index) =>{
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
                                    <a href="#" className="prv"> <img src="/images/lft-arrow.svg" /> Prev</a>
                                </li>
                                <li>
                                    <a href="#" className="nxt">Next <img src="/images/rgt-arrow.svg" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps , {...actions})(index);