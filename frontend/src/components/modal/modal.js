import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupContainer from '../session/signup_form_container';
import '../css/modal.scss'


class Modal extends React.Component {
    render() {
        
        if (!this.props.modal) return null;

        let modalForm;

        switch (this.props.modal) {
            case 'Sign In':
                modalForm = <LoginFormContainer />
                break
            case 'Sign Up':
                modalForm = <SignupContainer />
                break
            default:
                return null
        }
        
        return (
            <div>
                <div onClick={this.props.hideModal}>
                    <div onClick={e => e.stopPropagation()}>
                        { modalForm }
                    </div>
                </div>
            </div>
        )
    }
};

export default Modal;