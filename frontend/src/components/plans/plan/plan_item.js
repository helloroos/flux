import React from 'react';
import { NavLink } from 'react-router-dom';
import PlanSuggestionsCont from '../../suggestions/plan_suggs_container';
import '../../css/plan_page.scss'
import CreateSuggContainer from '../../suggestions/create_sugg_container';
import { DateRange } from 'react-date-range';
import '../../css/plan_page.scss'
import '../../css/date-range.scss'
import Suggestion from '../../suggestions/suggestion_item';

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
                        <button className='buttons button-join' onClick={this.addMember}>
                            Join
                        </button>
                    )
                }
            }
        }

        let members;

        if (this.props.plan.members) {
            members = this.props.plan.members.map((user, i) => (
                    <h5 key={`user-${i}`} className='member-name'>{user.firstName} {user.lastName}</h5>
            ))
        }

        let dateRange = {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            key: 'selection',
        }
        debugger
        if (this.props.plan.startDate){
            dateRange = {
                startDate: new Date(this.props.plan.startDate.toString().slice(0,10)) ,
                endDate: new Date(this.props.plan.endDate.toString().slice(0,10)),
                key: 'selection',
            }
        }
        
        return (
            <div className='body-4'>
            <div className='total-main'>
                    <div className='left-side'>
                        <div className='info-cont'>
                            <p className='plan-title'>{this.props.plan.title}</p>
                            <p className='main-desc'>{this.props.plan.description}</p>
                            {/* {this.state.loggedIn ? this.refreshPage() : null} */}
                            <NavLink to={`/${this.props.plan._id}/edit`}>
                                <button className='buttons button-edit'>Edit Plan</button>
                            </NavLink>
                        </div>
            <div className='bottom-left'>
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
                                <p className='invited-title'>Invited members</p>
                                { members }
                            </div>
                        </div>

                        <div className='invite-form'>
                            <form>
                                <div className='top-invite'>
                                <p className='invite-ppl'>Invite people</p>
                                {joinButton}
                                </div>
                                <input 
                                    className='email-input'
                                    onChange={this.update('email')}
                                    placeholder='Email'
                                    value={this.state.email}
                                />
                                 <i onClick={this.handleClick} className="add-icon icons fas fa-plus-circle"></i>

                            </form>
                        </div>
                        </div>
                        </div>

                    </div>
                    <div className='right-side'>
                        <div className='plan-sugg-cont'>
                            <div className='create-sugg'>
                                <CreateSuggContainer />                               
                            </div>
                            <div className='all-suggs'>
                                <PlanSuggestionsCont />                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default PlanItem;