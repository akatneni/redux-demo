import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedInReducer from "./loggedIn";

const allReducers = combineReducers({
    counter: counterReducer,
    loggedIn: loggedInReducer
});

export default allReducers;