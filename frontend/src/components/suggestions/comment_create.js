import React from 'react';
import '../css/sugg_comments.scss'


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
        
        this.props.createComment(sugg, this.props.sugg._id)
            .then(() => this.props.fetchPlanSuggs(this.props.planId))
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
                <button 
                    className='comment-submit-button'
                    value='Sign In'
                    onClick={this.handleButton}>
                    Post
                </button>
            )
        } else {
            createButton = (
                <button 
                    className='comment-submit-button'
                    value='Post'
                    onClick={this.handleClick}>
                    Post
                </button>
            )
        }

        return (
            <div>
                <form className='comment-form-cont'>
                    <textarea
                        className='input-comment'
                        value={this.state.body}
                        placeholder='Post a comment...'
                        onChange={this.update('body')}
                        />
            
                    { createButton }
                </form>
            </div>
        )
    }
};

export default CreateComment;