import MainPageContainer from "./main/main_page_container";
import ModalContainer from "./modal/modal_container";
import { Route } from 'react-router-dom';


const App = () => (
    <div>
        <ModalContainer />
        <Route exact path='/' component={MainPageContainer} />
    </div>
);

export default App;