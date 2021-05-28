import React from 'react';
import { NavLink } from 'react-router-dom';
import PlanSuggestions from '../../suggestions/plan_suggs';
import '../../css/plan_page.scss'
import CreateSugg from '../../suggestions/create_sugg';
import { DateRange } from 'react-date-range';
import '../../css/plan_page.scss'
import '../../css/date-range.scss'
import Upvote from '../../suggestions/upvote';
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
        // this.refreshPage = this.refreshPage.bind(this);
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

    // componentWillReceiveProps(nextProps) {
    // //     // if (nextProps.planSuggs !== this.props.planSuggs) {
    // //     //     this.props.fetchPlan(this.props.match.params.planId)
    //     this.props.fetchPlanSuggs(this.props.match.params.planId)
    // //     // }
    // }

    componentDidMount() {
        debugger
        this.props.fetchPlan(this.props.match.params.planId)
            .then(plan => this.props.fetchPlanSuggs(plan.plan.data._id))
            // .then(plans => {debugger})
        // if (!this.props.currentUser) {
        //     this.props.openModal('Sign In')
        // } else {
        //     this.setState({ loggedIn: false })
        // }
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
            members = this.props.plan.members.map((user, i) => (
                    <h5 key={`user-${i}`} className='member-name'>{user.firstName} {user.lastName}</h5>
            ))
        }

        const suggs = this.props.planSuggs.map((sugg, i) => (
            <div key={`sugg-item-${i}`} className='each-sugg-cont'>
                <div className='sugg-left'>
                    <p className='sugg-title'>{sugg.title}</p>
                    <p className='sugg-desc'>{sugg.description}</p>
                    <p className='sugg-budget'>{sugg.budget}</p>
                    <p className='sugg-author'>{sugg.user}</p>
                </div>
                <Suggestion sugg={sugg}
                    createComment={this.props.createComment}
                    currentUser={this.props.currentUser}
                    openModal={this.props.openModal}
                    fetchPlan={this.props.fetchPlan}
                    fetchSugg={this.props.fetchSugg}/>
                {/* <div className='sugg-right'>
                <Upvote sugg={sugg}
                    currentUser={this.props.currentUser}
                    upvote={this.props.upvote}
                    upvoteRemove={this.props.upvoteRemove}
                    downvote={this.props.downvote}
                    downvoteRemove={this.props.downvoteRemove}
                    />
                </div> */}

            </div>
        ))

        const dateRange = {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            key: 'selection',
        }

        if (!this.props.planSuggs) return null;
        
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
                                <CreateSugg suggs={this.props.planSuggs}
                                    planId={this.props.plan._id}
                                    createSugg={this.props.createSugg}
                                    upvote={this.props.upvote}
                                    fetchPlanSuggs={this.props.fetchPlanSuggs}
                                    upvoteRemove={this.props.upvoteRemove}
                                    downvote={this.props.downvote}
                                    downvoteRemove={this.props.downvoteRemove}
                                    createComment={this.props.createComment}
                                    currentUser={this.props.currentUser}
                                    openModal={this.props.openModal}
                                    fetchSugg={this.props.fetchSugg}
                                />
                            </div>
                            <div className='all-suggs'>
                                {suggs}
                                {/* <PlanSuggestions suggs={this.props.planSuggs}
                                    planId={this.props.planId}
                                    currentUser={this.props.currentUser}
                                    upvote={this.props.upvote}
                                    upvoteRemove={this.props.upvoteRemove}
                                    downvote={this.props.downvote}
                                    downvoteRemove={this.props.downvoteRemove}
                                    createComment={this.props.createComment}
                                    openModal={this.props.openModal}
                                    fetchSugg={this.props.fetchSugg}
                                /> */}
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default PlanItem;