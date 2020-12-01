import React, { Component } from 'react'
import { connect } from 'react-redux';
import history from '../../../config/history';
import TopSlider from '../../common/components/TopSlider';
import actions from './actions';
import ToastMsg from '../../common/ToastMessage'


const mapStateToProps =(state)=>{

    const {buildingReducer} = state

    console.log('state', state)

    return {buildingReducer}

}

 class index extends Component {

    constructor(props) {
        super(props);
        this.state={
            buildingDataList :[]
        }
    }
    componentDidMount = async()=> {
       await this.getBuildingData()
        
    }

    getBuildingData = async() =>{
        await this.props.getBuildingData()


        if (this.props.buildingReducer.buildingData.success) {
            this.setState({
                buildingDataList: this.props.buildingReducer.buildingData.buildings
            })
        }
    }
    
    deleteBuilding = async(item)=>{
        let id = item.id
        await this.props.deleteBuilding(id)
       await this.getBuildingData()

       ToastMsg(this.props.buildingReducer.deleteBuildingData.message,'info')


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
                                <h4>Buildings</h4>
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
                                <button class="btn btn-add" onClick={() => { this.props.history.push('/addBuilding') }} > <span class="icon"> <img src="/images/add-new-region.svg" /></span>Add New Building</button>
                            </div>
                        </div>

                        <div class="list-sec">
                            <div class="table-section">
                                <table class="table table-bordered scroll-table">
                                    <thead>
                                        <tr>
                                            <th class="img-sq-box">
                                                <img src="/images/table-blue-dots.svg" />
                                            </th>
                                            <th class="">Building Code</th>
                                            <th class="">Building Name</th>
                                            <th class="">Consultancy</th>
                                            <th class="">Client</th>
                                            <th class="">Region</th>
                                            <th class="">Site</th>
                                            <th class="">Display Name</th>
                                            <th class="">Description</th>
                                            <th class="">Consultancy User</th>
                                            <th class="">Client User</th>
                                            <th class="">Area</th>
                                            <th class="">Cost</th>
                                            <th class="">Enterprise index</th>
                                            <th class="">Ownership</th>
                                            <th class="">Ownership Type</th>
                                            <th class="">Use</th>
                                            <th class="">Manager</th>
                                            <th class="">Year Built</th>
                                            <th class="">Ministry</th>
                                            <th class="">Street</th>
                                            <th class="">City</th>
                                            <th class="">State</th>
                                            <th class="">Country</th>
                                            <th class="">Zip Code</th>
                                            <th class="">Comments</th>
                                            
                                            
                                           
                                            <th class="">Created At</th>
                                        <th class="">Updated At</th>

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
                                        {this.state.buildingDataList.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td class="img-sq-box">
                                                        <img src="/images/table-blue-dots.svg" />
                                                    </td>
                                                    <td>{item.code}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.consultancy.name}</td>
                                                    <td>{item.client.name}</td>
                                                    <td>{item.region.name}</td>
                                                    <td>{item.site.name}</td>
                                                    <td>{item.display_name ? item.display_name :'-'}</td>
                                                    <td>{item.description ? item.description : '-'}</td>
                                                    <td> - </td>
                                                    <td> - </td>
                                                    <td>{item.area}</td>
                                                    <td>{item.cost}</td>
                                                    <td>{item.enterprise_index ? item.enterprise_index : '-'}</td>
                                                    <td>{item.ownership ? item.ownership : '-'}</td>
                                                    <td>{item.ownership_type ? item.ownership_type : '-'}</td>
                                                    <td>{item.use ? item.use : '-'}</td>
                                                    <td>{item.manager ? item.manager:'-'}</td>
                                                    <td>{item.year ? item.year : '-'}</td>
                                                    <td>{item.ministry ? item.ministry : '-'}</td>
                                                    <td>{item.street ? item.street : '-'}</td>
                                                    <td>{item.city ? item.city : '-'}</td>
                                                    <td>{item.state ? item.state : '-'}</td>
                                                    <td>{item.country ? item.country : '-'}</td>
                                                    <td>{item.zip_code ? item.zip_code : '-'}</td>
                                                    <td>{item.comments ? item.comments : '-'}</td>

                                                    
                                                    <td>{item.created_at}</td>
                                                <td>{item.updated_at}</td>

                                                    <td class="action">
                                                        <img src="/images/three-dots.svg" data-toggle="dropdown" />
                                                        <ul class="dropdown-menu" role="menu">
                                                            <li ><a style={{cursor:"pointer"}} onClick={()=>{history.push('/editBuilding',{"buildingItem":item,"client_id":item.client.id,"consultancy_id":item.consultancy.id,"region_id":item.region.id,"site_id":item.site.id})}} ><img src="/images/edit.svg" />Edit</a></li>
                                                            <li><a style={{cursor:"pointer"}} onClick={()=>{this.deleteBuilding(item)}}   ><img src="/images/delete.svg" />Delete</a></li>
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
        )
    }
}

export default connect(mapStateToProps,{...actions})(index)
