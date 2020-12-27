import { combineReducers } from "redux";
import imagesReducer from "./imagesReducer";
import loaderReducer from "./loaderReducer";

const reducer = combineReducers({
  data: imagesReducer,
  loading: loaderReducer
});

export default reducer;