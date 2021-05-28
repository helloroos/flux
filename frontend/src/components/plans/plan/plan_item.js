import React from 'react';
import { NavLink } from 'react-router-dom';
import CreateSuggContainer from '../../suggestions/create_sugg_container';
import PlanSuggestionsContainer from '../../suggestions/plan_suggs_container';
import { DateRange } from 'react-date-range';
import '../../css/plan_page.scss'
import '../../css/date-range.scss'

class PlanItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            joined: false,
            errors: {},
            loggedIn: true,
            startDate: new Date(),
            endDate: new Date()
        }
        this.handleClick = this.handleClick.bind(this);
        this.addMember = this.addMember.bind(this);
        this.updateDates = this.updateDates.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
    }

    refreshPage() {
        if (!this.props.currentUser) {
            this.props.openModal('Sign In')
        } else {
            this.setState({ loggedIn: false })
        }
    }

    addMember(e) {
        e.preventDefault();
        
        this.props.joinParty(this.props.match.params.planId, this.props.currentUser.id)
            .then((res) => {
                if (res.type === 'RECEIVE_PLAN_ERRORS') {
                    return this.setState({ errors: res.errors })
                } else {
                    return this.setState({ joined: true })
                }
        })
    }

    componentDidMount() {
        debugger
        this.props.fetchPlan(this.props.match.params.planId)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    updateDates(e) {
        let { startDate, endDate } = e.selection;
        this.setState({
            startDate: startDate,
            endDate: endDate
        })
    }

    handleClick(e) {
        e.preventDefault();
        let email = this.state.email;
        this.props.sendInvite(email, this.props.plan._id)
        this.setState({ email: '' })
    }

    render() {
        
        if (!this.props.plan) return null;
        let joinButton;

        let mapped;
        if (this.props.currentUser) {
            if (this.props.plan.members) {
                mapped = this.props.plan.members
                    .filter(plan => plan._id === this.props.currentUser._id)

                if (mapped.length > 0) {
                    joinButton = (
                        <p className='joined'>Joined!</p> 
                    )
                } else {
                    joinButton = (
                        <button className='buttons' onClick={this.addMember}>
                            Join
                        </button>
                    )
                }
            }
        }

        let members;

        if (this.props.plan.members) {
            members = this.props.plan.members.map(user => (
                    <h5 className='member-name'>{user.firstName} {user.lastName}</h5>
            ))
        }

        const dateRange = {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            key: 'selection',
        }


        debugger
        return (
            <div className='body-4'>
                    <h2 className='plan-title'>{this.props.plan.title}</h2>
                        <div className='info-cont'>
                            <p className='main-desc'>{this.props.plan.description}</p>
                            {this.state.loggedIn ? this.refreshPage() : null}
                            <NavLink to={`/${this.props.plan._id}/edit`}>
                                <button className='buttons button-edit'>Edit Plan</button>
                            </NavLink>
                        </div>
            <div className='total-main'>
                    <div className='left-side'>

                    <div className='calendar-cont'>
                        <DateRange
                            ranges={[dateRange]}
                            onChange={this.updateDates}
                            editableDateInputs={true}
                            showSelectionPreview={true}
                            direction='horizontal'
                            months={1}
                            showDateDisplay={false}
                            showMonthAndYearPickers={false}
                        />
                    </div>

                        <div className='right-left'>
                        <div className='members-cont'>
                            <div className='member-list-scroll'>
                                { members }
                            </div>
                        </div>

                        <div className='invite-form'>
                            <form>
                                <div className='top-invite'>
                                <p className='invite-ppl'>Invite people</p>
                                {joinButton}
                                </div>
                                <input onChange={this.update('email')}
                                        placeholder='Email'
                                />
                                 <i onClick={this.handleClick} className="add-icon icons fas fa-plus-circle"></i>

                            </form>
                        </div>
                        </div>

                    </div>
                    <div className='right-side'>
                        <div className='plan-sugg-cont'>
                            <div className='create-sugg'><CreateSuggContainer /></div>
                            <div className='all-suggs'><PlanSuggestionsContainer /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default PlanItem;