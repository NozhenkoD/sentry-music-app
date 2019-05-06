import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducer";

const middlewares = [thunk, logger];
const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
