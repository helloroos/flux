import React from 'react';

class CreateSugg extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            budget: '',
            dates: '',
            user: '',
            plan: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleButton = this.handleButton.bind(this);
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
            </div>
        )
    }
};

export default CreateSugg;