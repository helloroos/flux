import React from 'react';
import CreatePlanFormContainer from '../plans/plan_create_form_container';
import UserPlansContainer from '../plans/user_plans_container';

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <CreatePlanFormContainer />
            </div>
        );
    }
}

export default MainPage;