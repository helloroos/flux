import React from 'react';

class CreateComment extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: '',
            author: props.currentUser,
            suggestion: props.suggId,
            created: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    updateProps() {
        this.props.fetchSugg(this.props.suggId)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleButton(e) {
        e.preventDefault();
        this.props.openModal('Sign In')
    }

    handleClick(e) {
        e.preventDefault();
        let sugg = {
            body: this.state.body,
            author: this.state.author,
            suggestion: this.state.suggestion
        }

        this.props.createComment(sugg, this.props.suggId)
        this.setState({
            body: '',
            author: this.props.currentUser,
            suggestion: this.props.suggId,
            created: true
        })
    }

    render() {

        let createButton;

        if (!this.props.currentUser) {
            createButton = (
                <button value='Sign In'
                    onClick={this.handleButton}>
                    Post a comment
                </button>
            )
        } else {
            createButton = (
                <button value='Post'
                    onClick={this.handleClick}>
                    Post a comment
                </button>
            )
        }

        return (
            <div>
                <form>
                    <textarea
                        value={this.state.body}
                        placeholder='Body'
                        onChange={this.update('body')}
                        />
            
                    { createButton }
                </form>
                {this.state.created ? this.updateProps() : null }
            </div>
        )
    }
};

export default CreateComment;