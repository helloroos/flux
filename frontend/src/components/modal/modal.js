import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        if (!this.props.modal) return null;

        let modalForm;

        switch (this.props.modal) {
            case 'Sign In':
                modalForm = ( <div>This is sign in</div> )
                break
            case 'Sign Up':
                modalForm = ( <div>This is sign un</div> )
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