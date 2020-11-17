import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../consultancy/actions';

const mapStateToProps =state=>{
    console.log('state', state)
    const { consultancyReducer } = state;
    return { consultancyReducer };
}

class index extends Component {

    async componentDidMount() {
        await this.getConsultancies()
        await this.addConsultancies()
     }
     getConsultancies = async() => {
         let params ={
             limit:10,
             offset:0
         }
        await this.props.getConsultancies(params)
     }
    //  addConsultancies = async() => {
    //     let params ={
    //         name:10,
    //         comments:0
    //     }
    //    await this.props.getConsultancies(params)
    // }

    render() {
        return (
            <section className="cont-ara">
            <div className="dash">
                
                <div className="dash-cont">
                    <div className="pub-ara six">
                        
                    </div>

                </div>
            </div>
        </section>
        );
    }
}

export default connect(mapStateToProps, {...actions})(index);