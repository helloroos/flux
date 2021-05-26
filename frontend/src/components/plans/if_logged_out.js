import React from 'react';

class IfLoggedOut extends React.Component {
    constructor(props) {
        super(props)

        this.handleAuth = this.handleAuth.bind(this)
    }

    handleAuth(e) {
        e.preventDefault();
        let field = e.target.innerHTML;
        this.props.openModal(field)
    }

    render() {
        return (
            <div className='signin-dir'>
                <h5>You must sign in to create a plan</h5>
                <div onClick={() => this.props.openModal('Sign In')}>
                    <h3>Sign In</h3>
                </div>
                {/* <button className='buttons' onClick={this.handleAuth}>
                    Sign In
                </button> */}
                {/* <button className='buttons' onClick={this.handleAuth}>
                    Sign Up
                </button> */}
            </div>
        )
    }
};

export default IfLoggedOut;