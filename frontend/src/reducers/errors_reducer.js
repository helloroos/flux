import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import planErrorsReducer from './plan_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  planErrors: planErrorsReducer
});

export default errorsReducer;