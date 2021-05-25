import React from 'react';
import IfLoggedIn from './if_logged_in';
import IfLoggedOut from './if_logged_out';

class PlanCreateForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: ''
        }

        this.clearInput = this.clearInput.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    clearInput() {
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {

        let createForm;

        if (!this.props.currentUser) {
            createForm = <IfLoggedOut openModal={this.props.openModal} />
        } else {
            createForm = <IfLoggedIn plan={this.state}
                    createPlan={this.props.createPlan} 
                    clearInput={this.clearInput}/>
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
                </form>
                { createForm }
            </div>
        )
    }
};

export default PlanCreateForm;