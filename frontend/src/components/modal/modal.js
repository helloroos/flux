import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupContainer from '../session/signup_form_container';
import PlanSuggsContainer from '../suggestions/plan_suggs_container';
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
            <>
                <div className='modal-window' onClick={this.props.hideModal}>
                    <div className='form-cont' onClick={e => e.stopPropagation()}>
                        { modalForm }
                    </div>
                </div>
            </>
        )
    }
};

export default Modal;