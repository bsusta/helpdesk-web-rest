import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";

import sidebarReducer from "./reducers/sidebarReducer";
import loginReducer from "./reducers/loginReducer";
import companyReducer from "./reducers/companyReducer";
import filterReducer from "./reducers/filterReducer";

//all reducers gathered together for the redux storage
const reducers = combineReducers({
  login: loginReducer,
  sidebar: sidebarReducer,
  company: companyReducer,
  filter: filterReducer
});

//all enhancers gathered together for the redux storage
const enhancers = compose(applyMiddleware(ReduxThunk));

//creates redux store and exports it
export default () => createStore(reducers, {}, enhancers);
