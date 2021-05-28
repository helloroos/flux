import React from 'react';
import { DateRange } from 'react-date-range';
import '../../css/create_plan.scss'
import '../../css/date-range.scss'

class EditPlan extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            startDate: new Date(),
            endDate: new Date()
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.updateDates = this.updateDates.bind(this);
    }

    componentDidMount() {
      
        this.props.fetchPlan(this.props.planId)
            .then(plan => 
                this.setState({
                title: plan.plan.data.title,
                description: plan.plan.data.description,
                startDate: plan.plan.data.startDate,
                endDate: plan.plan.data.endDate
            }))
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.editPlan(this.state, this.props.planId)
        this.props.history.push(`/${this.props.planId}`)
    }

    updateDates(e) {
        let { startDate, endDate } = e.selection;
        this.setState({
            startDate: startDate,
            endDate: endDate
        }) 
    }

    render() {
        if (!this.props.plan.plan) return null;

        let dateRange = {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            key: 'selection',
        }
      
        if (this.props.plan.plan.startDate){
            dateRange = {
                startDate: new Date(this.props.plan.plan.startDate.toString().slice(0,10)) ,
                endDate: new Date(this.props.plan.plan.endDate.toString().slice(0,10)),
                key: 'selection',
            }
        }
      
        return (
            <div className='body-2'>
                <h2>Edit your plan...</h2>
                <div className='main-cont'>
                    <form className='form-cont'>
                    <input type='text'
                        className='form-inputs'
                        value={this.state.title}
                        onChange={this.update('title')}
                     />

                    <textarea
                        className='form-inputs'
                        value={this.state.description}
                        onChange={this.update('description')}
                        />
                    <p>Edit the date range:</p>
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
                <button className='buttons' onClick={this.handleEdit}>
                    Submit
                 </button>

                    </form>
                </div>
            </div>
    
        )}
};

export default EditPlan;