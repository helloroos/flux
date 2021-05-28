import React from 'react';
// import PlanSuggestions from './plan_suggs';
// import PlanSuggestionsContainer from './plan_suggs_container';
import '../css/plan_sugg.scss'
import '../css/create_sugg.scss'

class CreateSugg extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            budget: '$$',
            user: '',
            plan: '',
            created: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        this.props.fetchPlanSuggs(this.props.planId)
    }

    handleButton(e) {
        e.preventDefault();
        this.props.openModal('Sign In')
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleClick(e) {
        e.preventDefault();
        let sugg = {
            title: this.state.title,
            description: this.state.description,
            budget: this.state.budget,
            user: this.props.currentUser.id,
            plan: this.props.planId
        }

        this.props.createSugg(sugg, this.props.planId)
            .then(() => this.setState({
                title: '',
                description: '',
                budget: '',
                dates: '',
                created: true
            })
        )
    }

    handleSelect(value) {
        return (this.state.budget === value)
    }

    render() {
        let createButton;

        if (!this.props.currentUser) {
            createButton = (
                <button value='Sign In'
                    className='sugg-buttons'
                    onClick={this.handleButton}>
                    Post a suggestion
                </button>
            )
        } else {
            createButton = (
                <button className='buttons-add-sugg' value='Post'
                    onClick={this.handleClick}>
                    Add suggestion
                </button>
            )
        }

        return (
            <div className='sugg-cont'>
                 <form className='sugg-form-create'>
                    <input type='text'
                        className='sugg-input'
                        value={this.state.title}
                        placeholder='Make a suggestion'
                        onChange={this.update('title')}
                        />
                    <textarea
                        className='sugg-input'
                        value={this.state.description}
                        placeholder='Description'
                        onChange={this.update('description')}
                        />
                    <div className='radio-cont'>
                        <label>$
                        <input type='radio' 
                            value='$'
                            name='$'
                            onChange={this.update('budget')}
                            checked={this.handleSelect('$')}
                            /></label>
                        <label>$$
                        <input type='radio' 
                            value='$$'
                            name='$$'
                            onChange={this.update('budget')}
                            checked={this.handleSelect('$$')}
                            /></label>
                        <label>$$$
                        <input type='radio' 
                            value='$$$'
                            name='$$$'
                            onChange={this.update('budget')}
                            checked={this.handleSelect('$$$')}
                            /></label>
                    </div>
            
                    { createButton }
                </form>
                
            </div>
        )
    }
};

export default CreateSugg;