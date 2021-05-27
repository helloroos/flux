import React from 'react';
import { withRouter } from 'react-router';
import '../css/create_plan.scss'


class PlanCreateForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            created: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
    }

    handleAuth(e) {
        e.preventDefault();
        this.props.openModal('Sign In')
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleClick(e) {
        e.preventDefault();
        let plan = {
            title: this.state.title,
            description: this.state.description
        }

        this.props.createPlan(plan)
        this.setState({
            created: true
        })
    }

    refreshPage() {
        debugger
        if (!this.props.plan) return null;
        this.props.history.push(`/${this.props.plan._id}`)
    }

    render() {

        let createForm;

        if (!this.props.currentUser) {
            createForm = (
                <button onClick={this.handleAuth} className='buttons'>
                    Create
                </button>
            )
        } else {
            createForm = (
                <button className='buttons'
                    onClick={this.handleClick}>
                    Create
                </button>
            )
        }
       
        return (
            <div className='body-2'>
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
                {this.state.created ? this.refreshPage() : null }
            </div>
            </div>
        )
    }
};



export default withRouter(PlanCreateForm);