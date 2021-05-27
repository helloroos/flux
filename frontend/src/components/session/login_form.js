import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            errored: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    handleErrors(field) {
        
        return this.props.errors.filter(error => error.includes(field))
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
            .then((res) => {
                if (typeof res !== 'undefined') {
                    return this.setState({ errored: true })
                } else {
                    this.props.hideModal()
                }
            })
        }

    render() {
        return (
                <div id='login'>
                    <form >
                        <input className='form-inputs' value={this.state.email}
                                onChange={this.update('email')}
                                type='text'
                                placeholder='Email'
                            />
                        {this.state.errored ? (
                            <div>{this.handleErrors('Email')}</div>
                            ) : null
                        }
                        <input className='form-inputs' value={this.state.password}
                                onChange={this.update('password')}
                                type='password'
                                placeholder='Password'
                            />
                        {this.state.errored ? (
                            <div>{this.handleErrors('password')}</div>
                            ) : null
                        }
                        <button className='buttons' onClick={this.handleSubmit}
                                value='Sign In'>
                            Sign In
                        </button>
                    <h5>Don't have an account?</h5>
                    <div onClick={() => this.props.openModal('Sign Up')}> 
                        <h3>Create an account</h3>
                    </div>
                    </form>
                </div>
        )
    }
};

export default LoginForm;