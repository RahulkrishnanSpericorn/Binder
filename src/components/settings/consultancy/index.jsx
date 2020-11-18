import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../consultancy/actions';

const mapStateToProps = state => {
    console.log('state', state)
    const { consultancyReducer } = state;
    return { consultancyReducer };
}

class index extends Component {

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

export default connect(mapStateToProps, { ...actions })(index);