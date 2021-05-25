import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        }

        this.props.signup(user).then(this.props.hideModal);
    }

    render() {
        return (
            <div className='form-cont'>
                <input value={this.state.firstName}
                        onChange={this.update('firstName')}
                        type='text'
                        placeholder='First Name *'
                />
                <input className='form-inputs' value={this.state.lastName}
                        onChange={this.update('lastName')}
                        type='text'
                        placeholder='Last Name *'
                />
                <input className='form-inputs' value={this.state.email}
                        onChange={this.update('email')}
                        type='text'
                        placeholder='Email *'
                />
                <input className='form-inputs' value={this.state.password}
                        onChange={this.update('password')}
                        type='password'
                        placeholder='Enter a password *'
                />
                <input className='form-inputs' value={this.state.password2}
                        onChange={this.update('password2')}
                        type='password'
                        placeholder='Re-enter a password *'
                />
                <button value='Sign Up' onClick={this.handleSubmit}>Sign Up</ button>
            </div>
        )
    }
};

export default SignupForm;