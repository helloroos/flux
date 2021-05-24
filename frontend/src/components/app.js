import MainPage from "./main/main_page";
import ModalContainer from "./modal/modal_container";
import { Route } from 'react-router-dom';


const App = () => (
    <div>
        <ModalContainer />
        <Route exact path='/' component={MainPage} />
    </div>
);

export default App;