import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
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

        this.props.signup(user);
    }

    render() {
        return (
             <div className='input-con'>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.email}
                            onChange={this.update('email')}
                            type='text'
                            placeholder='Email *'
                    />
                    <input value={this.state.password}
                            onChange={this.update('Password')}
                            type='text'
                            placeholder='Enter a password *'
                    />
                    <button type='submit' value='Sign In'/>
                </form>
            </div>
        )
    }
};

export default LoginForm;