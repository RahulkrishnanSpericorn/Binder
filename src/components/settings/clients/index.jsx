import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './actions'

const mapStateToProps = state =>{
    return state
}

class index extends Component {

   async componentDidMount() {
        await this.getClients()
        await this.addClients()
    }

    getClients = async () =>{
       let params={
            limit: 10,
            offset:0
        }
        await this.props.getClients(params)
    }
    addClients = async () =>{
        
    }

    render() {
        return (
            <section className="cont-ara">
                <div className="fst">

                    <div className="dash-cont">
                        <div className="pub-ara six">

                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps , {...actions})(index);