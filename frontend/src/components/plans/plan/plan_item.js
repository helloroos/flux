import React from 'react';

class PlanItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: '' }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchPlan(this.props.match.params.planId)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleClick(e) {
        e.preventDefault();
        let email = this.state.email;
        this.props.sendInvite(email, this.props.plan._id)
        this.setState({ email: '' })
    }

    render() {

        if (!this.props.plan) return null;

        return (
            <div>
                {this.props.plan.title}
                {this.props.plan.description}

                <form>
                    <div>Invite people:</div>
                    <input onChange={this.update('email')}
                            placeholder='Email *'
                    />
                    <button onClick={this.handleClick}>
                        Send Invite
                    </button>
                </form>
            </div>
        )
    }
};

export default PlanItem;