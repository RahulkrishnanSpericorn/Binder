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
        // await this.addConsultancies()        //For add consultanices uncomment this line
        // await this.getConsultanciesById()
     }
     getConsultancies = async() => {
         let params ={
             limit:10,
             offset:0
         }
        await this.props.getConsultancies(params)
     }
     addConsultancies = async() => {
        let params ={
            name:'test',
            comments:'testing'
        }
       await this.props.addConsultancies(params)
    }
    // getConsultanciesById = async() => {
    //     let params ={
         
    //     }
    //    await this.props.getConsultanciesById(params)
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