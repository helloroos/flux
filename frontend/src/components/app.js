import MainPageContainer from "./main/main_page_container";
import ModalContainer from "./modal/modal_container";
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './main/header_container';
import UserPlansContainer from './plans/user_plans_container';
import Footer from './main/footer';
import PlanItemContainer from './plans/plan/plan_item_container';
import PlanCreateFormContainer from './plans/plan_create_form_container';
import EditPlan from './plans/plan/edit_item';



const App = () => (
    <div>
        <Route path='/' component={HeaderContainer}/>
        <ModalContainer />
        <Switch>
            <Route exact path='/' component={MainPageContainer} />
            <Route exact path='/:planId' component={PlanItemContainer} />
            <Route exact path='/users/:userId' component={UserPlansContainer} />
            <Route exact path='/plans/create' component={PlanCreateFormContainer} />
            <Route exact path='/:planId/edit' component={EditPlan} />
        </Switch>
        {/* <Footer /> */}
    </div>
);

export default App;