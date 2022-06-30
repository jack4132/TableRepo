import {applyMiddleware, compose, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import userReducer from "./Reducer/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
});

let composeEnhancers = compose;
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
