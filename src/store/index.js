import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';

// import sagas from "./actions";
import reducers from "./reducer";

// import reducer from "./reducer";

// создаем saga мидлвар
// монтируем его в Store
const middlewares = [thunk, logger];
const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(...middlewares));

// затем запускаем сагу

export default store;
