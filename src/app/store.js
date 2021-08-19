import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import gridReducer from "./features/Grid/reducer";

let rootReducers = combineReducers({
  grid: gridReducer,
});

const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducers, composeEnhanchers(applyMiddleware(thunk)));

export default store;
