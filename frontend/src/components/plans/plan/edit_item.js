import React from 'react';

class EditPlan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.plan,
            description: props.plan
        }
        this.handleEdit = this.handleEdit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.editPlan(this.state, this.props.plan._id)
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        return (
            <form>
                <label>Title:</label>
                <input type='text'
                    onChange={this.update('title')}
                    />
                <label>Description:</label>
                <textarea
                    onChange={this.update('description')}
                    />
                <button onClick={this.handleEdit}>
                    Submit changes
                </button>
            </form>
        )
    }
};

export default EditPlan;