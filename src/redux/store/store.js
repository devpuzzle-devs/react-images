import { createStore, compose } from "redux";
import reducer from "../reducers/combineReducers";

const store = createStore(reducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
);

export default store;