import React from 'react';
import { withRouter } from 'react-router';
import { DateRange } from 'react-date-range';
import '../css/create_plan.scss'
import '../css/date-range.scss'
import {formatDistance, format} from 'date-fns';


class PlanCreateForm extends React.Component {
    constructor(props) {
        super(props)
        const currDate = new Date()
        this.state = {
            title: '',
            description: '',
            startDate: currDate,
            endDate: currDate,
            created: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
        this.updateDates = this.updateDates.bind(this);
    }

    handleAuth(e) {
        e.preventDefault();
        this.props.openModal('Sign In')
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    updateDates(e) {
        let {startDate, endDate} = e.selection;
        this.setState({
            startDate: startDate,
            endDate: endDate
        })  
    }

    handleClick(e) {
        e.preventDefault();
        let plan = {
            title: this.state.title,
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }
        
        this.props.createPlan(plan)
        this.setState({
            created: true
        })
    }

    refreshPage() {
        if (!this.props.plan) return null;
        this.props.history.push(`/${this.props.plan._id}`)
    }

    render() {
        
        const dateRange = {
            startDate: this.state.startDate, 
            endDate: this.state.endDate,
            key: 'selection',
        }

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
                <h2>Create a plan...</h2>
            <div className='main-cont'>
                <form className='form-cont'>
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
                    <p>Select a broad date range:</p>
                {this.state.created ? this.refreshPage() : null }
                    <div className='calendar-cont'>
                        <DateRange
                            ranges={[dateRange]}
                            onChange={this.updateDates}
                            editableDateInputs={true}
                            showSelectionPreview={true}
                            direction='horizontal'
                            months={1}
                            showDateDisplay={false}
                            showMonthAndYearPickers={false}
                        />

                    </div>
                    <p>{format(this.state.startDate, "MMM d Y")} - {format(this.state.endDate, "MMM d Y")}</p>
                    <p>Length of trip: {formatDistance(this.state.startDate, this.state.endDate)}</p>
                
                { createForm }
                </form>
            </div>
            </div>
        )
    }
};



export default withRouter(PlanCreateForm);