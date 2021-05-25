import MainPageContainer from "./main/main_page_container";
import ModalContainer from "./modal/modal_container";
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './main/header_container'
import Footer from './main/footer'



const App = () => (
    <div>
        <Route path='/' component={HeaderContainer}/>
        <ModalContainer />
        <Switch>
            <Route exact path='/' component={MainPageContainer} />
        </Switch>
        <Footer />
    </div>
);

export default App;