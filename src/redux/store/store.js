import { createStore, compose,applyMiddleware  } from "redux";
import reducer from "../reducers/combineReducers";
import thunk from 'redux-thunk';


const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
);

export default store;