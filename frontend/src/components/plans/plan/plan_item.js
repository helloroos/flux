import React from 'react';
import EditPlan from './edit_item';

class PlanItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            visible: false,
            joined: false,
            errors: {}
        }
        this.handleClick = this.handleClick.bind(this);
        this.openEdit = this.openEdit.bind(this);
        this.addMember = this.addMember.bind(this);
    }

    addMember(e) {
        e.preventDefault();
        debugger
        this.props.joinParty(this.props.match.params.planId, this.props.currentUser)
            .then((res) => {
                if (res.type === 'RECEIVE_PLAN_ERRORS') {
                    return this.setState({ errors: res.errors })
                } else {
                    return this.setState({ joined: true })
                }
        })
    }

    openEdit() {
        this.setState({ visible: !this.state.visible })
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
                <button onClick={this.openEdit}>
                    Edit plan
                </button>
                {this.state.joined ? (
                     <div>
                        You joind us!
                    </div>
                ) : (
                    <button onClick={this.addMember}>
                        Join
                    </button>
                )}
                {this.state.visible ? (
                    <EditPlan plan={this.props.plan}
                        editPlan={this.props.editPlan}/>
                    ) : null
                }
                {Object.values(this.state.errors).length > 1 ? (
                        <div>Something went wrong</div>
                    ) : null
                }
            </div>
        )
    }
};

export default PlanItem;