import { combineReducers } from "redux";
import imagesReducer from "./imagesReducer";

const reducer = combineReducers({
  data: imagesReducer,
});

export default reducer;