import React from 'react';
import { withRouter } from 'react-router';
import { DateRange } from 'react-date-range';
import '../css/create_plan.scss'
import '../css/date-range.scss'
import {formatDistanceStrict, addDays} from 'date-fns';


class PlanCreateForm extends React.Component {
    constructor(props) {
        super(props)
        const currDate = new Date()
        this.state = {
            title: '',
            description: '',
            startDate: currDate,
            endDate: currDate,
            created: false,
            errored: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
        this.updateDates = this.updateDates.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    handleAuth(e) {
        e.preventDefault();
        this.props.openModal('Sign In')
    }

    handleErrors() {
        return 'title field is required'
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
            .then(plan => {
                if (plan.type === 'RECEIVE_PLAN') {
                    this.props.history.push(`/${plan.plan.data._id}`)
                } else {
                    this.setState({ errored: true })
                }
            })
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

        let tripLength;
        if ((this.state.endDate - this.state.startDate) > 0) {
            tripLength = (
                <p>{formatDistanceStrict(this.state.startDate, addDays(this.state.endDate, 1))}</p>
            )
        }
       
        return (
            <div className='body-2'>
            <div className='main-cont'>
                <form className='form-cont'>
                    <input type='text'
                        className='form-inputs'
                        value={this.state.title}
                        onChange={this.update('title')}
                        placeholder='First name this plan'
                        />
                        {this.state.errored ? (
                            <div className='errors' >{this.handleErrors()}</div>
                            ) : null
                        }
                    <textarea
                        className='form-inputs'
                        value={this.state.description}
                        onChange={this.update('description')}
                        placeholder='then tell us a little about it'
                        />
                    <p>Roughly when are you thinking?</p>
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
                    <p>
                        {tripLength}
                    </p>
                { createForm }
                </form>
            </div>
            </div>
        )
    }
};



export default withRouter(PlanCreateForm);