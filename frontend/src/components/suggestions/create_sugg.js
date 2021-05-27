import React from 'react';
import PlanSuggestionsContainer from './plan_suggs_container';

class CreateSugg extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            budget: '',
            dates: '',
            user: '',
            plan: '',
            created: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    updateProps() {
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
            dates: this.state.dates,
            user: this.props.currentUser.id,
            plan: this.props.planId
        }

        this.props.createSugg(sugg, this.props.planId)
        this.setState({
            title: '',
            description: '',
            budget: '',
            dates: '',
            created: true
        })
    }

    render() {

        let createButton;

        if (!this.props.currentUser) {
            createButton = (
                <button value='Sign In'
                    onClick={this.handleButton}>
                    Post a suggestion
                </button>
            )
        } else {
            createButton = (
                <button value='Post'
                    onClick={this.handleClick}>
                    Post a suggestion
                </button>
            )
        }

        return (
            <div>
                 <form>
                    <input type='text'
                        value={this.state.title}
                        onChange={this.update('title')}
                        />
                    <textarea
                        value={this.state.description}
                        onChange={this.update('description')}
                        />
                    <input type='text'
                        value={this.state.budget}
                        onChange={this.update('budget')}
                        />
                    <span>$</span>
                    { createButton }
                </form>
                {this.state.created ? this.updateProps() : null }
            </div>
        )
    }
};

export default CreateSugg;