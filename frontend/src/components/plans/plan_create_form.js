import React from 'react';
import IfLoggedIn from './if_logged_in';
import IfLoggedOut from './if_logged_out';
import '../css/create_plan.scss'


class PlanCreateForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: ''
        }

        this.clearInput = this.clearInput.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    clearInput() {
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {

        let createForm;

        if (!this.props.currentUser) {
            createForm = <IfLoggedOut openModal={this.props.openModal} />
        } else {
            createForm = <IfLoggedIn plan={this.state}
                    newPlan={this.props.plan}
                    createPlan={this.props.createPlan} 
                    clearInput={this.clearInput}/>
        }
       
        return (
            <div className='main-cont'>
                <form className='form-cont'>
                    <h2>Create a plan...</h2>
                    <input type='text'
                        className='form-inputs'
                        value={this.state.title}
                        onChange={this.update('title')}
                        placeholder='Name'
                        />
                    <textarea
                        className='form-inputs'
                        value={this.state.description}
                        onChange={this.update('description')}
                        placeholder='tell us about the plan...'
                        />
                    <p>Select a date range:</p>
                    <div className='calendar-cont'>
                        {/* CALENDAR INSERTED HERE */}
                    </div>
                { createForm }
                </form>
            </div>
        )
    }
};



export default PlanCreateForm;