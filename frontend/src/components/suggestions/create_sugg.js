import React from 'react';

class CreateSugg extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            budget: '$$',
            dates: '',
            user: '',
            plan: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
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
                <button value='Post'
                    className='sugg-buttons'
                    onClick={this.handleClick}>
                    Post a suggestion
                </button>
            )
        }

        return (
            <div className='sugg-cont'>
                 <form>
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