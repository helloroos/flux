import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    handleErrors() {
        return this.props.errors.map(error => (<div>{error}</div>))
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password,
        }
        
        this.props.login(user)
        this.props.hideModal()
    }

    render() {

        return (

                <div id='login'>
                    <form >
                        <input className='form-inputs' value={this.state.email}
                                onChange={this.update('email')}
                                type='text'
                                placeholder='Email *'
                            />
                        {/* {this.handleErrors('Email')} */}
                        <input className='form-inputs' value={this.state.password}
                                onChange={this.update('password')}
                                type='password'
                                placeholder='Enter a password *'
                            />
                        {/* {this.handleErrors('Password')} */}
                        <button className='buttons' onClick={this.handleSubmit}
                                value='Sign In'>
                            Sign In
                        </button>
                    </form>
                    {/* {this.handleErrors()} */}
                </div>
        )
    }
};

export default LoginForm;