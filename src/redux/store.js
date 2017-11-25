import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import loginReducer from './reducers/loginReducer';

//all reducers gathered together for the redux storage
const reducers = combineReducers({
  login:loginReducer,
});

//all enhancers gathered together for the redux storage
const enhancers = compose(
  applyMiddleware(ReduxThunk),
);

//creates redux store and exports it
export default () => createStore(reducers, {}, enhancers);
