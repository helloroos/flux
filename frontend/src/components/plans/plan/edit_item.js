import React from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

class EditPlan extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            title: props.plan.title,
            description: props.plan.description,
            startDate: props.plan.startDate,
            endDate: props.plan.endDate
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.updateDates = this.updateDates.bind(this);
    }

    componentDidMount() {
        this.props.fetchPlan(this.props.planId)
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
        let {startDate, endDate} = e.selection;
        this.setState({
            startDate: startDate,
            endDate: endDate
        })  
    }

    render() {
        if (!this.props.plan) return null;

        const dateRange = {
            startDate: this.state.startDate, 
            endDate: this.state.endDate,
            key: 'selection',
        }

        return (
            <form>
                <label>Title:</label>
                <input type='text'
                    onChange={this.update('title')}
                    />
                <label>Description:</label>
                <textarea
                    onChange={this.update('description')}
                    />
                <button onClick={this.handleEdit}>
                    Submit changes
                </button>
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
            </form>
        )
    }
};

export default EditPlan;